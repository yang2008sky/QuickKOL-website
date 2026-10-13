const vertexSource = `
  attribute vec4 aSeed;
  uniform vec2 uResolution;
  uniform vec2 uPointer;
  uniform vec4 uContent;
  uniform vec4 uActions;
  uniform float uPointerStrength;
  uniform float uTime;
  uniform float uDpr;
  varying float vOpacity;
  varying float vTint;

  float readability(vec2 pixel, vec4 bounds) {
    vec2 edge = abs(pixel - bounds.xy) - bounds.zw;
    float distance = length(max(edge, vec2(0.0))) + min(max(edge.x, edge.y), 0.0);
    return mix(0.07, 1.0, smoothstep(-8.0, 38.0, distance));
  }

  void main() {
    float angle = aSeed.x + uTime * 0.075;
    float roll = angle * 2.0 + uTime * 0.28;
    float width = 0.18 * (0.82 + 0.18 * sin(angle - uTime * 0.16));
    float across = aSeed.y * width;
    float thickness = aSeed.z * 0.035;
    float radius = 1.0 + 0.12 * cos(angle * 3.0 + uTime * 0.19);
    float radial = across * cos(roll) + thickness * sin(roll);
    vec3 point = vec3(
      cos(angle) * (radius + radial),
      sin(angle) * (radius + radial),
      across * sin(roll) - thickness * cos(roll)
    );
    point.z += 0.16 * sin(angle * 2.0 - uTime * 0.21);
    point.y += 0.08 * sin(angle * 3.0 + uTime * 0.24);

    // Turn the entire ribbon in space, so its edges fold into dense seams.
    float tilt = 0.42 + 0.28 * sin(uTime * 0.13);
    point.yz = mat2(cos(tilt), -sin(tilt), sin(tilt), cos(tilt)) * point.yz;
    float turn = 0.28 * sin(uTime * 0.11 + 0.5);
    point.xz = mat2(cos(turn), -sin(turn), sin(turn), cos(turn)) * point.xz;
    float lean = -0.16 + 0.16 * sin(uTime * 0.09);
    point.xy = mat2(cos(lean), -sin(lean), sin(lean), cos(lean)) * point.xy;
    float perspective = 1.0 / (1.0 + point.z * 0.22);
    vec2 scale = vec2(uResolution.x * 0.41, uResolution.y * 0.39);
    vec2 pixel = uResolution * vec2(0.51, 0.50) + point.xy * scale * perspective;

    vec2 delta = pixel - uPointer;
    float distance = length(delta);
    vec2 direction = delta / max(distance, 1.0);
    float reach = 64.0;
    float influence = exp(-distance * distance / (reach * reach) * 1.6);
    // Vary each grain's response so the pointer stirs dust instead of cutting a clean hole.
    float response = smoothstep(0.08, 0.85, aSeed.w);
    vec2 drift = direction * (16.0 + 27.0 * response);
    pixel += drift * influence * response * uPointerStrength;
    float core = exp(-aSeed.y * aSeed.y * 0.22);
    vOpacity = (0.30 + core * 0.36) * (0.85 + point.z * 0.20);
    vOpacity *= 1.0 - influence * (0.25 + 0.55 * response) * uPointerStrength;
    vOpacity *= readability(pixel, uContent) * readability(pixel, uActions);
    vTint = aSeed.w;
    gl_Position = vec4(pixel / uResolution * vec2(2.0, -2.0) + vec2(-1.0, 1.0), 0.0, 1.0);
    gl_PointSize = (1.0 + aSeed.w * 0.90) * uDpr * perspective;
  }
`;

const fragmentSource = `
  precision mediump float;
  uniform float uDark;
  varying float vOpacity;
  varying float vTint;

  void main() {
    float distance = length(gl_PointCoord - vec2(0.5));
    float edge = 1.0 - smoothstep(0.20, 0.50, distance);
    vec3 ink = mix(vec3(0.16, 0.25, 0.43), vec3(0.28, 0.33, 0.52), vTint);
    vec3 light = mix(vec3(0.38, 0.64, 1.0), vec3(0.67, 0.57, 1.0), vTint);
    gl_FragColor = vec4(mix(ink, light, uDark), vOpacity * edge);
  }
`;

export function mountHeroParticles(canvas, reducedMotion = false) {
  if (!canvas) return () => {};
  const gl = canvas.getContext("webgl", { alpha: true, antialias: false, depth: false });
  if (!gl) return () => {};

  function compile(type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }

  const vertex = compile(gl.VERTEX_SHADER, vertexSource);
  const fragment = compile(gl.FRAGMENT_SHADER, fragmentSource);
  if (!vertex || !fragment) {
    if (vertex) gl.deleteShader(vertex);
    if (fragment) gl.deleteShader(fragment);
    return () => {};
  }
  const program = gl.createProgram();
  gl.attachShader(program, vertex);
  gl.attachShader(program, fragment);
  gl.linkProgram(program);
  gl.deleteShader(vertex);
  gl.deleteShader(fragment);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    gl.deleteProgram(program);
    return () => {};
  }
  gl.useProgram(program);
  gl.enable(gl.BLEND);
  gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  const seedLocation = gl.getAttribLocation(program, "aSeed");
  gl.enableVertexAttribArray(seedLocation);
  gl.vertexAttribPointer(seedLocation, 4, gl.FLOAT, false, 0, 0);
  const uniforms = Object.fromEntries(["Resolution", "Pointer", "Content", "Actions", "PointerStrength", "Time", "Dpr", "Dark"].map((name) => [name, gl.getUniformLocation(program, `u${name}`)]));
  const backdrop = canvas.parentElement;
  const copy = backdrop.nextElementSibling;
  const description = copy.querySelector(".hero-description");
  const actions = copy.querySelector(".hero-actions");
  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const pointer = { x: 0, y: 0, active: false, strength: 0 };
  let width = 0;
  let height = 0;
  let count = 0;
  let frame;
  let lastTime;
  let time = 0;
  let visible = true;

  function render() {
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.uniform2f(uniforms.Resolution, width, height);
    gl.uniform2f(uniforms.Pointer, pointer.x, pointer.y);
    gl.uniform1f(uniforms.PointerStrength, pointer.strength);
    gl.uniform1f(uniforms.Time, time);
    gl.uniform1f(uniforms.Dark, document.documentElement.dataset.theme === "dark" ? 1 : 0);
    gl.drawArrays(gl.POINTS, 0, count);
  }

  function animate(timestamp) {
    const delta = lastTime === undefined ? 0 : Math.min((timestamp - lastTime) / 1000, 0.05);
    lastTime = timestamp;
    time += delta;
    pointer.strength += ((pointer.active ? 1 : 0) - pointer.strength) * (1 - Math.exp(-delta * 8));
    render();
    frame = window.requestAnimationFrame(animate);
  }

  function updatePlayback() {
    window.cancelAnimationFrame(frame);
    lastTime = undefined;
    if (reducedMotion || motionQuery.matches || !visible || document.hidden) {
      pointer.strength = 0;
      render();
    } else {
      frame = window.requestAnimationFrame(animate);
    }
  }

  function resize() {
    const bannerHeight = copy.nextElementSibling.offsetTop;
    if (backdrop.offsetHeight !== bannerHeight) backdrop.style.height = `${bannerHeight}px`;
    const bounds = backdrop.getBoundingClientRect();
    width = Math.max(1, bounds.width);
    height = Math.max(1, bounds.height);
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.uniform1f(uniforms.Dpr, dpr);
    const content = description.getBoundingClientRect();
    gl.uniform4f(uniforms.Content, content.left - bounds.left + content.width / 2, content.top - bounds.top + content.height / 2, content.width / 2, content.height / 2);
    const buttons = actions.getBoundingClientRect();
    gl.uniform4f(uniforms.Actions, buttons.left - bounds.left + buttons.width / 2, buttons.top - bounds.top + buttons.height / 2, buttons.width / 2, buttons.height / 2);
    const nextCount = width < 620 ? 36000 : 140000;
    if (count !== nextCount) {
      count = nextCount;
      const seeds = new Float32Array(count * 4);
      for (let index = 0; index < count; index++) {
        const radius = Math.sqrt(-2 * Math.log(Math.max(Math.random(), 0.0001)));
        const angle = Math.random() * Math.PI * 2;
        seeds.set([Math.random() * Math.PI * 2, radius * Math.cos(angle), radius * Math.sin(angle), Math.random()], index * 4);
      }
      gl.bufferData(gl.ARRAY_BUFFER, seeds, gl.STATIC_DRAW);
    }
    render();
  }

  function updatePointer(event) {
    const bounds = backdrop.getBoundingClientRect();
    pointer.x = event.clientX - bounds.left;
    pointer.y = event.clientY - bounds.top;
    pointer.active = event.pointerType === "mouse" && pointer.x >= 0 && pointer.x <= width && pointer.y >= 0 && pointer.y <= height;
  }

  function clearPointer() {
    pointer.active = false;
  }

  function updateMotion() {
    reducedMotion = motionQuery.matches;
    updatePlayback();
  }

  const resizeObserver = new ResizeObserver(resize);
  const intersectionObserver = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    updatePlayback();
  });
  const themeObserver = new MutationObserver(render);
  resize();
  resizeObserver.observe(backdrop);
  resizeObserver.observe(copy);
  intersectionObserver.observe(backdrop);
  themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  motionQuery.addEventListener("change", updateMotion);
  copy.addEventListener("animationend", resize);
  document.addEventListener("visibilitychange", updatePlayback);
  window.addEventListener("pointermove", updatePointer, { passive: true });
  window.addEventListener("blur", clearPointer);
  document.documentElement.addEventListener("pointerleave", clearPointer);
  updatePlayback();

  return () => {
    window.cancelAnimationFrame(frame);
    resizeObserver.disconnect();
    intersectionObserver.disconnect();
    themeObserver.disconnect();
    motionQuery.removeEventListener("change", updateMotion);
    copy.removeEventListener("animationend", resize);
    document.removeEventListener("visibilitychange", updatePlayback);
    window.removeEventListener("pointermove", updatePointer);
    window.removeEventListener("blur", clearPointer);
    document.documentElement.removeEventListener("pointerleave", clearPointer);
    gl.deleteBuffer(buffer);
    gl.deleteProgram(program);
  };
}
