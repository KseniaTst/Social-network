import {AddMessageAC} from "../../data/Dialogs-reducer";
import {Dialogs} from "./Dialogs";
import { Dispatch } from "redux";
import {connect} from "react-redux";
import {RootStoreType} from "../../data/Store-Redux";


let mapStateToProps=(state:RootStoreType)=>{
    return{
        DialogsPage:state.DialogsPage,
        isAuth:state.AuthUser.isAuth
    }
}

let mapDispatchToProps=(dispatch:Dispatch)=>{

    return{
        addMessage:(message:string)=>{
            dispatch(AddMessageAC(message))
        }
    }
}
const DialogsContainer =connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer