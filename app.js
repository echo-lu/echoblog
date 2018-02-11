// 应用（启动）入口文件
var express = require("express");
// 加载模板处理模块，用于前后端分离
var swig = require("swig");
// 加载数据库模块
var mongoose = require('mongoose');

// 创建app应用=>nodejs Http.createServer()
var app = express();

// 配置模板

// 定义当前应用所使用的模板引擎
// 第一个参数：模板引擎的名称，同时也是模板文件的后缀
// 第二个参数：表示用于解析处理模板内容的方法
app.engine('html',swig.renderFile);
// 设置模板文件存放的目录
// 第一个参数必须是views
// 第二个参数是目录
app.set('views','./views');
// 注册所使用的模板引擎
// 第一个参数必须是view engine
// 第二个参数和app.engine方法中定义的模板引擎名称（即第一个参数）一致
app.set('view engine','html');
// 在开发过程中，要取消模板缓存
swig.setDefaults({cache:false});

// 设置静态文件托管
// 当用户访问的url以/public开始，那么直接返回对应__dirname + '/public'下的文件
app.use('/public',express.static(__dirname + '/public'));


// 路由绑定
// 首页
// app.get('/',function(req,res,next){
// 	// res.send("<h1>Hello World</h1>")
	
// 	// 读取views目录下的指定文件，解析并返回给客户端
// 	// 第一个参数：表示模板文件，相当于views目录 views/index.html
// 	// 第二个参数：传递给模板使用的数据
// 	res.render("index");
// });
// app.get("/main.css",function(req,res,next) {
// 	res.setHeader('content-type','text/css');
// 	res.send("body {background:red}");
// })

/**
 * 根据不同的功能划分模块
 */
app.use('/admin',require('./routers/admin'));
app.use('/api',require('./routers/api'));
app.use('/',require('./routers/main'));

// 连接数据库
mongoose.connect('mongodb://localhost:27018/blog',function(err) {
	if(err) {
		console.log('数据库连接失败');
	}else {
		console.log('数据库连接成功');
		// 监听http请求
		app.listen(8080);
	}
});



// 用户发送http请求 -> url -> 解析路由 -> 找到匹配的规则 -> 执行绑定函数，返回对应内容给客户端