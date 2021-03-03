rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@github.com:liushaLove/xiaobansky-ui.git &&
git push -f -u origin master &&
