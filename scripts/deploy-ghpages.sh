#!/bin/bash

# Automated deploy script with Circle CI.

# Exit if any subcommand fails.
set -e

# Variables
ORIGIN_URL=`git config --get remote.origin.url`

echo "Started deploying"

# Checkout pages-test branch.
if [ `git branch | grep pages-test` ]
then
  git branch -D pages-test
fi
git checkout -b pages-test


# Delete and move files.
find . -maxdepth 1 ! -name 'out' ! -name '.git' ! -name '.gitignore' ! -name '.nojekyll' ! -name 'CNAME' -exec rm -rf {} \;
mv out/* .
rm -R out/

# Push to pages-test.
git config user.name "$GH_NAME"
git config user.email "$GH_EMAIL"

git add -fA
git commit --allow-empty -m "$(git log -1 --pretty=%B) [ci skip]"
git push -f $ORIGIN_URL pages-test

# Move back to previous branch.
git checkout -

echo "Deployed Successfully!"

exit 0