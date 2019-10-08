import React from 'react'
import PropTypes from 'prop-types'

class Person extends React.Component {
    //默认属性
    static defaultProps = {
        name: 'heihei'
    }

    //属性校验
    static propTypes = {
        name: PropTypes.string,
        age: PropTypes.number,
        sex: PropTypes.oneOf(['男','女']),
        figure: PropTypes.objectOf(PropTypes.number),
        hobby: PropTypes.arrayOf(PropTypes.string),
        salary(props, propsName, componentName){
            return new Error(
                `${componentName}组件传递值太小了，应该大于1万`
            )
        }
    }

    render () {
        console.log(this.props);
        const {name, age, sex, figure, hobby, salary} = this.props;
        return (
            <>
                <div>{this.props.name}个人资料：</div>
                <div>年龄：{age}</div>
                <div>性别：{sex}</div>
                <div>身高：{figure.height}</div>
                <div>体重：{figure.weight}</div>
                <div>兴趣：{hobby}</div>
                <div>薪资：{salary}</div>
            </>
        )
    }
}

export default Person;