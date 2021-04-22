import React from 'react';
import {NavLink} from "react-router-dom";

import s from './Dialogs.module.css'

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Messange = (props) => {
    return (
        <div className={s.messange}>
            {props.messange}
        </div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Taras" id="1"/>
                <DialogItem name="Ksusha" id="2"/>
                <DialogItem name="Roma" id="3"/>
                <DialogItem name="Natasha" id="4"/>
                <DialogItem name="Vlad" id="5"/>
                <DialogItem name="Tanya" id="6"/>
            </div>
            <div className={s.messanges}>
                <Messange messange="hi"/>
                <Messange messange="how are you?"/>
                <Messange messange="what did you say?"/>
                <Messange messange="ololo"/>
                <Messange messange="wow"/>
                <Messange messange="yo"/>
            </div>
        </div>
    )
}

export default Dialogs;