import React from 'react'
import ChildLifeCycle from './childLifeCycle'

class LifeCircle extends React.Component{
    static defaultProps = {}
    static propTypes = {};

    constructor () {
        console.log('1.constructor');
        super();
        this.state = {
            count: 0
        }
    }

    componentWillMount () {
        console.log('1.willMount');

        //ajax请求   但官方不建议  16.3之后该生命周期被移除了
        //进行setState
    }   

    render () {
        //渲染  
        console.log('1.render');
        return (
            <>
                <div>
                    count的值：{this.state.count}
                    <button onClick={ this.handleClick }>增加count的值</button>
                </div>
                {
                    this.state.count === 0
                    ?
                    <ChildLifeCycle n={ this.state.count }></ChildLifeCycle>
                    : ''   
                }
            </>
        )
    }

    componentDidMount () {
        //应该在这里发送ajax请求
        console.log('1.didMount');
    }

    shouldComponentUpdate (nextProps, nextState) {
        //优化性能
        console.log('1.shouleUpdate');
        return !(nextState.count === this.state.count); //如果下一个状态和现在的一样，就不更新了
    }

    componentWillUpdate () {
        //不能设置状态
        //16.3之后移除
        console.log('1.willUpdate');
    }

    componentDidUpdate () {
        //不能设置状态
        console.log('1.didUpdate');
    }

    handleClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
}

export default LifeCircle;
