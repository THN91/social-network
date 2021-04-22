import React from 'react';

import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Messange from "./Messange/Messange";

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Taras'},
        {id: 2, name: 'Ksusha'},
        {id: 3, name: 'Roma'},
        {id: 4, name: 'Natasha'},
        {id: 5, name: 'Vlad'},
        {id: 6, name: 'Tanya'},
    ]

    let messanges = [
        {id: 1, messange: 'hi'},
        {id: 2, messange: 'how are you?'},
        {id: 3, messange: 'what did you say?'},
        {id: 4, messange: 'ololo'},
        {id: 5, messange: 'wow'},
        {id: 6, messange: 'yo'},
    ]

    let dialogElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messangeElements = messanges.map(m => <Messange messange={m.messange}/>)

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