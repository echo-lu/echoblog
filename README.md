# 项目介绍

## 目录结构
- db 数据库存储目录
- models 数据库模型文件目录
- node_modules node第三方模块目录
- public 公共文件目录（css、js、images...）
- routers 路由文件目录
- schemas 数据库结构文件（schema）目录
- views 模板视图文件目录
- app.js 应用（启动）入口文件
- package.json

## app.js创建
#### 创建应用、监听端口<br>
var express = require("express");<br>
// 创建app应用=>nodejs Http.createServer()<br>
var app = express();<br>
// 监听http请求<br>
app.listen(8080);<br>
#### 用户的访问<br>
用户通过URL访问web应用<br>
web后端根据用户访问的URL处理不同的业务逻辑<br>

## 处理请求输出
#### 路由绑定
通过app.get()或app.poat()等方法可以把一个url路径和一个或n个函数进行绑定<br>
app.get('/',function(req,res,next){})<br>
req：request对象——保存客户端请求相关的一些数据——http.request<br>
res：response对象——服务端输出对象，提供了一些服务器端输出相关的一些方法——http.response<br>
next：方法，用于执行下一个和路径匹配的函数<br>
#### 内容输出<br>
通过res.send(string)发送内容至客户端<br>

## 划分模块
根据功能进行模块划分
#### 前台模块
/ 首页<br>
/view 内容页
#### 后台管理模块
- / 首页
- 用户管理<br>
/user 用户列表
- 分类管理<br>
/category 分类列表<br>
/category/add 分类添加<br>
/category/edit 分类编辑<br>
/category、delete 分类删除<br>
- 文章内容管理<br>
/article 内容列表<br>
/article/add 内容添加<br>
/article/edit 内容编辑<br>
/article/delete  内容删除<br>
- 评论内容管理<br>
/comment 评论列表<br>
/comment、delete 评论删除<br>
#### API模块<br>
/ 首页<br>
/register 用户注册<br>
/login 用户登录<br>
/comment 评论获取<br>
/comment/post 评论提交<br><br>
使用app.use()进行模块划分
