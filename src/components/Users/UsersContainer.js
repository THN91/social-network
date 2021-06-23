import React from "react";
import {connect} from "react-redux";

import {
    follow,
    setCurrentPage,
    setTotalCount,
    setUsers,
    toogleIsFetching,
    unfollow
} from "../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {userAPI} from "../../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toogleIsFetching(true);
        userAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toogleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalCount(data.totalCount)
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toogleIsFetching(true);
        userAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toogleIsFetching(false);
                this.props.setUsers(data.items);
            });
    };

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
};

export default connect(mapStateToProps,
    {follow, unfollow, setUsers, setCurrentPage, setTotalCount, toogleIsFetching})(UsersContainer)