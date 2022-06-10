import React, {useEffect} from "react";
import {connect} from "react-redux";
import {ProfileInfo} from "./ProfileInfo";
import {RootStoreType} from "../../../data/Store-Redux";
import {ProfileType, SetProfileAC, SetProfileTC, useAppDispatch} from "../../../data/Profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";



type PathParamsType = {
    userId: number
}
type ProfileInfoContainerType = {
    setProfile: (profile: ProfileType) => void
    profile: ProfileType
}

// @ts-ignore
type PropsType = RouteComponentProps<PathParamsType> & ProfileInfoContainerType

function ProfileInfoContainer(props: PropsType) {

const dispatch=useAppDispatch()

    useEffect(() => {
        let userId = props.match.params.userId
        if (!userId) userId = 2
        dispatch(SetProfileTC(userId))
    }, [])

    return (
        <ProfileInfo {...props} profile={props.profile}/>

    )
}

const mapStateToProps = (state: RootStoreType) => ({
    profile: state.ProfilePage.ProfileData
})

let WithRouterProfileContainer = withRouter(ProfileInfoContainer)

export default connect(mapStateToProps, {setProfile:SetProfileAC})(WithRouterProfileContainer)