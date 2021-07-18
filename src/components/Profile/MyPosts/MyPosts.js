import React from "react";

import s from './MyPosts.module.css'
import Post from './Post/Post'
import PostReduxForm from "./MyPostForm";

const MyPosts = (props) => {

    let postsElements = props.profilePage.posts.map(p => <Post message={p.messange} key={p.id}
                                                               likesCount={p.likesCount}/>);

    let addNewPost = (values) => {
        props.addPost(values.newPost)
    };

    return (
        <div className={s.postsBlock}>
            <div>
                my post
                <PostReduxForm onSubmit={addNewPost}/>
            </div>
            {postsElements}
        </div>
    )
};

export default MyPosts;