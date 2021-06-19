import React from "react";

import styless from "./users.module.css";
import userPhoto from "../../assets/image/users.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

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
                                   ? <button onClick={() => {
                                       axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                           withCredentials: true,
                                           headers: {
                                               "API-KEY": "bca1bff7-52dd-452c-8986-a39317f2fe13"
                                           }
                                       })
                                           .then(response => {
                                               if (response.data.resultCode === 0) {
                                                   props.unfollow(u.id)
                                               }
                                           })
                                   }}>Unfollow</button>
                                   : <button onClick={() => {
                                       console.log(u.followed)
                                       axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                           withCredentials: true,
                                           headers: {
                                               "API-KEY": "bca1bff7-52dd-452c-8986-a39317f2fe13"
                                           }
                                       })
                                           .then(response => {
                                               if (response.data.resultCode === 0) {
                                                   props.follow(u.id)
                                               }
                                           })
                                   }}>Follow</button>
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