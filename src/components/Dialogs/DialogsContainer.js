import {connect} from "react-redux";

import {updateNewMessangeText, sendMessange} from "../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage
    }
};

export default compose(
    connect(mapStateToProps, {sendMessange, updateNewMessangeText}),
    withAuthRedirect
)(Dialogs);