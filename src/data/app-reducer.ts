import {Dispatch} from "redux";

type InitialStateType={
    initialized:boolean
}
type ActionTypes= ReturnType<typeof InitializeAppAC>


let initialState:InitialStateType={
    initialized:false
}



export const AppReducer=(state:InitialStateType= initialState,action:ActionTypes):InitialStateType=>{
    switch (action.type) {
        case "INITIALIZE":
            return {...state, initialized:true}
        default:
            return state
    }
}

export const InitializeAppAC=()=>({type: 'INITIALIZE'}) as const

 export const SuccsessfulInitTC=()=>(dispatch:Dispatch)=>{
dispatch(InitializeAppAC())
}