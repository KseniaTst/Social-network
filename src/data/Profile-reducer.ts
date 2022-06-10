import {v1} from "uuid";
import {ActionTypes, AddPostActionType, PostType} from "./store";
import {AnyAction, Dispatch} from "redux";
import {ProfileAPI} from "../API/api";
import {ThunkDispatch} from "redux-thunk";
import {RootStoreType} from "./Store-Redux";
import {useDispatch} from "react-redux";

export type ProfileType={
    aboutMe: string
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


let initialState:initialStateType = {
    PostsData: [
        {id: v1(), message: 'Hello world!', value: 20},
        {id: v1(), message: 'It is my first message', value: 15},
    ],
    ProfileData: {
        aboutMe: '',
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
                ProfileData: action.profile

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

export const SetProfileTC=(userId:number)=>(dispatch:Dispatch)=>{
    ProfileAPI.getProfile(userId)
        .then(response => {
            dispatch( SetProfileAC(response.data))
        })
}