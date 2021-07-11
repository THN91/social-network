import React from "react";
import {Redirect} from "react-router";
import {connect} from "react-redux";

let mapStateToProps =  (state) => {
    return {
        isAuth: state.auth.isAuth
    }
};

const withAuthRedirect = ( Component ) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to={"/login"}/>;
            return <Component {...this.props}/>;
        }
    }

    let ConnectedAuthRedirect = connect(mapStateToProps)(RedirectComponent);

    return ConnectedAuthRedirect
};

export default withAuthRedirect;