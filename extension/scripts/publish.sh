#!/bin/bash
set -e
npm --no-git-tag-version version patch
npm run build:browser
npm install -g @vscode/vsce
vsce package && vsce login mplodeai
vsce publish
printf 'Supply Eclipse OpenVSX token: '
read vsx
npx ovsx publish -p $vsx