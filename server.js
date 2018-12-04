var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if(!port){
  console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
  process.exit(1)
}

var server = http.createServer(function(request, response){
  var parsedUrl = url.parse(request.url, true)
  var path = request.url 
  var query = ''
  if(path.indexOf('?') >= 0){ query = path.substring(path.indexOf('?')) }
  var pathNoQuery = parsedUrl.pathname
  var queryObject = parsedUrl.query
  var method = request.method

  /******** 从这里开始看，上面不要看 ************/

  if (path == '/'){
    let string = fs.readFileSync('./index.html')
      response.statusCode = 200
      response.setHeader('Content-Type','text/html')
      response.write(string)
      response.end()
  }else if(path == '/style.css'){
      response.setHeader('Content-Type','text/css; charset=utf-8')
      response.write('body{background-color: gray}')
      response.end()
  }else if(path == '/main.js'){
    response.setHeader('Content-Type','text/javascript; charset=utf-8')
    response.write('alert("这是js")')
    response.end()
  }else if(path == '/index'){
    response.setHeader('Content-Type','text/html; charset=utf-8')
    response.write('<!DOCTYPE>\n<html>' + 
    '<head><link rel="stylesheet" href="/style.css">'+
    '</head><body>'+
    '<h1>hello world! 你好 世界!</h1>'+
    '<script src="/main.js"></script>'+
    '</body></html>')
    response.end()
  }else if(path == '/json'){
      response.setHeader('Content-Type','text/json; charset=utf-8')
      response.write('{"note":{"name":"frank","age":"18"}}')
      response.end()
  }else if(path == '/cy'){
      response.setHeader('Access-Control-Allow-Origin','http://127.0.0.1:8080')//解决跨域
      response.setHeader('Content-Type','text/json; charset=utf-8')
      response.write('{"optional":{"name":"ChiuYung","age":"23","professional":"前端高级开发工程师"},"status":"1","message":"请求成功"}')
      response.end()
  }else{
      response.statusCode = 404
      response.end()
  }


  /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)