import React from "react";

import styless from "./users.module.css";
import userPhoto from "../../assets/image/users.png";
import {NavLink} from "react-router-dom";

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
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="avatar"
                                 className={styless.userPhoto}/>
                        </NavLink>
                       <div>
                           {
                               u.followed
                                   ? <button disabled={props.isFollowingProgress.some(id => id === u.id)}
                                             onClick={() => {
                                                 props.follow(u.id)
                                             }}
                                   >Unfollow</button>
                                   :
                                   <button disabled={props.isFollowingProgress.some(id => id === u.id)}
                                           onClick={() => {
                                               props.unfollow(u.id)
                                           }}
                                   >Follow</button>
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