import React from 'react';

import {updateNewMessangeBodyCreator, sendMessangeCreator} from "../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().dialogPage;

                    let sendMessange = () => {
                        store.dispatch(sendMessangeCreator())
                    };

                    let updateNewMessangeText = (text) => {
                        store.dispatch(updateNewMessangeBodyCreator(text))
                    };

                    return (
                        <Dialogs
                            sendMessange={sendMessange}
                            updateNewMessange={updateNewMessangeText}
                            state={state}
                        />
                    )
                }
            }

        </StoreContext.Consumer>
    )
};

export default DialogContainer;