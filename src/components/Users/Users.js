import React from "react";

import styless from "./users.module.css";
import userPhoto from "../../assets/image/man-300x300-1.png";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        {pages.map(p => {
            return <span
                onClick={(e) => {
                    props.onPageChanged(p)
                }}
                className={props.currentPage === p && styless.currentPage}
            >{p}</span>
        })}

        {
            props.users.map(u => <div key={u.id}>
                    <span>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="avatar"
                             className={styless.userPhoto}/>
                       <div>
                           {
                               u.followed
                                   ? <button onClick={() => props.follow(u.id)}>Follow</button>
                                   : <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                           }
                       </div>
                    </span>
                <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                <span>
                        <div>{"u.location.city"}</div>
                        <div>{"u.location.country"}</div>
                    </span>
            </div>)
        }
    </div>

};

export default Users;