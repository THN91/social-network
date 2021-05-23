import React from "react";

import styless from './users.module.css'

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSdejfG7-Act_jGDn0aunA3XPrLgofw4GDMg&usqp=CAU',
                    followed: false,
                    fullName: 'Taras',
                    status: 'i study at home',
                    location: {city: 'Dnepr', country: 'Ukraine'}
                },
                {
                    id: 2,
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSdejfG7-Act_jGDn0aunA3XPrLgofw4GDMg&usqp=CAU',
                    followed: true,
                    fullName: 'Dima',
                    status: 'i work at home',
                    location: {city: 'Kiev', country: 'Ukraine'}
                },
                {
                    id: 3,
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSdejfG7-Act_jGDn0aunA3XPrLgofw4GDMg&usqp=CAU',
                    followed: false,
                    fullName: 'Oleg',
                    status: 'busy',
                    location: {city: 'Odessa', country: 'Ukraine'}
                }
            ]
        );
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                    <span>
                        <img src={u.photoUrl} alt="avatar" className={styless.userPhoto}/>
                       <div>
                           {
                               u.followed
                                   ? <button onClick={() => props.follow(u.id)}>Follow</button>
                                   : <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                           }
                       </div>
                    </span>
                <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                <span>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </span>
            </div>)
        }
    </div>
};

export default Users;