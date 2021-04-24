import React from "react";

import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.messange} likesCount={p.likesCount}/>
    )

    return (
        <div className={s.postsBlock}>
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
            {postsElements}
        </div>
    )
}

export default MyPosts;