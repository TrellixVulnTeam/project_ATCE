import React from 'react'
import s from './PostsList.module.scss'
import PostItem from './PostItem/PostItem'


const PostsList = ({ content }) => {
    return (
        <div className={s.PostList}>

            {content.map((data) => {
                return (
                    <PostItem key={data.data.id} postslist={data} />)
            })}

        </div>
    )
}

export default PostsList
