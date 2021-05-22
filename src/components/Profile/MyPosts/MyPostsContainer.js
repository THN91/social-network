import React from "react";

import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().profilePage;

                    let addPost = () => {
                        store.dispatch(addPostActionCreator());
                    };

                    let postChange = (text) => {
                        store.dispatch(updateNewPostTextActionCreator(text));
                    };
                    return <MyPosts
                        addPost={addPost}
                        postChange={postChange}
                        state={state}
                    />
                }
            }
        </StoreContext.Consumer>
    )
};

export default MyPostsContainer;