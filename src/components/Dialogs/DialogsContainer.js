import {connect} from "react-redux";

import {updateNewMessangeText, sendMessange} from "../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import withAuthRedirect from "../../hoc/withAuthRedirect";

let mapStateToProps =  (state) => {
    return {
        dialogPage: state.dialogPage
    }
};

export default withAuthRedirect(connect(mapStateToProps, {sendMessange, updateNewMessangeText})(Dialogs));