import React, { Component } from 'react'
import s from './Home.module.scss'
import PostList from '../Posts/PostsList'

export default class Home extends Component {



    constructor(props) {
        super(props)
        this.url = 'http://www.reddit.com/r/'
        this.sorts = ['hot', 'new', 'top', 'controversial', 'rising']
        this.subredditArray = ['cats', 'dogs']
    }



    state = {
        currentSubreddit: 'cats',
        sort: 'top',
        after: null,
        before: null,
        loading: true,
        page: 1,
        posts: []
    }
    componentDidMount() {
        this.renderMedia(this.state.currentSubreddit)
    }

    renderMedia(sub) {

        this.setState({
            posts: [],
            currentSubreddit: sub,
            page: 1
        })

        fetch(this.url + sub + '/' + this.state.sort + '.json')
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    posts: data.data.children,
                    after: data.data.after,
                    before: data.data.before
                })
                window.scroll(0, 0)
            })
    }




    render() {


        let contentMedia
        if (this.state.posts.length > 0) {
            contentMedia = <div className={s.Content} > <PostList content={this.state.posts} /></div>
        } else contentMedia = <div className={s.noMedia}>Loading posts</div>

        return (
            <main className={s.Posts} >
                {contentMedia}
            </main >
        )
    }
}
