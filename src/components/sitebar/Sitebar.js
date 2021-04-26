import React from 'react';

import s from './Sitebar.module.css'
import Friend from "./friend/Friend";

const Sitebar = (props) => {
    let friendElements = props.state.friends.map(f => <Friend name={f.name}/>)

    return (
        <div className={s.wrapper}>
            <h2>Friends</h2>
            <div className={s.friendsItem}>
                {friendElements}
            </div>
        </div>
    )
}

export default Sitebar;