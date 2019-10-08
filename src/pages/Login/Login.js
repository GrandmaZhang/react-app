import React, {Component} from 'react'

import './style.css'

class Login extends Component {
    state = {
        isLogin: document.cookie.includes('login=true')
    }

    render () {
        console.log(this.props);
        return (
            <div className="login">
                <button className="login-btn" onClick={this.handleClick}>
                {this.state.isLogin ? '退出' : '登录'}
                </button>
            </div>
        )
    }

    handleClick = () =>{
        const isLogin = this.state.isLogin;
        if(isLogin){
            this.setCookie('login','',-1);
        }else{
            this.setCookie('login',true,300);
            this.jumpBack();
        }
        this.setState({
            isLogin: !isLogin
        })
    }
    setCookie = (key,value,day) =>{
        const expires = day * 24 * 60 * 60 * 1000;
        const date = new Date(+new Date() + expires);

        document.cookie = `${key}=${value};expires=${date.toUTCString()}`;
    }

    jumpBack = () =>{
        const {location, history} = this.props;
        //如果location.state 存在，就让他是 location.state.from 如果没有的画，就是location.state
        const from = location.state && location.state.from;

        if(from === '/'){
            history.push({
                pathname: from,
                state: {
                    article: location.state.article
                }
            })
        }else if( from === '/topics'){
            history.push(from);
        }
    }
}

export default Login;