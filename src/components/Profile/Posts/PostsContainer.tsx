import {AddPostAC} from "../../../data/Profile-reducer";
import {Posts} from "./Posts";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {RootStoreType} from "../../../data/Store-Redux";


let mapStateToProps=(state:RootStoreType)=>{
    return{
        ProfilePage: state.ProfilePage
    }
}
let mapDispatchToProps=(dispatch:Dispatch)=>{
    return{
        AddPost:(post:string)=>{
            dispatch(AddPostAC(post))
        }
    }
}
const PostsContainer= connect(mapStateToProps,mapDispatchToProps)(Posts)

export default PostsContainer