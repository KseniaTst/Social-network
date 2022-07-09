import React, {memo, useEffect} from "react";
import {connect} from "react-redux";
import {ProfileInfo} from "./ProfileInfo";
import {RootStoreType} from "../../../data/Store-Redux";
import {
    ProfileType,
    SetProfileTC,
    SetSmallPhotoTC,
    SetStatusTC,
    UpdateStatusTC,
    useAppDispatch
} from "../../../data/Profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../HOC/withAuthRedirect";
import {compose} from "redux";


type PathParamsType = {
    userId: number
}
type ProfileInfoContainerType = {
    profile: ProfileType
    status: string
    AuthUserId: number
}

// @ts-ignore
type PropsType = RouteComponentProps<PathParamsType> & ProfileInfoContainerType

const ProfileInfoContainer = memo(function (props: PropsType) {

    const dispatch = useAppDispatch()

    const addSmallPhoto = (smallPhoto: any) => {

        dispatch(SetSmallPhotoTC(smallPhoto))
    }

    useEffect(() => {

        let userId = props.match.params.userId;

        if (!userId) userId = props.AuthUserId

        dispatch(SetProfileTC(userId))
        dispatch(SetStatusTC(userId))

    }, [props.match.params.userId,props.profile.photos])

    const UpdateStatus = (status: string) => {

        dispatch(UpdateStatusTC(status))
    }

    return (
        <ProfileInfo {...props} status={props.status} profile={props.profile} updateStatus={UpdateStatus}
                     isOwner={!props.match.params.userId} setNewPhoto={addSmallPhoto}/>

    )
})

const mapStateToProps = (state: RootStoreType) => ({
    profile: state.ProfilePage.ProfileData,
    status: state.ProfilePage.ProfileData.status,
    AuthUserId: state.AuthUser.data.id
})


export default compose<React.ComponentType>(
    withRouter,
    withAuthRedirect,
    connect(mapStateToProps, {})
)(ProfileInfoContainer)