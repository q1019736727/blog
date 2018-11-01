if [ -d $1 ]; then 
  echo '$1文件存在' 
  exit
else
  mkdir $1
  cd $1
  mkdir css js
  touch index.html css/style.css js/main.js
  echo "<!DOCTYPE><title>Hello</title><h1>Hi</h1>" > index.html
  cd css
  echo 'h1{color: red;}' > style.css
  cd ..
  cd js
  echo 'var string = "Hello World" alert(string)' > main.js
  cd ..
  exit
fi