import React from 'react'

class UnControl extends React.Component {

    // taskB = React.createRef()  // 16.3之后才有
    //使用时要this.taskB.current 才能拿到dom

    state = {
        list: []
    }

    render () {
        return (
            <>
                <div>
                    taskA:
                    {/* 相当于把输入的这个input框的dom，绑定到this.taskA上 */}
                    <input ref={(dom)=>{this.taskA = dom}}/>
                    <button name='taskA' onClick={this.handleClick}>添加A任务</button>
                </div>
                <div>
                    taskB:
                    <input ref={(dom)=>{this.taskB = dom}}/>
                    <button name='taskB' onClick={this.handleClick}>添加B任务</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index)=>(
                            <li key={ item + index }>{ item }</li>
                        ))
                    }
                </ul>
            </>
        )
    }


    handleClick = (e) => {
        const type = e.target.name;
        let task = this[type].value;
        console.log(task);

        if(type === 'taskA'){
            task = '任务A' + task
            this.taskA.value = '';
        }else if(type === 'taskB'){
            task = '任务B' + task
            this.taskB.value = '';
        }

        this.setState({
            list: [...this.state.list, task]
        })
    }
}

export default UnControl;