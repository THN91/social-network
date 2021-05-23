import React from 'react';
import {connect} from "react-redux";

import {updateNewMessangeBodyCreator, sendMessangeCreator} from "../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

let mapStateToProps =  (state) => {
    return {
        dialogPage: state.dialogPage
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessange: () => {
            dispatch(sendMessangeCreator())
        },
        updateNewMessangeText: (text) => {
            dispatch(updateNewMessangeBodyCreator(text))
        }
    }
};

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogContainer;