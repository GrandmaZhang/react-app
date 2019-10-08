import React from 'react'

class ChildLifeCycle extends React.Component{
    render () {
        console.log('2.render');
        return (
            <div>我是子组件</div>
        )
    }

    componentWillReceiveProps (nextProps) {
        //状态的设置
        //ajax请求
        //但不建议   16.3之后 这个也不在了
        console.log('2.WillReceiveProps')
    }

    shouldComponentUpdate () {
        console.log('2.shouldUpdate');
        return true;
    }

    componentWillUpdate () {
        console.log('2.WillUpdate');
    }

    componentDidUpdate () {
        console.log('2.didUpdate');
    }
}

export default ChildLifeCycle;