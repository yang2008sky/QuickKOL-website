import { mkdir, writeFile } from 'node:fs/promises';

const output = new URL('../public/assets/blog/', import.meta.url);
await mkdir(output, { recursive: true });

const font = 'font-family="Arial, Helvetica, sans-serif"';
const label = (text, x, y, color = '#2377ee') => `<text x="${x}" y="${y}" fill="${color}" ${font} font-size="17" font-weight="700" letter-spacing="3">${text}</text>`;
const title = (lines, x, y, color = '#101828', size = 62) => `<text x="${x}" y="${y}" fill="${color}" ${font} font-size="${size}" font-weight="800" letter-spacing="-2">${lines.map((line, index) => `<tspan x="${x}" dy="${index ? size * 1.02 : 0}">${line}</tspan>`).join('')}</text>`;
const footer = (color = '#667085') => `<text x="60" y="674" fill="${color}" ${font} font-size="14" font-weight="700" letter-spacing="1.5">QUICKKOL STRATEGY TEAM</text>`;
const wrap = (background, content, description) => `<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="720" viewBox="0 0 1280 720" role="img" aria-labelledby="cover-title cover-desc"><title id="cover-title">QuickKOL editorial cover</title><desc id="cover-desc">${description}</desc><rect width="1280" height="720" fill="${background}"/>${content}</svg>`;

const covers = {
  'competitor-map.svg': wrap('#f4efe5', `
    ${label('QUICKKOL / CREATOR DISCOVERY', 60, 58)}${title(['MAP THE', 'PARTNERSHIPS.'], 60, 140)}
    <path d="M690 180L850 100 1030 170 1175 92M690 180L802 338 1010 278 1175 392M802 338L934 548 1175 392M1010 278L934 548" fill="none" stroke="#1a3764" stroke-width="5" opacity=".45"/>
    <g ${font} text-anchor="middle" font-weight="700"><circle cx="690" cy="180" r="64" fill="#ff765f"/><text x="690" y="187" font-size="17">BRAND A</text><circle cx="850" cy="100" r="44" fill="#247df2"/><text x="850" y="106" fill="white" font-size="15">CREATOR</text><circle cx="1030" cy="170" r="54" fill="#9bdd8a"/><text x="1030" y="176" font-size="15">REVIEW</text><circle cx="1175" cy="92" r="34" fill="#ffcf4d"/><text x="1175" y="98" font-size="13">UK</text><circle cx="802" cy="338" r="48" fill="#247df2"/><text x="802" y="344" fill="white" font-size="15">CREATOR</text><circle cx="1010" cy="278" r="68" fill="#ff765f"/><text x="1010" y="285" font-size="17">BRAND B</text><circle cx="1175" cy="392" r="58" fill="#9bdd8a"/><text x="1175" y="398" font-size="15">TUTORIAL</text><circle cx="934" cy="548" r="40" fill="#ffcf4d"/><text x="934" y="554" font-size="14">GAP</text></g>
    <rect x="60" y="515" width="430" height="66" rx="33" fill="#101c37"/><text x="88" y="556" fill="white" ${font} font-size="20" font-weight="700">PATTERNS, NOT A COPY LIST</text>${footer()}
  `, 'A cream editorial network map connecting brands, creators, content jobs and markets.'),

  'creator-watchlist.svg': wrap('#dcecff', `
    <rect x="0" y="0" width="1280" height="112" fill="#101c37"/>${label('QUICKKOL / CREATOR DISCOVERY', 60, 52, '#72acff')}<text x="60" y="94" fill="white" ${font} font-size="34" font-weight="800">THE CREATOR WATCHLIST</text>
    <g transform="translate(60 160)"><rect width="1160" height="430" rx="24" fill="white"/>
      <text x="34" y="55" ${font} font-size="17" font-weight="700" fill="#667085">REVIEW CALENDAR / Q4</text>
      ${['30 DAYS','60 DAYS','90 DAYS'].map((t,i)=>`<g transform="translate(${34+i*370} 90)"><rect width="340" height="270" rx="18" fill="${['#eff6ff','#f6f3ff','#fff5eb'][i]}"/><text x="24" y="40" ${font} font-size="20" font-weight="800" fill="#101828">${t}</text>${[0,1,2].map((_,j)=>`<rect x="24" y="${70+j*58}" width="292" height="42" rx="10" fill="white" stroke="#d4dbe6"/><circle cx="49" cy="${91+j*58}" r="7" fill="${['#2377ee','#8465e8','#ff8b5f'][i]}"/><rect x="68" y="${84+j*58}" width="${170-j*22}" height="14" rx="7" fill="#aeb9c8"/>`).join('')}</g>`).join('')}
      <rect x="34" y="382" width="1090" height="2" fill="#dce2ea"/><text x="34" y="414" ${font} font-size="16" fill="#667085">ENTRY REASON  ·  SIGNAL  ·  NEXT REVIEW  ·  EXIT CONDITION</text>
    </g>${footer('#52657e')}
  `, 'A light blue quarterly watchlist with three distinct review columns and creator records.'),

  'affiliate-conversion.svg': wrap('#ff735f', `
    ${label('QUICKKOL / AUDIENCE + ANALYTICS', 60, 60, '#2a1738')}${title(['RECONCILE', 'THE ORDER.'], 60, 145, '#ffffff', 68)}
    <g transform="translate(675 82)" ${font} font-weight="800"><path d="M0 0H490L410 105H80Z" fill="#101c37"/><text x="245" y="65" text-anchor="middle" fill="white" font-size="22">GROSS REVENUE</text><path d="M80 125H410L350 230H140Z" fill="#ffe0d8"/><text x="245" y="191" text-anchor="middle" fill="#231b27" font-size="22">− REFUNDS</text><path d="M140 250H350L310 355H180Z" fill="#fff4e8"/><text x="245" y="316" text-anchor="middle" fill="#231b27" font-size="22">− COST</text><path d="M180 375H310L280 505H210Z" fill="#ffe14d"/><text x="245" y="444" text-anchor="middle" fill="#231b27" font-size="18">NET</text></g>
    <g transform="translate(60 440)"><rect width="510" height="150" rx="22" fill="#fff4ec"/><text x="28" y="44" ${font} font-size="16" font-weight="700" fill="#7d3a31">VALID ORDER ECONOMICS</text><text x="28" y="104" ${font} font-size="42" font-weight="800" fill="#101828">3.09× ROAS</text></g>${footer('#542d2a')}
  `, 'A coral editorial conversion funnel from gross revenue through refunds and costs to net results.'),

  'comment-quality.svg': wrap('#311b66', `
    ${label('QUICKKOL / AUDIENCE + ANALYTICS', 60, 58, '#a8c8ff')}${title(['READ THE', 'CONVERSATION.'], 60, 145, '#ffffff', 64)}
    <g ${font} font-weight="700"><g transform="translate(690 75)"><path d="M0 0h360a24 24 0 0 1 24 24v72a24 24 0 0 1-24 24H90l-48 40 12-40H24A24 24 0 0 1 0 96Z" fill="#ffdb55"/><text x="34" y="70" font-size="24" fill="#271b36">“DOES IT WORK WITH…?”</text></g><g transform="translate(790 260)"><path d="M0 0h390a24 24 0 0 1 24 24v82a24 24 0 0 1-24 24H68l-22 42-8-42H24A24 24 0 0 1 0 106Z" fill="#ff8a70"/><text x="34" y="76" font-size="22" fill="#271b36">“I USED IT FOR 3 MONTHS.”</text></g><g transform="translate(630 455)"><path d="M0 0h300a22 22 0 0 1 22 22v66a22 22 0 0 1-22 22H72l-40 34 10-34H22A22 22 0 0 1 0 88Z" fill="#8fe0c0"/><text x="32" y="64" font-size="22" fill="#271b36">“WHERE CAN I BUY?”</text></g></g>
    <g transform="translate(60 470)" ${font}><text y="0" fill="#beaeea" font-size="17" font-weight="700">CODE ONE PRIMARY INTENT</text><text y="48" fill="white" font-size="21">QUESTION  /  EXPERIENCE</text><text y="82" fill="white" font-size="21">PURCHASE  /  OBJECTION</text></g>${footer('#b8acd5')}
  `, 'A purple editorial cover with three different comment bubbles for questions, experience and purchase intent.'),

  'agency-direct.svg': wrap('#f5f2ea', `
    <path d="M640 0H1280V720H470Z" fill="#182d55"/>${label('QUICKKOL / OUTREACH + RELATIONSHIPS', 60, 60)}${title(['WHO SHOULD', 'YOU CONTACT?'], 60, 145, '#101828', 59)}
    <g ${font} font-weight="800"><circle cx="230" cy="475" r="92" fill="#ffcc55"/><text x="230" y="482" text-anchor="middle" font-size="23">CREATOR</text><circle cx="990" cy="215" r="94" fill="#89d9bd"/><text x="990" y="222" text-anchor="middle" font-size="23">AGENCY</text><circle cx="915" cy="510" r="80" fill="#ff765f"/><text x="915" y="517" text-anchor="middle" font-size="22">BRAND</text><path d="M330 457C505 410 658 350 887 240" fill="none" stroke="#247df2" stroke-width="9"/><path d="M328 495C530 565 663 575 826 529" fill="none" stroke="#ffffff" stroke-width="9"/><circle cx="615" cy="370" r="22" fill="#247df2"/><text x="615" y="377" text-anchor="middle" fill="white" font-size="18">?</text></g>${footer('#606b7d')}
  `, 'A split light and navy editorial cover comparing direct creator and agency contact paths.'),

  'rate-card.svg': wrap('#ffffff', `
    <rect x="50" y="45" width="1180" height="630" rx="28" fill="#f7f2e9" stroke="#17294a" stroke-width="4"/><rect x="50" y="45" width="1180" height="108" rx="28" fill="#17294a"/>
    ${label('QUICKKOL / RATES + RIGHTS', 82, 88, '#78b0ff')}<text x="82" y="132" fill="white" ${font} font-size="34" font-weight="800">CREATOR QUOTE / SCOPE BREAKDOWN</text>
    <g ${font}><text x="82" y="218" font-size="20" fill="#667085">DO NOT COMPARE TOTALS UNTIL THESE LINES MATCH.</text>${[['01','PRODUCTION','18,000'],['02','PAID USE / 3 MO','7,500'],['03','RAW FILES','2,000'],['04','EXCLUSIVITY','4,000']].map((r,i)=>`<g transform="translate(82 ${255+i*75})"><text y="34" font-size="15" font-weight="700" fill="#247df2">${r[0]}</text><text x="64" y="34" font-size="22" font-weight="700" fill="#101828">${r[1]}</text><text x="1040" y="34" text-anchor="end" font-size="22" font-weight="800" fill="#101828">${r[2]}</text><path d="M0 58H1040" stroke="#d7d2c8"/></g>`).join('')}<text x="82" y="622" font-size="18" font-weight="700" fill="#667085">CURRENCY · TAX · VALIDITY · PAYMENT</text></g>
  `, 'A warm white invoice-style creator quote broken into production, rights, raw files and exclusivity.'),

  'exclusivity-cost.svg': wrap('#f6b64a', `
    ${label('QUICKKOL / RATES + RIGHTS', 60, 60, '#402b13')}${title(['PRICE THE', 'CONSTRAINT.'], 60, 145, '#13213b', 66)}
    <g transform="translate(840 345)" fill="none"><circle r="250" stroke="#17294a" stroke-width="38" opacity=".18"/><circle r="182" stroke="#17294a" stroke-width="38" opacity=".35"/><circle r="112" stroke="#17294a" stroke-width="38"/><path d="M-205-145L205 145M-205 145L205-145" stroke="#fff4d4" stroke-width="8"/><circle r="36" fill="#ff6559" stroke="none"/></g>
    <g transform="translate(60 445)" ${font}><rect width="445" height="130" rx="22" fill="#fff4d4"/><text x="26" y="38" font-size="15" font-weight="700" fill="#765627">DEFINE THE BOUNDARY</text><text x="26" y="78" font-size="22" font-weight="800" fill="#13213b">BRAND · PRODUCT · MARKET</text><text x="26" y="108" font-size="22" font-weight="800" fill="#13213b">PLATFORM · TERM · COOLDOWN</text></g>${footer('#624719')}
  `, 'A golden editorial cover with a bold target showing the boundaries of creator exclusivity.'),

  'live-campaign.svg': wrap('#090d14', `
    <circle cx="90" cy="80" r="18" fill="#ff3d49"/><text x="122" y="90" fill="#ff5963" ${font} font-size="28" font-weight="800">LIVE</text>${title(['RUN LIVE.', 'RECORD FACTS.'], 60, 180, '#ffffff', 66)}
    <path d="M60 475h80l24-70 42 140 38-95 42 45 36-145 42 220 42-108 42 30h80l28-70 38 118 36-50 30 25h90l38-95 42 140 38-75 42 20h96" fill="none" stroke="#47a0ff" stroke-width="8" stroke-linejoin="round"/>
    <g ${font} font-weight="700"><circle cx="162" cy="405" r="14" fill="#ff3d49"/><text x="140" y="620" fill="#a9b3c3" font-size="16">REHEARSE</text><circle cx="564" cy="422" r="14" fill="#ff3d49"/><text x="530" y="620" fill="#a9b3c3" font-size="16">GO LIVE</text><circle cx="1018" cy="405" r="14" fill="#ff3d49"/><text x="985" y="620" fill="#a9b3c3" font-size="16">REVIEW</text></g>${footer('#7f8b9e')}
  `, 'A black live-production cover with a bright blue waveform and red event markers.'),

  'creator-taxonomy.svg': wrap('#d9f1df', `
    ${label('QUICKKOL / AI + AUTOMATION', 60, 58, '#14583d')}${title(['DEFINE BEFORE', 'YOU CLASSIFY.'], 60, 140, '#102b23', 60)}
    <g transform="translate(700 80)" ${font} font-weight="700" text-anchor="middle"><rect x="150" width="230" height="70" rx="20" fill="#102b23"/><text x="265" y="44" fill="white" font-size="21">CREATOR</text><path d="M265 70v70M80 140h370M80 140v50M265 140v50M450 140v50" stroke="#14583d" stroke-width="5" fill="none"/><rect x="0" y="190" width="160" height="75" rx="18" fill="#ffce5c"/><text x="80" y="235" font-size="20">TOPIC</text><rect x="185" y="190" width="160" height="75" rx="18" fill="#ff8b73"/><text x="265" y="235" font-size="20">FORMAT</text><rect x="370" y="190" width="160" height="75" rx="18" fill="#78a9ff"/><text x="450" y="235" font-size="20">JOB</text>${[['SKINCARE',0],['TUTORIAL',185],['EDUCATE',370],['TRAVEL',0],['LIVE',185],['CONVERT',370]].map((x,i)=>`<rect x="${x[1]}" y="${300+Math.floor(i/3)*88}" width="160" height="62" rx="16" fill="white"/><text x="${x[1]+80}" y="${339+Math.floor(i/3)*88}" font-size="16" fill="#304b42">${x[0]}</text>`).join('')}</g>
    <rect x="60" y="500" width="480" height="86" rx="20" fill="#ffffff"/><text x="86" y="536" ${font} font-size="16" font-weight="700" fill="#14583d">VERSION · EVIDENCE · COUNTEREXAMPLE</text><text x="86" y="568" ${font} font-size="18" fill="#526d64">UNKNOWN IS AN ALLOWED RESULT.</text>${footer('#47665b')}
  `, 'A mint editorial taxonomy tree separating creator topic, format and commercial job.'),

  'ai-postmortem.svg': wrap('#f1ede5', `
    ${label('QUICKKOL / AI + AUTOMATION', 60, 58)}${title(['REVIEW THE', 'DECISION CHAIN.'], 60, 140, '#101828', 60)}
    <g transform="translate(910 355)" ${font} font-weight="800" text-anchor="middle"><circle r="245" fill="#17294a"/><circle r="142" fill="#f1ede5"/><path d="M0-206A206 206 0 0 1 178 103" fill="none" stroke="#57a0ff" stroke-width="54"/><path d="M178 103A206 206 0 0 1-178 103" fill="none" stroke="#ff7b67" stroke-width="54"/><path d="M-178 103A206 206 0 0 1 0-206" fill="none" stroke="#ffd052" stroke-width="54"/><text y="-12" fill="#101828" font-size="20">NEXT</text><text y="24" fill="#101828" font-size="20">DECISION</text><text y="-188" fill="#101828" font-size="14">INPUT</text><text x="164" y="124" fill="#101828" font-size="14">HUMAN</text><text x="-164" y="124" fill="#101828" font-size="14">OUTCOME</text></g>
    <g transform="translate(60 455)" ${font}><text fill="#667085" font-size="16" font-weight="700">BUSINESS RESULT + SYSTEM QUALITY</text><text y="46" fill="#101828" font-size="22" font-weight="800">RETAIN  /  LIMIT  /  PAUSE  /  REDESIGN</text></g>${footer()}
  `, 'A warm neutral editorial cover with a three-color postmortem loop connecting input, human decision and outcome.'),
};

await Promise.all(Object.entries(covers).map(([name, svg]) => writeFile(new URL(name, output), svg)));
console.log(`Generated ${Object.keys(covers).length} distinct editorial blog covers.`);
