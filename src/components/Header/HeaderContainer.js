import React from 'react';
import {connect} from "react-redux";

import Header from "./Header";
import {authenticationUser, setUserData} from "../redux/auth-reducer";


class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authenticationUser()
    }

    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {setUserData, authenticationUser})(HeaderContainer);