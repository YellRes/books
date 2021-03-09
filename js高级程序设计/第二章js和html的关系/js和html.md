# html 中使用 js
把javascript插入html中主要是使用script标签。

script 标签主要的属性有: 
- async: 可选 类似于js里面的async 异步的加载script中的内容 但不会影响页面中的其他动作
> 执行 async script的时候 是不是说明浏览器是  多线程的？  
- defer: 可选 脚本可以延迟到文档完全被解析和显式之后执行。 对外部的脚本有效。
- src: 脚本所在的地址
- type: 用来表示脚本语言的内容类型(也称MIME类型)。如果这个值是 module，则代码会被当成 ES6 模块，而且只有这时候代码中才能出现 import 和 export 关键字
> vite 其中的原理就是利用了 script中的标签
- crossorigin  配置相关请求的CORS（跨源资源共享）设置
- integrity 允许比对接收到的资源和指定的加密签名以验证子资源完整性

浏览器解释 script 标签时 页面会阻塞(包括下载script脚本的时间)。

## script 行内脚本

行内脚本不能出现 </script>
```javascript
<script>
    funciton sayHi() {
        console.log('<\/script>')
    }
</script>
```

## script 引入外部文件 

使用src来引入外部脚本
- 使用了src属性 script中的行内脚本会被忽略
- src 可以指向外部域的 javascript  文件， 但是javascript执行后还是受到跨域限制

## script 的执行顺序

从上到下依次执行，前提是这些script内部没有 defer 和 async 属性。

## script 的位置

script 放到页面的<head>标签中。
```html
<!DOCTYPE html> 
<html> 
 <head> 
 <title>Example HTML Page</title> 
 <script src="example1.js"></script> 
 <script src="example2.js"></script> 
 </head> 
 <body> 
 <!-- 这里是页面内容 --> 
 </body> 
</html> 
```

<script> 标签放到 <head> 中，浏览器会先加载 <head> 中的内容。当 <head> 中所有 <script> 的脚本都加载完毕后，才会加载 <body>的内容。 此时会造成页面的卡顿。

所以 建议把 <script> 放到 <body> html内容的下面：
```html
<!DOCTYPE html> 
<html> 
 <head> 
 <title>Example HTML Page</title> 
 </head> 
 <body> 
 <!-- 这里是页面内容 --> 
 <script src="example1.js"></script> 
 <script src="example2.js"></script> 
 </body> 
</html> 
```



