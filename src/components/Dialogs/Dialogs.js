import React from 'react';

import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Messange from "./Messange/Messange";

const Dialogs = (props) => {

    let dialogElements = props.dialogPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messangeElements = props.dialogPage.messanges.map(m => <Messange messange={m.messange} key={m.id}/>);
    let newMessangeText = props.dialogPage.newMessangeText;

    let onSendMessangeClick = () => {
        props.sendMessange()
    };

    let onUpdateNewMessangeText = (e) => {
        let text = e.target.value;
        props.updateNewMessangeText(text)
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messanges}>
                <div>{messangeElements}</div>
                <div className={s.newMessange}>
                    <textarea
                        placeholder='Enter your messange'
                        onChange={onUpdateNewMessangeText}
                        value={newMessangeText}
                    />
                    <button onClick={onSendMessangeClick}>send messange</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;