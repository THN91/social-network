import React from "react";

import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.state.posts}
                newPostText={props.state.newPostText}
                dispatch={props.dispatch}
                // updateNewPostText={props.updateNewPostText}
                // addPost={props.addPost}
            />
        </div>
    )
}

export default Profile;