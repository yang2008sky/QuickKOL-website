#!/usr/bin/env python3
"""Read-only figure preflight. Exit 0=pass, 1=fail, 2=manual review needed."""
import argparse
import csv
import json
from pathlib import Path
import re
import xml.etree.ElementTree as ET

REQUIRED = {'article_slug', 'page_locale', 'placement', 'asset_path', 'text_mode', 'alt', 'caption'}
HAN = re.compile(r'[\u3400-\u4dbf\u4e00-\u9fff]')
CJK = re.compile(r'[\u3400-\u4dbf\u4e00-\u9fff\u3040-\u30ff\uac00-\ud7af]')


def inspect(row, root):
    row = {key: (value or '').strip() for key, value in row.items() if key is not None}
    result = {key: row.get(key, '') for key in ['article_slug', 'page_locale', 'placement', 'asset_path']}

    def end(status, reason):
        return dict(result, status=status, reason=reason)

    if any(not row.get(key, '').strip() for key in REQUIRED - {'caption'}):
        return end('fail', 'Required field is blank, including alt.')
    mode = row['text_mode'].strip()
    if mode not in {'text', 'no-text', 'screenshot'}:
        return end('fail', 'text_mode must be text, no-text or screenshot.')
    path = (root / row['asset_path'].strip()).resolve()
    try:
        path.relative_to(root)
    except ValueError:
        return end('fail', 'asset_path must stay inside the supplied project root.')
    if not path.is_file():
        return end('fail', 'Asset file is missing.')
    if path.suffix.lower() != '.svg':
        return end('review', 'Non-SVG asset: inspect visible text and language visually.')
    try:
        document = path.read_text(encoding='utf-8')
        if '<!DOCTYPE' in document.upper():
            return end('review', 'SVG with a document type needs manual inspection.')
        svg = ET.fromstring(document)
    except (OSError, UnicodeError, ET.ParseError) as error:
        return end('fail', 'Cannot parse SVG: ' + str(error))
    if svg.tag.rsplit('}', 1)[-1] != 'svg':
        return end('fail', 'The file does not have an SVG root.')
    text_nodes = [node for node in svg.iter() if node.tag.rsplit('}', 1)[-1] == 'text']
    visible = ' '.join(''.join(node.itertext()).strip() for node in text_nodes).strip()
    result['text_excerpt'] = visible[:180]
    if mode == 'screenshot':
        return end('review', 'Original screenshot: verify justified language exception and caption.')
    if mode == 'no-text' and visible:
        return end('fail', 'Declared no-text, but SVG text elements contain visible text.')
    locale = row['page_locale'].strip().lower().replace('_', '-')
    if mode == 'text' and locale.split('-')[0] == 'en' and CJK.search(visible):
        return end('fail', 'English-page SVG contains CJK text; supply the English graphic.')
    if mode == 'text' and locale.split('-')[0] == 'zh' and visible and not HAN.search(visible):
        return end('fail', 'Chinese-page text SVG has no Chinese characters; verify the selected version.')
    embedded = {'image', 'foreignObject', 'use', 'script'}
    if any(node.tag.rsplit('}', 1)[-1] in embedded for node in svg.iter()):
        return end('review', 'Embedded/referenced content cannot be checked from SVG text alone.')
    if not visible:
        return end('review', 'No readable SVG text; inspect paths or artwork for outlined/rasterized lettering.')
    if locale.split('-')[0] not in {'en', 'zh'}:
        return end('review', 'This locale needs manual language inspection.')
    return end('pass', 'SVG text preflight passed; verify translation, rendering and page currentSrc visually.')


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--root', type=Path, required=True)
    parser.add_argument('--manifest', type=Path, required=True)
    args = parser.parse_args()
    root = args.root.resolve()
    manifest = args.manifest if args.manifest.is_absolute() else root / args.manifest
    try:
        with manifest.open(encoding='utf-8-sig', newline='') as stream:
            reader = csv.DictReader(stream)
            if not REQUIRED.issubset(reader.fieldnames or []):
                raise ValueError('Manifest is missing required column headers.')
            results = [dict(inspect(row, root), row=index) for index, row in enumerate(reader, 2)]
        if not results:
            raise ValueError('Manifest has no asset rows; fill the template before checking.')
    except (OSError, ValueError, csv.Error) as error:
        print(json.dumps({'status': 'fail', 'reason': str(error)}, ensure_ascii=False))
        return 1
    counts = {status: sum(item['status'] == status for item in results) for status in ['pass', 'fail', 'review']}
    print(json.dumps({'counts': counts, 'results': results, 'visual_review_required': True}, ensure_ascii=False, indent=2))
    return 1 if counts['fail'] else 2 if counts['review'] else 0


if __name__ == '__main__':
    raise SystemExit(main())
