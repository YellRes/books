# canvas

## what is canvas?
canvas 中文意思是画布， 没错，就是用来画画的画布。

## why is canvas？
- 想要啥实现一个彩色卡片

## 基础知识
canvas 是一个html标签，类似于div，img之类。它还有 id，width, height属性。
```html

<html>
  <head>
    <script type="text/javascript">
      function draw() {
        var canvas = document.getElementById('myCanvasTril')
        // 判断浏览器是否支持canvas
        if (canvas.getContext) {
          var ctx = canvas.getContext('2d')
        }
      }
    </script>
  </head>

  <body onload="draw();">
    <canvas id="myCanvasTril" widht="300" height="150"></canvas>
  </body>
</html>
```

