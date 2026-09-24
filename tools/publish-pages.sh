#!/bin/sh
# v5.5.1: publish both built games and the landing page to the gh-pages branch as one commit (the branch keeps no history:
# every publish replaces it). sh tools/publish-pages.sh [version]   — runs tools/build-games.js first.
#   https://stumpgreg-ops.github.io/Claude/ → landing page;  …/Claude/nj/ and …/Claude/va/ → the games.
# Turn Pages on once: repository Settings → Pages → Source "Deploy from a branch", branch gh-pages, folder / (root).
set -e
cd "$(dirname "$0")/.."
node tools/build-games.js "$@"
site=$(mktemp -d)
cp -r dist/nj "$site/nj"; cp -r dist/va "$site/va"
mkdir -p "$site/assets"; cp tools/pages/index.html "$site/index.html"
cp assets/logo/sols-labyrinth.png assets/logo/favicon-64.png assets/logo/favicon-180.png "$site/assets/"
touch "$site/.nojekyll"
idx=$(mktemp)
export GIT_INDEX_FILE="$idx"
git --work-tree="$site" add -A .
tree=$(git write-tree)
ver=$(grep -o 'v[0-9.]*</p>' index.html | head -1 | tr -d 'v</p>')
commit=$(printf 'Publish Sol'"'"'s Labyrinth v%s to GitHub Pages\n\nCo-Authored-By: Claude Fable 5.1 <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_017qmwrcccjJu3wyLLFz2gXy\n' "$ver" | git commit-tree "$tree")
unset GIT_INDEX_FILE
git update-ref refs/heads/gh-pages "$commit"
git push --force -u origin gh-pages
rm -rf "$site" "$idx"
echo "published $commit ($ver): https://stumpgreg-ops.github.io/Claude/"
