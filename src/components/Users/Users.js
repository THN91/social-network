import React from "react";
import * as axios from "axios";

import styless from './users.module.css'
import userPhoto from '../../assets/image/man-300x300-1.png'

const Users = (props) => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items);
            });
    }

    return <div>
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