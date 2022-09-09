// 1. 引入express
const express = require('express');

// 2. 创建应用对象
const app = express();

// 3. 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装

// 01_GET
app.get('/home', (request, response) => {
   // 响应一个页面
   response.sendFile(__dirname+'/07_homology.html');
});

app.get('/homology', (request, response) => {
    response.send("Hello homology");
});

// 4. 监听端口，启动服务
app.listen(8000, () => {
    console.log("服务已经启动, 8000 端口监听中...");
})