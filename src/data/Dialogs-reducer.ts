import {v1} from "uuid";
import {ActionTypes, AddMessageActionType, DialogsPageType} from "./store";

let initial = {
    DialogsData: [
        {id: v1(), name: 'Ksenia'},
        {id: v1(), name: 'Nastya'},
        {id: v1(), name: 'Kolya'},
        {id: v1(), name: 'Nikita'},
        {id: v1(), name: 'Ruslan'}
    ],
    MessagesData: [
        {id: v1(), title: 'Hi'},
        {id: v1(), title: 'How are you'},
        {id: v1(), title: 'It is nice to meet you'},
        {id: v1(), title: 'Yo'},
        {id: v1(), title: 'Hello world'}
    ],
}

export const DialogsReducer = (state: DialogsPageType = initial, action: ActionTypes): DialogsPageType => {
    switch (action.type) {
        case 'ADD-Message':
            return  {...state,
                MessagesData:[...state.MessagesData, {id: v1(), title: action.message}]}
        default:
            return state
    }
}
export const AddMessageAC = (message: string): AddMessageActionType =>
    ({type: 'ADD-Message', message})