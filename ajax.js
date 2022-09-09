// 1. 引入express
const express = require('express');

// 2. 创建应用对象
const app = express();

// 3. 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装

// 01_GET
app.get('/ajax', (request, response) => {
    // 设置响应头 (允许跨域)
    response.setHeader('Access-Control-Allow-Origin', '*');

    //  设置响应体
    response.send("Hello AJAX");
});

// 02_POST
app.post('/post', (request, response) => {
    // 设置响应头, 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应体
    response.send("Hello Ajax POST");
});

// 03_json_type
app.all('/json-server', (request, response) => {
    // 设置响应头, 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应头, 设置允许自定义头信息
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 响应一个数据
    const data = {
        name: 'atguigu'
    };
    // 对对象进行 字符串 转换
    let str = JSON.stringify(data);
    // 设置响应体 
    response.send(str);
});

// 04_ie
app.get('/ie', (request, response) => {
    // 设置响应头 (允许跨域)
    response.setHeader('Access-Control-Allow-Origin', '*');

    //  设置响应体
    response.send("Hello Ie -4");
});

// 05_error
app.get('/error', (request, response) => {
    // 设置响应头 (允许跨域)
    response.setHeader('Access-Control-Allow-Origin', '*');

    //  定时器
    setTimeout(function () {
        response.send("Hello wrong");
    }, 10000)
});


// 4. 监听端口，启动服务
app.listen(8000, () => {
    console.log("服务已经启动, 8000 端口监听中...");
})