import React from 'react';

import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Messange from "./Messange/Messange";

const Dialogs = (props) => {

    let dialogElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messangeElements = props.state.messanges.map(m => <Messange messange={m.messange}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messanges}>
                {messangeElements}
            </div>
        </div>
    )
}

export default Dialogs;