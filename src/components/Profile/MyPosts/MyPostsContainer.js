import React from "react";

import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let state = props.state.profilePage;

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let postChange = (text) => {
        props.dispatch(updateNewPostTextActionCreator(text));
    };

    return <MyPosts addPost={addPost} postChange={postChange} state={state}/>
};

export default MyPostsContainer;