import {SingleP} from "./SinglePost/SingleP";
import s from './Posts.module.css'
import {ChangeEvent, useState} from "react";

type PostType = {
    id: string
    message: string
    value: number
}
type PostsPropsType = {
    PostsData: Array<PostType>
    AddPost: (item:string)=>void
}

export const Posts = (props: PostsPropsType) => {
    let [post,setPosts]=useState('')
    const setPostCallback=(e:ChangeEvent<HTMLTextAreaElement>)=>{
        setPosts(e.currentTarget.value)
    }
    const OnClickButtonHandler=()=>{
        props.AddPost(post);
        setPosts('')
    }
    return (
        <div className={s.postsBlock}>

            <div>Myposts</div>
            <textarea value={post} onChange={setPostCallback}></textarea>
            <button onClick={OnClickButtonHandler}>add post</button>
            <div className={s.postsBlock}>
                {props.PostsData.map(el => {
                    return (
                        <SingleP key={el.id} message={el.message} value={el.value}/>
                    )
                })}
            </div>
        </div>
    )
}