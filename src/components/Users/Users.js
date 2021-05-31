import React from "react";
import * as axios from "axios";

import styless from './users.module.css'
import userPhoto from '../../assets/image/man-300x300-1.png'

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount)
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    };

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div>
            {pages.map(p => {
                return <span
                    onClick={(e) => {
                        this.onPageChanged(p)
                    }}
                    className={this.props.currentPage === p && styless.currentPage}
                >{p}</span>
            })}

            {
                this.props.users.map(u => <div key={u.id}>
                    <span>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="avatar"
                             className={styless.userPhoto}/>
                       <div>
                           {
                               u.followed
                                   ? <button onClick={() => this.props.follow(u.id)}>Follow</button>
                                   : <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
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
    }
}

export default Users;