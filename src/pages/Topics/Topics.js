import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import './style.css'

class Topics extends Component {
    state = {
        articleList: JSON.parse(localStorage.getItem('articleList')) || []
    }

    render () {
        return (
            <ul>
                {
                    this.state.articleList.reverse().map(item => (
                        <li key={item.id} className="navBox">
                            <span>{ item.author }</span><br/>
                            <Link to={{
                                pathname:`/article/${item.id}`,
                                state: {
                                    author: item.author,
                                    title: item.title
                                }
                                }}>{item.title}</Link>
                        </li>
                    ))
                }
            </ul>
        )
    }
}

export default Topics;