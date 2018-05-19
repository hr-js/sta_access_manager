#! /bin/sh
# serverディレクトリがない場合は、serverディレクトリを作成する
if [ ! -d server ]; then
  echo "serverディレクトリが存在ないので、作成します。"
  mkdir server
fi