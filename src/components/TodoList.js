import React from 'react'

class TodoList extends React.Component{ 
    //如果有很多函数，绑定起来非常麻烦，所以在React内部写一个函数，都使用箭头函数，省去了很多麻烦
    // handleChange = this.handleChange.bind(this)
    // handleClick = this.handleClick.bind(this)
    //状态
    // constructor () {
    //     super();
    //     this.state = {
    //         list: [1, 2, 3]
    //     }
    // }
    //相当于
    state = {
        inpVal: '',
        list: [1, 2, 3],
        count: 0
    }
    render () {
        return (
            <>
                <div>
                    <input type="text" value={this.state.inpVal} onChange={ this.handleChange } ></input>
                    <button onClick={this.handleClick}>添加</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) =>(
                            <li key={ item }>
                                { item }
                                <button onClick={ () => { this.handleDelete(index) }}>X</button>
                            </li>
                        ))
                    }
                </ul>
            </>
        )
        
    }

    handleChange = e => {
        console.log(e.target.value);
        this.setState({
            inpVal: e.target.value
        })
    }

    handleClick = () => {
        this.setState({
            list: [...this.state.list, this.state.inpVal],
            inpVal: ''
        })
    }

    handleDelete = index => {
        const list = this.state.list;
        list.splice(index, 1);

        this.setState({
            list
        })
    }

    handleAdd = () => {
        this.setState({count: this.state.count + 1})
        this.setState({count: this.state.count + 2})
        this.setState({count: this.state.count + 3})
        //最后count是3，因为React会批量更新，如果在一个函数里有很多setState，它会将他们合并，
        //也可以通过prevState来避免这种合并
        this.setState((prevState)=>{
            return {
                count: prevState.count + 1
            }
        })
    }
}

export default TodoList;