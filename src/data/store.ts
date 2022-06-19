import {ProfileType, SetProfileAT, SetStatusAT} from "./Profile-reducer";
import {
    ChangeFetchingActionType,
    FollowActionType, IsFollowingAT,
    SetCurrentPageActionType,
    SetTotalUsersCountActionType,
    SetUsersActionType,
    UnFollowActionType
} from "./Users-reducer";
import {SetLoginedUserAT, SetUserDataAT} from "./auth-reducer";


export type DialogType = {
    id: string
    name: string
}
export type MessageType = {
    id: string
    title: string
}
export type PostType = {
    id: string
    message: string
    value: number
}
export type NavType={
    id:string
    ref:string
    title:string
}
export type DialogsPageType = {
    DialogsData: Array<DialogType>
    MessagesData: Array<MessageType>
}
export type PropfilePageType = {
    PostsData: Array<PostType>
    ProfileData: ProfileType
}
export type NavBarType={
    NavBarData:Array<NavType>
}
 type RootStateType = {
    DialogsPage: DialogsPageType
    ProfilePage: PropfilePageType
    NavBar:NavBarType
}
export type Storetype = {

    _state: RootStateType,
    _callSubscriber: (state: RootStateType) => void
    getState: () => RootStateType,
    Subscribe: (observer: (state: RootStateType) => void) => void,
    dispatch: (action: ActionTypes) => void
}
export type AddPostActionType = {
    type: 'ADD-POST'
    item: string
}
export type AddMessageActionType = {
    type: 'ADD-Message'
    message: string
}
export type ActionTypes = AddPostActionType | AddMessageActionType| FollowActionType|UnFollowActionType|SetUsersActionType|SetCurrentPageActionType
    |SetTotalUsersCountActionType|ChangeFetchingActionType|SetProfileAT|SetUserDataAT|SetLoginedUserAT|IsFollowingAT|SetStatusAT


// let store: Storetype = {
//     _state: {
//         DialogsPage: {
//             DialogsData: [
//                 {id: v1(), name: 'Ksenia'},
//                 {id: v1(), name: 'Nastya'},
//                 {id: v1(), name: 'Kolya'},
//                 {id: v1(), name: 'Nikita'},
//                 {id: v1(), name: 'Ruslan'}
//             ],
//             MessagesData: [
//                 {id: v1(), title: 'Hi'},
//                 {id: v1(), title: 'How are you'},
//                 {id: v1(), title: 'It is nice to meet you'},
//                 {id: v1(), title: 'Yo'},
//                 {id: v1(), title: 'Hello world'}
//             ],
//         },
//         ProfilePage: {
//             PostsData: [
//                 {id: v1(), message: 'Hello world!', value: 20},
//                 {id: v1(), message: 'It is my first message', value: 15},
//             ]
//         },
//         NavBar: {
//             NavBarData: [
//                 {id:v1(),ref:'/profile',  title: 'Profile'},
//                 {id:v1(),ref:'/dialogs', title: 'Messages'},
//                 {id:v1(), ref:'/news', title: 'News'},
//                 {id:v1(), ref:'/music', title: 'Music'},
//                 {id:v1(),ref:'/settings', title: 'Settings'},
// ]
// }
// },
//     _callSubscriber(state) {
//         return console.log('state is changed')
//     },
//
//     getState() {
//         return this._state
//     },
//     Subscribe(observer) {
//         return this._callSubscriber = observer
//     },
//
//
//     dispatch(action) {
//         this._state.ProfilePage = ProfileReducer(this._state.ProfilePage, action)
//         this._state.DialogsPage = DialogsReducer(this._state.DialogsPage, action)
//         this._state.NavBar=NavBarReducer(this._state.NavBar,action)
//         this._callSubscriber(this._state)
//     }
// }
// export default store

