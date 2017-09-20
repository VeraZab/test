#!/bin/bash

# Automated deploy script with Circle CI.

# Exit if any subcommand fails.
set -e

# Variables
ORIGIN_URL=`git config --get remote.origin.url`

echo "Started deploying"

# Checkout gh-pages branch.
if [ `git branch | grep gh-pages` ]
then
  git branch -D gh-pages
fi
git checkout -b gh-pages


# Delete and move files.
find . -maxdepth 1 ! -name 'out' ! -name '.git' ! -name '.gitignore' ! -name '.nojekyll' ! -name 'CNAME' -exec rm -rf {} \;
mv out/* .
rm -R out/

# Push to gh-pages.
git config user.name "$GH_NAME"
git config user.email "$GH_EMAIL"

git add -fA
git commit --allow-empty -m "$(git log -1 --pretty=%B) [ci skip]"
git push -f $ORIGIN_URL gh-pages

# Move back to previous branch.
git checkout -

echo "Deployed Successfully!"

exit 0