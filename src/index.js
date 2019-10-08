import React from 'react'
import { render } from 'react-dom'
import {BrowserRouter as Router, Route, Switch, Redirect, Link, NavLink} from 'react-router-dom'
import './index.css'

// HashRouter  BrowserRouter

import Home from './pages/Home/Home'
import Activites from './pages/Activites/Activites'
import Topics from './pages/Topics/Topics'
import Login from './pages/Login/Login'
import Article from './pages/Article/Article'
import NoMatch from './pages/NoMatch/NoMatch'

import PrivateRoute from './components/PrivateRoute'

import App from './App'

render(
<Router>
    <App>
        <Switch>
            <Route path="/" exact={true} component={Home}></Route>
            <Route path="/activites" component={Activites}></Route>
            {/* <Route path="/topics" component={Topics}></Route> */}
            <PrivateRoute path='/topics' component={Topics}></PrivateRoute>
            <Route path="/login" component={Login}></Route>
            <Route path="/article/:id" component={Article}></Route>
            {/* 如果写一个Route标签在Switch里，没有指定一个path的话，如果输入了一个没有的path，就会跳到这里 */}
            {/* 但这种写法不主流 */}
            {/* <Route component={Error}></Route> */}
            <Route path="/error.html" component={NoMatch}></Route>
            <Redirect to="/error.html"></Redirect>  {/* 重定向 */}
        </Switch>
    </App>
</Router>, document.getElementById('root'));