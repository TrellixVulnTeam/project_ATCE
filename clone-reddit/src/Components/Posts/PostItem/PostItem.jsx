import React from 'react'
import s from './PostItem.module.scss'

import FavoriteButton from '../../UI/Favorite/Favorite'


const PostItem = ({ postslist }) => {

    if (postslist.data.preview) {
        let postlink = 'https://www.reddit.com/' + postslist.data.permalink
        return (
            <div className={s.card}>
                <div className={s.cardWrapper}>
                    <div className={s.cardMedia}>
                        <img src={postslist.data.url_overridden_by_dest} alt="" />
                    </div>
                    <div className={s.cardText}>
                        <p>
                            {postslist.data.title}
                        </p>
                        <div className="div">
                            <h6>{postslist.data.author_flair_text}</h6>
                            <h4>posted by <span>{postslist.data.author}</span> </h4>
                            <h5>{postslist.data.subreddit_name_prefixed}</h5>
                            <div className={s.cardAction}>
                                <a href={postlink} target="_blank" without rel="noreferrer"> show comment</a>
                            </div>
                        </div>

                    </div>

                </div>

                <FavoriteButton />
            </div>
        )
    }



    return (

        <div>

        </div >
    )
}

export default PostItem


