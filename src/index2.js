import React, {Fragment} from 'react'
import { render } from 'react-dom'
// import TagList from './components/TagList'
// import TodoList from './components/TodoList'
// import Control from './components/Control'
// import UnControl from './components/UnControl'
// import Person from './components/Person'

// import TodoWrapper from './components/TodoWrapper'

//生命周期
import LifeCircle from './components/LifeCircle'

import './index.css'

//fragment   <React.Fragment>  或者<Fragment> (直接要用Fragment需要import一下)

//jsx  写在{}里的地方相当于js   <>里相当于html
//style的写法： style={{width:'400px',background:'red'}}  相当于在能写js的地方写一个对象。

//花括号里也能写函数
function test(){
    return 'test';
}

var topList = [
    {
        id: 0,
        title: '哈啰出行被下架',
        new: false,
        hot: '734万'
    },
    {
        id: 1,
        title: '迪士尼食品细则',
        new: false,
        hot: '660万'
    },
    {
        id: 2,
        title: '微信版花呗将上线',
        new: true,
        hot: '522万'
    },
    {
        id: 3,
        title: '肖战搂李沁脖子',
        new: false,
        hot: '499万'
    },
    {
        id: 4,
        title: '东来东往吸毒获刑',
        new: false,
        hot: '422万'
    }
];

//关键字： class => className
//label标签 的for属性  => htmlFor
//列表渲染， vue: v-for   使用map  必须有一个唯一的key值， 尽量不要使用index作为key值

let element = (
    <Fragment>
        <div className="wrapper">
            <div className="title">
                <h4>搜索热点</h4>
                <span>换一换</span>
            </div>
            <ul>
                {
                    topList.map((item, index)=>{
                        const indexStyle = {};
                        switch (index){
                            case 0:
                                indexStyle.backgroundColor = 'red';
                                break;
                            case 1:
                                indexStyle.backgroundColor = 'green';
                                break;
                            case 2:
                                indexStyle.backgroundColor = 'yellow';
                                break;
                            default:
                                break;
                        }

                        //必须有一个唯一的key值
                        return (<li className="list" key={item.id}> 
                                    <div>
                                        <span className="indexWrapper" style={ indexStyle }>{index + 1}</span>
                                        <a className="titleInner" href="#">{item.title}</a>
                                        { item.new ? <span className='new'>新</span> : ''}
                                    </div>
                                    <div className="hotNumber">
                                        <span>{item.hot}</span>
                                    </div>
                                </li>)
                    })
                }
            </ul>
        </div>
    </Fragment>
)

//相当于vue中的v-html
let str = '<span>i am innerHTML</span>';
let div = <div dangerouslySetInnerHTML={{__html: str}}></div> // 使用dangerouslySetInnerHTML的元素里面不能有任何内容



// render(<TagList list={ topList }></TagList>, document.getElementById('root'));


const person = {
    name: '张奶奶',
    age: 18,
    sex: 'nv',
    figure: {
        weight: 55,
        height: 175
    },
    hobby: ['读书', '看报', '吃'],
    salary: 1000000
}

// render(<Person {...person}></Person>, document.getElementById('root'));

// render(<TodoWrapper></TodoWrapper>, document.getElementById('root'));
render(<LifeCircle></LifeCircle>, document.getElementById('root'));