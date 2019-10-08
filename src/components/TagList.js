import React, {Fragment} from 'react'

//无状态组件 没有this和生命周期
function TagList(props) {
    console.log(props);
    const {list} = props;
    return (
        <Fragment>
        <div className="wrapper">
            <div className="title">
                <h4>搜索热点</h4>
                <span>换一换</span>
            </div>
            <ul>
                {
                    list.map((item, index)=>{
                        const indexStyle = {};
                        switch (index){
                            case 0:
                                indexStyle.backgroundColor = 'red';
                                break;
                            case 1:
                                indexStyle.backgroundColor = 'green';
                                break;
                            case 2:
                                indexStyle.backgroundColor = 'yellow';
                                break;
                            default:
                                break;
                        }

                        //必须有一个唯一的key值
                        return (<li className="list" key={item.id}> 
                                    <div>
                                        <span className="indexWrapper" style={ indexStyle }>{index + 1}</span>
                                        <a className="titleInner" href="#">{item.title}</a>
                                        { item.new ? <span className='new'>新</span> : ''}
                                    </div>
                                    <div className="hotNumber">
                                        <span>{item.hot}</span>
                                    </div>
                                </li>)
                    })
                }
            </ul>
        </div>
    </Fragment>
    )
}
export default TagList;