import React from "react";

import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

    let postsElements = props.profilePage.posts.map(p => <Post message={p.messange} key={p.id} likesCount={p.likesCount}/>);

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = (e) => {
        let text = e.target.value;
        props.postChange(text);
    };

    return (
        <div className={s.postsBlock}>
            <div>
                my post
                <div>
                    <div>
                        <textarea
                            onChange={onPostChange}
                            value={props.profilePage.newPostText}
                        />
                    </div>
                    <div>
                        <button onClick={onAddPost}>Add post</button>
                    </div>
                </div>
            </div>
            {postsElements}
        </div>
    )
};

export default MyPosts;