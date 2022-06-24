import s from './Dialogs.module.css'
import {Message} from "./Message";
import {DialogItem} from "./DialogItem";
import {DialogsPageType} from "../../data/store";
import {AddMessageReduxForm} from "./AddMessageForm";

export type DialogsPropsType = {
    DialogsPage: DialogsPageType
    addMessage: (message: string)=>void
   isAuth:boolean
}
export type FormAddMessageDataType={
    message:string
}

export const Dialogs = (props: DialogsPropsType) => {
    
    const onSubmit = (formData:FormAddMessageDataType) => {
        console.log(formData)
        props.addMessage(formData.message)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {props.DialogsPage.DialogsData.map(el => {
                    return (
                        <DialogItem key={el.id} id={el.id} name={el.name}/>
                    )
                })}
            </div>

            <div className={s.messages}>
                {props.DialogsPage.MessagesData.map(el => {
                    return (
                        <Message key={el.id} message={el.title}/>
                    )
                })}
                <AddMessageReduxForm onSubmit={onSubmit}/>

            </div>

        </div>
    )
}