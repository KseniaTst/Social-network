import axios from "axios";

const instance= axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API-KEY": "bb4d8d53-c64d-4047-9be6-a6b7671d5984"
    }
})

export const getUsers=(pageSize:number,currentPage:number)=>{
    let promise = instance.get(`users?count=${pageSize}&page=${currentPage}`)
        .then(res=>res.data)
    return promise
}
export const follow=(userId:number)=>{
    let promise = instance.post(`follow/`+userId)
        .then(res=>res.data)
    return promise
}
export const unfollow=(userId:number)=>{
    let promise = instance.delete(`follow/`+userId)
        .then(res=>res.data)
    return promise
}

export const ProfileAPI={
    getProfile:(userId:number)=>{
       return  instance.get(`profile/` + userId)

    }
}

export const AuthAPI={
    auth:()=>{
       return  instance.get(`auth/me`)
    },
    authuser:(userId:number)=>{
      return   instance.get(`profile/`+userId)
    }
}