import React from "react";
import {connect} from "react-redux";

import Profile from "./Profile";
import {setUserProfile} from "../redux/profile-reducer";
import {withRouter} from "react-router";
import {profileAPI} from "../../api/api";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userID = this.props.match.params.userID;
        if (!userID) {
            userID = 2
        }
        profileAPI.profilePage(userID)
            .then(data => {
                this.props.setUserProfile(data);
            });
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

export default connect(mapStateToProps, {setUserProfile})(WithRouterTakeUrl);