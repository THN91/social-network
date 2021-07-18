import React from 'react';

import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Messange from "./Messange/Messange";
import DialogsReduxForm from "./DialogsForm";

const Dialogs = (props) => {

    let dialogElements = props.dialogPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messangeElements = props.dialogPage.messanges.map(m => <Messange messange={m.messange} key={m.id}/>);

    let addNewMessange = (values) => {
        props.sendMessange(values.newMessangeBody)
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messanges}>
                <div>{messangeElements}</div>
                <DialogsReduxForm onSubmit={addNewMessange}/>
            </div>
        </div>
    )
};

export default Dialogs;