import React from 'react';

import s from './Friend.module.css'

const  Friend = (props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.avatar}>
            </div>
            <span>{props.name}</span>
        </div>
    )
}

export default Friend;