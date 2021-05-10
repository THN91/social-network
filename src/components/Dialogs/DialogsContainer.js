import React from 'react';

import {updateNewMessangeBodyCreator, sendMessangeCreator} from "../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogContainer = (props) => {

    let state = props.state.dialogPage;

    let sendMessange = () => {
        props.dispatch(sendMessangeCreator())
    };

    let updateNewMessangeText = (text) => {
        props.dispatch(updateNewMessangeBodyCreator(text))
    };

    return <Dialogs
        sendMessange={sendMessange}
        updateNewMessange={updateNewMessangeText}
        state={state}
    />
};

export default DialogContainer;