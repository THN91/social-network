import React from "react";
import {connect} from "react-redux";

import Profile from "./Profile";
import {getUserProfile, getUserStatus, updateUserStatus} from "../redux/profile-reducer";
import {withRouter} from "react-router";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userID = this.props.match.params.userID;
        if (!userID) {
            userID = 17776
        }
        this.props.getUserStatus(userID);
        this.props.getUserProfile(userID);
    }

    render() {
        return <Profile {...this.props}
                        profile={this.props.profile}
                        status={this.props.status}
                        updateUserStatus={this.props.updateUserStatus}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
};

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
    withAuthRedirect)(ProfileContainer);