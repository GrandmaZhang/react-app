import React from 'react'
import TodoItem from './TodoItem'

class TodoInner extends React.Component{
    render(){
        const {list, fn} = this.props;
        return (
            <ul>
                {
                    list.map((item, index) => (
                        <TodoItem index={index} key={item + index} task={item} deleteTask = {fn}></TodoItem>
                    ))
                }
            </ul>
        )
    }
}

export default TodoInner;