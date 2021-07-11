import React from "react";
import {connect} from "react-redux";

import Profile from "./Profile";
import {getUserProfile} from "../redux/profile-reducer";
import {withRouter} from "react-router";
import withAuthRedirect from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userID = this.props.match.params.userID;
        if (!userID) {
            userID = 2
        }
        this.props.getUserProfile(userID)
    }

    render() {
        return <Profile {...this.props}/>
    }
}

let AuthRedirect = withAuthRedirect(ProfileContainer);


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
};

let WithRouterTakeUrl = withRouter(AuthRedirect);

export default connect(mapStateToProps, {getUserProfile})(WithRouterTakeUrl);