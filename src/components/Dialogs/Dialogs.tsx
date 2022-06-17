import s from './Dialogs.module.css'
import {Message} from "./Message";
import {DialogItem} from "./DialogItem";
import {DialogsPageType} from "../../data/store";
import {ChangeEvent, useState} from "react";
import { Button } from '@mui/material';

export type DialogsPropsType = {
    DialogsPage: DialogsPageType
    addMessage: (message: string)=>void
   isAuth:boolean
}


export const Dialogs = (props: DialogsPropsType) => {

    let [message,setMessage]=useState('')
    const setMessageCallback = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value)
    }



    const OnClickButtonHandler = () => {
        props.addMessage(message)
        setMessage('')
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
                <textarea value={message} onChange={setMessageCallback}/>
                <Button size={"small"} variant={"outlined"} onClick={OnClickButtonHandler}>add message</Button>

            </div>

        </div>
    )
}