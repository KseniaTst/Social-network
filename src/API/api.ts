import axios from "axios";

const instance= axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "bb4d8d53-c64d-4047-9be6-a6b7671d5984"
    }
})

export const UsersAPI = {

    getUsers: (pageSize: number, currentPage: number) => {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
            .then(res => res.data)
    },
    follow: (userId: number) => {
        return instance.post(`follow/` + userId)
            .then(res => res.data)
    },
    unfollow: (userId: number) => {
        return instance.delete(`follow/` + userId)
            .then(res => res.data)
    }
}

export const ProfileAPI = {
    getProfile: (userId: number) => {
        return instance.get(`profile/` + userId)
    },
    getStatus: (userId: number) => {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus: (status: string) => {
        return instance.put(`profile/status`, {status})
    }
}

export const AuthAPI = {
    auth: () => {
        return instance.get(`auth/me`)
    },
    authuser: (userId: number) => {
        return instance.get(`profile/` + userId)
    }
}