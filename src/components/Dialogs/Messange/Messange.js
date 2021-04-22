import React from 'react';

import s from './../Dialogs.module.css'

const Messange = (props) => {
    return (
        <div className={s.messange}>
            {props.messange}
        </div>
    )
}

export default Messange;