import React, {useEffect} from "react";
import {connect} from "react-redux";
import {ProfileInfo} from "./ProfileInfo";
import {RootStoreType} from "../../../data/Store-Redux";
import {ProfileType, SetProfileAC, SetProfileTC, useAppDispatch} from "../../../data/Profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../HOC/withAuthRedirect";
import {compose} from "redux";



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


export default compose<React.ComponentType>(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, {setProfile:SetProfileAC})
)(ProfileInfoContainer)