import {SingleP} from "./SinglePost/SingleP";
import s from './Posts.module.css'
import {PropfilePageType} from "../../../data/store";
import {AddPostReduxForm, FormAddPostDataType} from "./AddPostForm";

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

    const onSubmit = (formData: FormAddPostDataType) => {
        debugger
    props.AddPost(formData.post);

}


return (
    <div className={s.postsBlock}>

        <div style={{padding:'10px'}}>Myposts</div>
        <AddPostReduxForm onSubmit={onSubmit}/>
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