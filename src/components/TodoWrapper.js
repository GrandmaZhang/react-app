import React from 'react'
import TodoInner from './TodoInner'
import {Provider} from './context'

class TodoWrapper extends React.Component{
    task = React.createRef();
    
    state = {
        list: [],
    }

    render(){
        return (
            <Provider value={{deleteTask: this.deleteTask}}>
                <div>
                    <input type="text" ref={ this.task } />
                    <button onClick={ this.handleClick }>添加</button>
                </div>
                <TodoInner list={this.state.list} fn={this.deleteTask}></TodoInner>
            </Provider>
        )
    }

    handleClick = () =>{
        this.setState({
            list: [...this.state.list, this.task.current.value]
        })
        this.task.current.value = "";
    }

    deleteTask = (index) => {
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list
        })
    }
}

export default TodoWrapper;