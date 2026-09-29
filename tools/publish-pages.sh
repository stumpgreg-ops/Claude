#!/bin/sh
# v5.5.1: publish both built games and the landing page to the gh-pages branch as one commit (the branch keeps no history:
# every publish replaces it). sh tools/publish-pages.sh [version]   — runs tools/build-games.js first.
#   https://stumpgreg-ops.github.io/Claude/ → landing page;  …/Claude/nj/ and …/Claude/va/ → the games;
#   …/appsscript/va/ → the Apps Script version's loader, manifest and parts (read by Code.gs through raw.githubusercontent.com).
# Turn Pages on once: repository Settings → Pages → Source "Deploy from a branch", branch gh-pages, folder / (root).
set -e
cd "$(dirname "$0")/.."
node tools/build-games.js "$@"
node tools/build-appsscript.js VA
site=$(mktemp -d)
cp -r dist/nj "$site/nj"; cp -r dist/va "$site/va"
# v5.7.8: the Apps Script version (tools/build-appsscript.js) — Code.gs fetches …/appsscript/va/ from this branch
mkdir -p "$site/appsscript"; cp -r dist/appsscript/va "$site/appsscript/va"; cp dist/appsscript/Code.gs "$site/appsscript/Code.gs"
mkdir -p "$site/assets"; cp tools/pages/index.html "$site/index.html"
cp tools/pages/assets/sols-labyrinth.png assets/logo/favicon-64.png assets/logo/favicon-180.png "$site/assets/"
touch "$site/.nojekyll"
idx=$(mktemp -u)
export GIT_INDEX_FILE="$idx"
git --work-tree="$site" add -A .
tree=$(git write-tree)
ver=$(grep -o 'v[0-9.]*</p>' index.html | head -1 | tr -d 'v</p>')
commit=$(printf 'Publish Sol'"'"'s Labyrinth v%s to GitHub Pages\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_017qmwrcccjJu3wyLLFz2gXy\n' "$ver" | git commit-tree "$tree")
unset GIT_INDEX_FILE
git update-ref refs/heads/gh-pages "$commit"
git push --force -u origin gh-pages
rm -rf "$site"; rm -f "$idx"
echo "published $commit ($ver): https://stumpgreg-ops.github.io/Claude/"
