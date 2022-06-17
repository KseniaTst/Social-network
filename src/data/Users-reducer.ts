import {ActionTypes} from "./store";
import {Dispatch} from "redux";
import {follow, getUsers, unfollow} from "../API/api";

export type UserType = {
    id: number,
    photos: { small: string, large: string }
    followed: boolean,
    name: string,
    status: string
    uniqueUrlName: string
}
export type UsersType = Array<UserType>
export type UsersDataType = {
    UsersData: UsersType
}
export type InitialStateType = {
    UsersData: UsersType
    PageSize: number
    TotalUsersCount: number
    CurrentPage: number
    isFething:boolean
    isFollowing:(boolean|number)[]
}

export type SetUsersActionType = {
    type: 'SET-USERS'
    users: Array<UserType>
}
export type FollowActionType = {
    type: 'FOLLOW'
    userId: number
}
export type UnFollowActionType = {
    type: 'UNFOLLOW'
    userId: number
}
export type SetCurrentPageActionType = {
    type: 'SET-CURRENT-PAGE'
    currentPage: number
}
export type SetTotalUsersCountActionType = {
    type: 'SET-TOTAL-USERS-COUNT'
    count: number
}
export type ChangeFetchingActionType={
    type: 'CHANGE-FETCHIG';
    isFetching: boolean
}
export type IsFollowingAT={
    type:'IS-FOLLOWING';
    isFollowing:boolean
    userId:number
}


let initialState: InitialStateType = {
    UsersData: [],
    PageSize: 25,
    TotalUsersCount: 0,
    CurrentPage: 1,
    isFething: true,
    isFollowing: [false,0]

}

export const UsersReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                UsersData: state.UsersData.map(el => el.id === action.userId ? {...el, followed: true} : el)
            }
        case 'UNFOLLOW':
            return {
                ...state,
                UsersData: state.UsersData.map(el => el.id === action.userId ? {...el, followed: false} : el)
            }
        case 'SET-USERS':
            return {
                ...state,
                UsersData: action.users
            }
        case 'SET-CURRENT-PAGE':
            return {
                ...state, CurrentPage: action.currentPage
            }
        case 'SET-TOTAL-USERS-COUNT':
            return {
                ...state, TotalUsersCount: action.count
            }
            case 'CHANGE-FETCHIG':
            return {
                ...state, isFething: action.isFetching
            }
            case 'IS-FOLLOWING':
            return {
                ...state,
                isFollowing :action.isFollowing ?
                    [...state.isFollowing,action.userId]
                    :state.isFollowing.filter(id=>id!=action.userId)
            }
        default:
            return state
    }
}

export const followAC = (userId: number): FollowActionType => ({type: 'FOLLOW', userId})
export const unfollowAC = (userId: number): UnFollowActionType => ({type: 'UNFOLLOW', userId})
export const setUsersAC = (users: Array<UserType>): SetUsersActionType => ({type: 'SET-USERS', users})
export const setCurrentPageAC = (currentPage: number): SetCurrentPageActionType => ({type:'SET-CURRENT-PAGE',currentPage})
export const SetTotalUsersCountAC=(count:number):SetTotalUsersCountActionType=>({type:'SET-TOTAL-USERS-COUNT',count})
export const ChangeFetchingAC=(isFetching:boolean):ChangeFetchingActionType=>({type:'CHANGE-FETCHIG',isFetching})
export const IsFollowingAC=(isFollowing:boolean,userId:number):IsFollowingAT=>({type:'IS-FOLLOWING',isFollowing,userId})

export const getUsersTC=(pageSize:number,currentPage:number)=>(dispatch:Dispatch)=>{
    dispatch(ChangeFetchingAC(true))
    getUsers(pageSize,currentPage)
        .then(data => {
            dispatch(setCurrentPageAC(currentPage))
            dispatch(ChangeFetchingAC(false))
            dispatch(setUsersAC(data.items))
            dispatch(SetTotalUsersCountAC(data.totalCount))
        })
}
export const followTC = (id: number) => (dispatch: Dispatch) => {
    dispatch(IsFollowingAC(true, id))
    follow(id)
        .then(data => {
            if (data.resultCode == 0) {
                dispatch(followAC(id))
            }
            dispatch(IsFollowingAC(false, id))
        })
}
export const unfollowTC = (id: number) => (dispatch: Dispatch) => {
    dispatch(IsFollowingAC(true,id))
    unfollow(id)
        .then(data => {
            if (data.resultCode == 0) {
             dispatch(unfollowAC(id))
            }
            dispatch(IsFollowingAC(false,id))
        })
}