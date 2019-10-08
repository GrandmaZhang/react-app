import React, {Component} from 'react'
import {NavLink, Route, withRouter} from 'react-router-dom'

import './style.css'

// const withRouter = (Component) =>{
//     return () => {
//         return <Route component={ Component }></Route>
//     }
// }

class Nav extends Component {
    render () {
        return (
            <div className="nav">
                {/* NavLink 用a标签替换，可以点击自动添加一个active类名 */}
                <span className="logo" onClick={this.handleClick}>张奶奶学堂</span>
                <NavLink to="/" exact>首页</NavLink>
                <NavLink to="/activites">动态</NavLink>
                <NavLink to="/topics">话题</NavLink>
                <NavLink to="/login">登录</NavLink>
            </div>
        )
    }

    handleClick = () => {
        console.log(this.props.history);
        this.props.history.push('/');
    }
}

export default withRouter(Nav);