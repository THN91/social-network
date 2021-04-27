import React from 'react';

import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Messange from "./Messange/Messange";

const Dialogs = (props) => {

    let dialogElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messangeElements = props.state.messanges.map(m => <Messange messange={m.messange}/>)

    let newMessangeElement = React.createRef();

    let sendMessange = () => {
        props.addMessange()
    }

    let onMessangeChange = () => {
        let text = newMessangeElement.current.value
        props.updateNewMessangeText(text)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messanges}>
                <div>{messangeElements}</div>
                <div className={s.newMessange}>
                    <textarea
                        ref={newMessangeElement}
                        onChange={onMessangeChange}
                        value={props.state.newMessangeText}
                    />
                    <button onClick={sendMessange}>send messange</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;