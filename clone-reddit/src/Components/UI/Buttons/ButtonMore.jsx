import React from 'react'
import s from './ButtonMore.module.scss'




const ButtonNext = (props) => {


    return (
        <button onClick={props.renderNextMedia} className={s.ButtonNext}>
            more
        </button>
    )
}

export default ButtonNext



