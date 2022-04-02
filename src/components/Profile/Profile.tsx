import { Posts } from "./Posts/Posts";
// import clP from "./Profile.module.css";
import clP from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../App";


 type PostsPropsType= {
     ProfilePage: {PostsData:Array<PostType>}
     AddPost: (item:string)=>void
 }

export const Profile = (props:PostsPropsType) => {
    return (<div >
            <ProfileInfo/>
            <Posts PostsData={props.ProfilePage.PostsData} AddPost={props.AddPost} />
        </div>
    )
}