import {applyMiddleware, combineReducers, createStore} from "redux";
import {DialogsReducer} from "./Dialogs-reducer";
import {NavBarReducer} from "./NavBar-reducer";
import {ProfileReducer} from "./Profile-reducer";
import {UsersReducer} from "./Users-reducer";
import {AuthReducer} from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'

let Rootreducer = combineReducers({
    DialogsPage: DialogsReducer,
    ProfilePage: ProfileReducer,
    NavBar: NavBarReducer,
    UsersPage: UsersReducer,
    AuthUser: AuthReducer,
    Form:formReducer
})

export type RootStoreType = ReturnType<typeof Rootreducer>

let store = createStore(Rootreducer, applyMiddleware(thunkMiddleware))

export default store