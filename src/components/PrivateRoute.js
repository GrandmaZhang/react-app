import React from 'react'
import {Route, Redirect} from 'react-router-dom'

//高阶组件 ---- 进行权限校验
const PrivateRoute = ({component:Component, ...props}) => {
    return (
        <Route {...props} render={(p)=>{
            const isLogin = document.cookie.includes('login=true');
            // const Component = component;
            if(isLogin){
                return <Component></Component>
            }else{
                alert('您还没有登录，请转至登录页');
                return <Redirect to={{
                    pathname: '/login',
                    state: {
                        from: p.location.pathname
                    }
                }}></Redirect>
            }
        }}></Route>
    )
}

export default PrivateRoute;