import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "bca1bff7-52dd-452c-8986-a39317f2fe13"
    },

})

export const userAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    }
};

export const authAPI = {
    authLogin() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            })
    }
};


export const followAPI = {
    unfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data;
            })
    },
    follow(id) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data;
            })
    }
};

export const profileAPI = {
    profilePage(userID) {
        return instance.get(`profile/` + userID)
            .then(response => {
                return response.data;
            });
    }
}
