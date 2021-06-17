import * as axios from "axios"

const instanse = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "ab28184b-a0e6-4bd0-9a32-fe14a8aaa13c"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 50) {
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId) {
        return instanse.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instanse.delete(`follow/${userId}`)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instanse.get(`profile/` + userId)
    }
}

export const authAPI = {
    me() {
        return instanse.get(`auth/me`)
    }
}