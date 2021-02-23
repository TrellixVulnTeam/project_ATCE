import React from 'react'
import Posts from '../Posts/Posts'
import s from './Home.module.scss'



const Home = () => {
    return (
        <div className={s.Home}>
            <Posts />
        </div >
    )
}

export default Home
