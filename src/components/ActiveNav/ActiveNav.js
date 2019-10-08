import React , {Component} from 'react'
import {NavLink} from 'react-router-dom'

class ActiveNav extends Component {
     render () {
         return (
             <div>
                 <NavLink to="/activites/recommend">推荐</NavLink>
                 <NavLink to="/activites/all">综合</NavLink>
                 <NavLink to="/activites/articles">文章</NavLink>
                 <NavLink to="/activites/pins">沸点</NavLink>
             </div>
         )
     }
}

export default ActiveNav;