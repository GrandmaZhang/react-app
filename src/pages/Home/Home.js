import React, {Component} from 'react'

import './style.css'

class Home extends Component {
    authorInput = React.createRef();
    articleInput = React.createRef();

    componentDidMount () {
        // console.log(this.props);
        const {location} = this.props;
        const articleInfo = location.state && location.state.article;
        if(articleInfo){
            this.authorInput.current.value = articleInfo.author;
            this.articleInput.current.value = articleInfo.title;
        }
    }

    render () {
        return (
            <div>
                <h3>发表话题：</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-box">
                        <label htmlFor="author">作者姓名：</label>
                        <input id="author" required ref={this.authorInput}></input>
                    </div>
                    <div className="form-box">
                        <label htmlFor="article">文章标题：</label>
                        <input id="article" required ref={this.articleInput}></input>
                    </div>
                    <button className="confirm-btn">提交</button>
                </form>
            </div>
        )
    }

    handleSubmit = (e) =>{
        e.preventDefault();

        const isLogin = document.cookie.includes('login=true');

        const author = this.authorInput.current.value;
        const title = this.articleInput.current.value;

        const id = Math.floor(Math.random() * 10000000000);

        const article = {
            author,
            title,
            id
        }
        // console.log(article);

        if(isLogin){
            this.setArticleStroage(article);            
        }else{
            alert('没有登陆，不能发表话题');
            this.props.history.push({
                pathname:'/login',
                state: {
                    article,
                    from: this.props.location.pathname
                }
            });
        }

    }

    setArticleStroage = (article) => {
        const articleList = JSON.parse(localStorage.getItem("articleList")) || [];
        articleList.push(article);
        localStorage.setItem('articleList', JSON.stringify(articleList));
        this.jumpToTopics();
    }

    jumpToTopics = () =>{
        console.log(this.props);  //history, location, match
        this.props.history.push('/topics');  //跳转到话题页
    }
}

export default Home;