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
      let string = fs.readFileSync('./cookie/index.html','utf-8')//如果要读取string类型就要加utf8
      if (request.headers.cookie) {
          let cookies =  request.headers.cookie.split('=') // log-in-username=asd
          string = string.replace('__username__',cookies[1]) // 如果存在cookie，则将标记函数替换为cookie
      }
      response.statusCode = 200
      response.setHeader('Content-Type','text/html ; charset=utf-8')
      response.write(string)
      response.end()
  }else if(path === '/mainJs?version=1'){//模拟js数据量很大
      let string = fs.readFileSync('./cookie/js/main.js','utf-8')
      response.statusCode = 200
      response.setHeader('Content-Type','text/javascript ; charset=utf-8')
      response.setHeader('Cache-Control','max-age=31536000')//设置缓存一年(就是请求成功后就缓存，一年后再请求)
      response.write(string)
      response.end()
  }else if(path === '/mainCss'){//模拟css数据量很大
      let string = fs.readFileSync('./cookie/css/style.css','utf-8')
      response.statusCode = 200
      response.setHeader('Content-Type','text/css ; charset=utf-8')
      response.setHeader('Cache-Control','max-age=31536000')//设置缓存一年(就是请求成功后就缓存，一年后再请求)
      response.write(string)
      response.end()
  }else if(path === '/login'){
      let string = fs.readFileSync('./cookie/login.html')
      response.statusCode = 200
      response.setHeader('Content-Type','text/html')
      response.write(string)
      response.end()
  }else if(path === '/signUp' && method === 'POST'){
      var data = '';
      request.on('data', function (chunk) {
          data += chunk;
      })
      request.on('end', function () {
          data = decodeURI(data);
          let userInfoArr = data.split('&')
          let readObj = {}
          userInfoArr.forEach((value)=>{
              readObj[value.split('=')[0]] = value.split('=')[1]
          })
          var users = fs.readFileSync('./db/users', 'utf8')
          try{
              users = JSON.parse(users) // []
          }catch(exception){
              users = []
          }

          let isUser = false//是否存在该用户

          users.forEach((obj)=>{
              if(obj.username === readObj.username && obj.password === readObj.password){
                  isUser = true
              }
          })
          if (isUser){
              response.statusCode = 200
              response.setHeader('Set-Cookie', `log-in-username=${readObj.username}`)
              response.setHeader('Content-Type','text/json ; charset=utf-8')
              response.write('{"msg":"登陆成功"}')
          } else {
              response.statusCode = 401
              response.setHeader('Content-Type','text/json ; charset=utf-8')
              response.write('{"msg":"用户名或则密码错误"}')

          }
          response.end()

      })

  }else if(path === '/regist'){
      let string = fs.readFileSync('./cookie/regist.html')
      response.statusCode = 200
      response.setHeader('Content-Type','text/html')
      response.write(string)
      response.end()
  }else if(path === '/signIn' && method === 'POST'){
      /**服务端接收post请求参数的流程
       * （1）给req请求注册接收数据data事件（该方法会执行多次，需要我们手动累加二进制数据）
       *      * 如果表单数据量越多，则发送的次数越多，如果比较少，可能一次就发过来了
       *      * 所以接收表单数据的时候，需要通过监听 req 对象的 data 事件来取数据
       *      * 也就是说，每当收到一段表单提交过来的数据，req 的 data 事件就会被触发一次，同时通过回调函数可以拿到该 段 的数据
       * （2）给req请求注册完成接收数据end事件（所有数据接收完成会执行一次该方法）
       */
      var data = ''
      //2.注册data事件接收数据（每当收到一段表单提交的数据，该方法会执行一次）
      request.on('data', function (chunk) {
          // chunk 默认是一个二进制数据，和 data 拼接会自动 toString
          data += chunk
      });
      request.on('end', function () {
          //（1）.对url进行解码（url会对中文进行编码）
          data = decodeURI(data)
          let userInfoArr = data.split('&')
          let writeObj = {}
          userInfoArr.forEach((value)=>{
              if (value.split('=')[0] === 'username' || value.split('=')[0] === 'password') {
                  writeObj[value.split('=')[0]] = value.split('=')[1]
              }
          })
          var users = fs.readFileSync('./db/users', 'utf8')
          try{
              users = JSON.parse(users) // []
          }catch(exception){
              users = []
          }
          users.push(writeObj)
          var usersString = JSON.stringify(users)
          fs.writeFileSync('./db/users', usersString)
          response.statusCode = 200
          response.setHeader('Content-Type','text/json ; charset=utf-8')
          response.write('{"msg":"注册成功"}')
          response.end()
      });


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
      response.setHeader('Content-Type','text/json; charset=utf-8')
      response.write('未找到该资源')
      response.end()
  }


  /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请在浏览器中打开 http://localhost:' + port)