import {Component, ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {RootStoreType} from "../data/Store-Redux";
import {connect} from "react-redux";

type MapStateToPropsType={
    isAuth:boolean|null
}
const mapStateToProps=(state:RootStoreType):MapStateToPropsType=>{
    return {
        isAuth:state.AuthUser.isAuth
    }
}

export function withAuthRedirect <T>(Component:ComponentType<T>){

    const RedirectComponent = (props:MapStateToPropsType) => {

        let {isAuth,...restProps}=props
             if (props.isAuth===null|| !props.isAuth) return <Redirect to={'/login'}/>;
            return <Component {...restProps as T}/>

    }

    return connect(mapStateToProps)(RedirectComponent)
}

