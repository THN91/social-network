import React from "react";
import {connect} from "react-redux";

import Profile from "./Profile";
import {getProfile, setUserProfile} from "../redux/profile-reducer";
import {withRouter} from "react-router";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userID = this.props.match.params.userID;
        this.props.getProfile(userID)
    }

    render() {
        return <Profile {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
};

let WithRouterTakeUrl = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile, getProfile})(WithRouterTakeUrl);