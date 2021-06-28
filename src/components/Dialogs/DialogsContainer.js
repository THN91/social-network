import {connect} from "react-redux";

import {updateNewMessangeText, sendMessange} from "../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

let mapStateToProps =  (state) => {
    return {
        dialogPage: state.dialogPage,
        isAuth: state.auth.isAuth
    }
};

const DialogContainer = connect(mapStateToProps, {sendMessange, updateNewMessangeText})(Dialogs);

export default DialogContainer;