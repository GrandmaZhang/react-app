//引入的react，名字必须是React，是大写的R
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//jsx  js + xml(html)   在js文件里写的html片段，需要借助React进行编译
let div = <div id="demo">hello world<span>React</span></div>
//jsx 相当于React.createElement的语法糖
//React.createElement(type, props, childrens...)
// let div = React.createElement('div', {id:'demo'}, 'hello world', React.createElement('span', null, 'React'))


//render函数：第一个参数：html代码，第二个参数：容器
ReactDOM.render(div, document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


