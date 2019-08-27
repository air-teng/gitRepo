//使用express构建web服务器
//1.使用3.x，借助http模块
/*
const http=require('http');
//自动到node_modules中查出express目录
const express=require('express');
var app=express();
http.createServer(app).listen(3000,()=>{
  console.log('web服务器构建成功');
});
*/
//2.使用4.x，直接构建 
const express=require('express');
var app=express();
app.listen(3000,()=>{
  console.log('web服务器构建成功');
});

//获取服务端商品的列表
//向服务器发送请求，
//请求的url为list，请求的方法为get
app.get('/list',(req,res)=>{
  console.log('获取到了浏览器发送的请求');
  //req 请求的对象
  //res 响应的对象
  
});
//练习：登录的路由——请求的方法get，请求的url是/login
app.get('/login',(req,res)=>{
  console.log('这是登录的请求');
  //req请求对象
  //console.log(req.url); //获取请求的url
  //console.log(req.method); //获取请求的方法
  //console.log(req.query);//获取查询字符串——对象
  //console.log(req.headers);//
  //响应对象 res
  //服务器向浏览器发送响应的内容——一行文本
  //res.send('this is web1807'); 
  //把登录的html文件发送给浏览器
  // __dirname 当前目录的完整路径
  //res.sendFile(__dirname+'/login.html');
  //响应的重定向
  res.redirect('http://www.codeboy.com/login.html');
});

app.get('/reg',(req,res)=>{
  console.log('这是注册页面');
  //发送html文件到浏览器
  res.sendFile(__dirname+'/register.html');
});







