import {AddMessageAC} from "../../data/Dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {compose, Dispatch} from "redux";
import {connect} from "react-redux";
import {RootStoreType} from "../../data/Store-Redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";


let mapStateToProps=(state:RootStoreType)=>{
    return{
        DialogsPage:state.DialogsPage,
    }
}

let mapDispatchToProps=(dispatch:Dispatch)=>{

    return{
        addMessage:(message:string)=>{
            dispatch(AddMessageAC(message))
        }
    }
}
export default compose<React.ComponentType>(withAuthRedirect,connect(mapStateToProps,mapDispatchToProps) )(Dialogs)

