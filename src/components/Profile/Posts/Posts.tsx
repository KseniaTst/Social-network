import {SingleP} from "./SinglePost/SingleP";
import s from './Posts.module.css'
import {ChangeEvent, useState} from "react";
import {PropfilePageType} from "../../../data/store";
import {Button, TextField} from "@mui/material";

type PostType = {
    id: string
    message: string
    value: number
}
type PostsPropsType = {
    ProfilePage:PropfilePageType
    AddPost:(post:string)=>void
}


export const Posts = (props: PostsPropsType) => {
    let [post, setPosts] = useState('')
    console.log(post)
    const setPostCallback = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setPosts(e.currentTarget.value)
    }


    const OnClickButtonHandler = () => {
    props.AddPost(post);
    setPosts('')
}


return (
    <div className={s.postsBlock}>

        <div style={{padding:'10px'}}>Myposts</div>
        <div>
            <TextField value={post} onChange={setPostCallback}/>

            <Button style={{margin:'20px'}} variant={'outlined'} onClick={OnClickButtonHandler}>add post</Button>
        </div>
            <div className={s.postsBlock}>
                {props.ProfilePage.PostsData.map(el => {
                    return (
                        <SingleP key={el.id} message={el.message} value={el.value}/>
                    )
                })}
            </div>
        </div>
    )
}