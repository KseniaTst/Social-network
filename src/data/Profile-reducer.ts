import {v1} from "uuid";
import {ActionTypes, AddPostActionType, PostType} from "./store";
import {AnyAction, Dispatch} from "redux";
import {ProfileAPI} from "../API/api";
import {ThunkDispatch} from "redux-thunk";
import {RootStoreType} from "./Store-Redux";
import {useDispatch} from "react-redux";

export type ProfileType={
    status: string
    contacts: {
        facebook: string
        website: null
        vk: string
        twitter: string
        instagram: string
        youtube: null
        github: string
        mainLink: null
    },
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: { small: string, large: string }
}
type initialStateType={
    PostsData: Array<PostType>
    ProfileData: ProfileType
}

export type SetProfileAT={
    type: 'SET-PROFILE'
    profile:ProfileType

}
export type SetStatusAT= ReturnType<typeof SetStatusAC>
export type SetSmallPhotoAT=ReturnType<typeof SetSmallPhotoAC>


let initialState:initialStateType = {
    PostsData: [
        {id: v1(), message: 'Hello world!', value: 20},
        {id: v1(), message: 'It is my first message', value: 15},
    ],
    ProfileData: {
        status: '',
        contacts: {
            facebook: '',
            website: null,
            vk: '',
            twitter: '',
            instagram: '',
            youtube: null,
            github: '',
            mainLink: null,
        },
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        userId: 1,
        photos: { small: '', large: '' }

    }
}
export type DispatchType=ThunkDispatch<RootStoreType, unknown, AnyAction>
export const useAppDispatch=()=>useDispatch<DispatchType>()

export const ProfileReducer = (state: initialStateType = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case 'ADD-POST':
            return {
                ...state,
                PostsData: [...state.PostsData, {
                    id: v1(),
                    message: action.item,
                    value: 0
                }]
            };
        case 'SET-PROFILE':

            return {
                ...state,
                ProfileData: {...state.ProfileData, ...action.profile }

            }
        case 'SET-STATUS':
            return {
                ...state, ProfileData:{...state.ProfileData, status:action.status}
            }
        case 'SET-PHOTO':
            return {...state,
                ProfileData:{...state.ProfileData, photos:action.photo}

            }
        default:
            return state
    }
}
export const AddPostAC = (item: string): AddPostActionType => ({
    type: 'ADD-POST',
    item
})
export const SetProfileAC = (profile: ProfileType): SetProfileAT => ({
    type: 'SET-PROFILE',
    profile
}) as const
export const SetStatusAC=(status:string)=>({
    type:'SET-STATUS',
    status
})as const
export const SetSmallPhotoAC=(photo:any)=>({
    type:'SET-PHOTO',
    photo
}as const)

export const SetProfileTC=(userId:number)=>(dispatch:Dispatch)=>{
    ProfileAPI.getProfile(userId)
        .then(response => {

            dispatch( SetProfileAC(response.data))
        })
}
export const SetStatusTC=(userId:number)=>(dispatch:Dispatch)=>{
    ProfileAPI.getStatus(userId)
        .then(res=> {
            dispatch(SetStatusAC(res.data))})
}
export const UpdateStatusTC=(status:string)=>(dispatch:Dispatch)=>{
    ProfileAPI.updateStatus(status)
        .then(res=>{
            dispatch(SetStatusAC(status))
        })
}
export const SetSmallPhotoTC=(smallPhoto:any)=>(dispatch:Dispatch)=>{
    ProfileAPI.updatePhoto(smallPhoto)
        .then(res=>{

            if(res.status===200){
                dispatch(SetSmallPhotoAC(res.data.data.photos))
            }
        })
}