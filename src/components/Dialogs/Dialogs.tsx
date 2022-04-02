import s from './Dialogs.module.css'
import {Message} from "./Message";
import {DialogItem} from "./DialogItem";
import {DialogType, MessageType} from "../../App";

type DialogsPropsType={
    DialogsPage:{
    DialogsData: Array<DialogType>
    MessagesData:Array<MessageType>}
}


export const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {props.DialogsPage.DialogsData.map(el=>{
                return(
                    <DialogItem id={el.id} name={el.name}/>
                    )})}
            </div>

            <div className={s.messages}>
                {props.DialogsPage.MessagesData.map(el=>{
                    return(
                        <Message key={el.id} message={el.title}/>
                    )})}

            </div>
        </div>
    )
}