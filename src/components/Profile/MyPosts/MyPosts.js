import React from "react";

import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    return (
        <div className={s.PostsBlock}>
            <div>
                my post
                <div>
                    <div>
                        <textarea name="" id=""></textarea>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                </div>
            </div>
            <Post message='Hi, how are you?' likesCount={15}/>
            <Post message="It's my first post" likesCount={20}/>
        </div>
    )
}

export default MyPosts;