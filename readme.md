由于本人还未学习过react，typescript和单元测试，所以使用vue来进行设计

样式仿照这个写的 http://www.todolist.cn/

项目比较小就直接写在todolist.html文件里面了

vue文件夹 使用 vue + localStorage，浏览器直接打开todolist.html既可以使用



---

vue_node文件夹 使用vue + axios + express + json

数据存储到todo.json文件中

express默认为3000端口



设计思路：

考虑到todo本身是个小应用，为了简化后台操作，只设计了2个端口，获取数据和更新数据。页面所有数据统一存放到vue的data中，在crud后直接把data数据上传到服务器，再从服务器获取最新的数据进行更新，所以每次更新后都会刷新页面。



node使用第三方包：nodemon,body-parser,fs,express



使用

浏览器打开todolist.html

```
cd vue_node

npm install

nodemon app.js 或者 node app.js
```

