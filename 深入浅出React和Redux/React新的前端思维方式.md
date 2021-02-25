# 初始化一个React 项目
```shell

# 全局安装 create-react-app
npm i create-react-app -g

create-react-app myreactapp
```

# React组件
React 首要思想是 使用`组件`(Component)来开发应用 组件，就是能完成某个特定功能独立的，可重用的代码
> 类似于函数 封装代码以便于复用  

```javascript
  import React, {Component} from 'react'
  // React 在解析 jsx 时候 会用到 => React.createElement()
```

## jsx
## what is jsx ?
javascript 的一种语法拓展，在javascript 中写像 html一样的代码(jsx中不仅仅可以用html里面的元素，还可以使用React的组件) 
> react 组件与html 元素 区别是： 首字母大写
> react 组件(Mybutton, ClickCounter)  html元素(div, p, span)

TODO:
jsx 的实质:


## why have to use jsx?
jsx 把html, js, css 结合一起。具有高耦合性
```javascript
  // 一个 ListItem 组件
  function ListItem() {
    return (
      <>
        <div onClick={clickList}>this is a listItem</div>
      </>
    )
  }
```
TODO:
jsx 中事件的代理

## react 的工作方式
### react 的理念
打一个比方， React 是一个聪明的建筑工人，而 jQuery 是一个比较傻的建筑工人，
开发者你就是一个建筑的设计师，如果是 jQuery 这个建筑工人为你工作，你不得不事无
巨细地告诉jQuery “如何去做”，要告诉他这面墙要拆掉重建，那面墙上要新开 个窗户，
反之，如果是 React 这个建筑工人为你工作，你所要做的就是告诉这个 人“我想要什
么样子”，只要把图纸递给 React 这个工人，他就会替你搞定一切，当然他不会把整个建
筑拆掉重建，而是很聪明地把这次的图纸和上次的图纸做 个对比，发现不同之处，然
后只去做适当的修改就完成任务了
显而易见， React 的工作方式把开发者从繁琐的操作中解放出来，开发者只需要着重
“我想要显示什么”，而不用操心“怎样去做”
这种新的思维方式，对于一个简单的例子也要编写不少代码，感觉像是用高射炮打
蚊子，但是对于一个大型的项目，这种方式编写的代码会更容易管理，因为整个 React
应用要做的就是渲染，开发者关注的是渲染成成什么样子，而不用关心如何实现增量
渲染
React 的理念 ，归结为一个公式，就像下面这样
UI =render( data)
让我们来看看这个公式表达的含义，用户看到的界面（ UI) ，应该是 个函数（在这
里叫 render ）的执行结果，只接受数据（ data ）作为参数 这个函数是 个纯函数，所谓
纯函数，指的是没有任何副作用，输出完全依赖于输入的函数，两次函数调用如果输人
相同，得到的结果也绝对相同 如此一来，最终的用户界面，在 render 函数确定的情况
下完全取决于输入数据
对于开发者来说，重要的是区分开哪些属于 data ，哪些属于 render ，想要更新用户
界面，要做的就是更新 data ，用户界面自然会做出响应，所以 React 实践的也是“响应
式编程”（ Reactive Programming ）的思想，这也就是 React 为什么叫做 React 的原因

> **修改数据 react自动渲染页面** 
react如何自动渲染页面
### Virtual DOM(虚拟dom)
React 利用 Virtual DOM ，让每次渲染都只重新渲染最少的 DOM元素

### what is dom ?
DOM 结构化文本的抽象表达形式定于 Web 环境中，这个结构化文本就是 HTML 文本， 
HTML 中的每个元素都对应 DOM中某个节点，这样，因为 HTML 元素的逐级包含关系， DOM 节点自然就构成了一个树形结构，称为 DOM

浏览器为了渲染 HTML 格式的网页，会先将 HTML 文本解析以构建 DOM 树，然后
根据 DOM 树渲染出用户看到的界面，当要改变界面内容的时候，就去改变 DOM 树上的
节点

### what is virtual dom ? 
DOM 树是对 HTML 的抽象，那 Virtual DOM 就是对 DOM 树的抽象
Virutal DOM 不会触及浏览器的部分，只是存在于 JavaScript 空间的树形结构，每次自上而下渲染
React 组件时，会对比这一次产生的 Virtual DOM 和上一次渲染的 Virtual DOM ，对比
就会发现差别，然后修改真正的 DOM 树时就只需要触及差别中的部分就行

### virtual dom 是如何工作的(how)?

**简单案例：**
```javascript
  // 计数器组件
  function CountClick() {
    const [num, setNum] = useState(0)
    return (
      <>
        <button onClick={() => setNum(num + 1)}>click me </button>
        <span id="clickCount">{num}</span>
      </>
    )
  }
```
以这个 CountClick 为例，一开始计数显示为0，点击按钮后计数显示为1。React 通过Virtual DOM 对比发现修改span的内容从0变成了1而已，所以React 执行类似下面语句：
document.getElementById('clickCount').innerHTML = '1'

### **React 15的调和过程(Reconciliation)**
组件更新后，React会生成`Virtual DOM`。然后React会拿刚生成的Virtual DOM去对比旧的Virtual DOM，对比两者的不同。根据不同修改DOM 树，这样的改动是最小的。

这个找不同的过程就是，Reconciliation(调和)
### how is Reconciliation？
React 从根节点递归向下比较，，每个节点都可以看作一个这个节点以下部分子树的根节点

首先检查两个的根节点的类型是否相同
**节点类型不同的情况**
如果树形结构根节点类型不相同，那就意味着改动太大了，也不要去费心考虑是不
是原来那个树形的根节点被移动到其他地方去了，直接认为原来那个树形结构已经没用，
可以扔掉， 要重新构建新的 DOM 树，原有的树形上的 React 组件会经历“卸载”的生
命周期。

这时候， componentWillUnmount 方法会被调用，取而代之的组件则会经历装载过程
的生命周期，组件的 componentWillMount render componentDidMount 方法依次被
调用

这样做的好处是： 避免了O(N^3)的时间复杂度。React 必须选一个快捷的算法。
缺点是： 
```javascript
  // 更新前的组件
  <div>
    <Todos/>
  </div>

  // 更新后的组件
  <span>
    <Todos/>
  </span>
```
当发现根节点由div 变成了span 的时候，就会废除之前div节点以及下面所有的子节点。之后重新构建一个span节点以及子节点。
所以， 一定要避免包裹功能的节点类型被改变。

**节点类型相同**
两个树形结构的根节点相同，React就认为原来的根节点只需要更新过程，不会卸载。
这时，React会区分节点的类型，节点类型有两类：
- DOM元素(html里面的，div, span, p)
这时 React会对树形结构节点上的属性 内容做对比，更新修改的部分
```html
  <div style={{color: "red", fontSize: 15}} className="welcome">
    hello world
  </div>

  <!-- 改变之后的JSX是这样 -->
  <div style={{color: "green", fontSize: 15}} className="farewell">
    hello world
  </div>

  <!-- 操作dom树上的时候 只去修改 className 和 color属性  -->
```
- React组件()
如果属性结构的根节点不是 DOM 元素类型，那就只可能是 React 组件类型
React不知道如何去更新DOM树，逻辑还在React 组件中。React 能做的就是根据新节点的props去更新原来根节点的组件实例。依次触发一下函数：
  - shouldComponentUpdate
  - componentWillReceiveProps
  - componentWillUpdate
  - render
  - componentDidUpdate

在这个过程中，如果 shouldComponentUpdate 函数返回 false 的话，那么更新过程
就此打住，不再继续 所以为了保持最大的性能，每个 React 组件类必须要重视 shouldComponentUpdate ，如果发现根本没有必要重新渲染，那就可以直接返回 false
在处理完根节点的对比之后， React 的算法会对根节点的每个子节点重复一样的动作，
这时候每个子节点就成为它所覆盖部分的根节点，处理方式和它的父节点完全一样


### key的用法
同层比较子组件的时候，子组件唯一标识就是它的位置。
所以给每一个子组件添加 key属性 后，就能更好的对比。












