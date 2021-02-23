import React, { Component } from 'react'
import s from './Posts.module.scss'
import FavoriteButton from '../UI/Favorite/Favorite'




export default class Posts extends Component {



    state = {
        loading: true,
        posts: []
    }




    async componentDidMount() {
        let response = await fetch('http://www.reddit.com/r/cats.json')
        let data = await response.json()
        this.setState({ loading: true, posts: data.data.children })
        // console.log(this.state.posts);


    }


    renderMedia() {
        return this.state.posts.map((data) => {
            if (data.data.post_hint === 'image') {
                return (
                    <div key={data.id} className={s.Content}>
                        <img src={data.data.url_overridden_by_dest} alt="" />
                        <div className={s.ContentWrapper}>
                            <div className={s.ContentBox}>
                                <p>
                                    {data.data.title}
                                </p>
                                <h5>
                                    posted at  by <span>{data.data.author}</span>
                                </h5>
                            </div>
                            <FavoriteButton />
                        </div>
                    </div>

                )
            } else if (data.data.is_video === true) {
                return (
                    <div key={data.id} className={s.Content}>
                        <video width='150' controls
                            src={data.data.media.reddit_video.fallback_url}
                            type='video/mp4'
                        >
                            Your browser doesn't support HTML5 video tag.
                    </video>
                        <div className={s.ContentWrapper}>
                            <div className={s.ContentBox}>
                                <p>
                                    {data.data.title}
                                </p>
                                <h5>
                                    posted at  by <span>{data.data.author}</span>
                                </h5>
                            </div>
                            <FavoriteButton />
                        </div>
                    </div >




                )
            }
            else return console.log('Content without media');
        })
    }


    render() {
        return (
            <section className={s.Posts}>
                {this.renderMedia()}
            </section >
        )
    }
}

