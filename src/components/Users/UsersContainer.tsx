import {connect} from "react-redux";
import {RootStoreType} from "../../data/Store-Redux";
import {
    ChangeFetchingAC,
    followAC, followTC, getUsersTC, IsFollowingAC,
    setCurrentPageAC,
    unfollowAC, unfollowTC,
    UsersType
} from "../../data/Users-reducer";
import React from "react";
import {Users} from "./Users";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

export type UsersAPIPropsType = {
    Users: UsersType
    PageSize: number
    CurrentPage: number
    TotalUsersCount: number
    isFetching:boolean
    isFollowing: (boolean|number)[]
    Follow: (userId: number) => void
    Unfollow: (userId: number) => void
    SetCurrentPage: (currentPage: number) => void
    ChangeIsFollowing:(isFollowing:boolean,userId:number)=>void
    getUsersTC:(pageSize:number,currentPage:number)=>void
    followTC:(id:number)=>void
    unfollowTC:(id:number)=>void
}

class UsersAPIComponent extends React.Component<UsersAPIPropsType> {

    componentDidMount() {
        this.props.getUsersTC(this.props.PageSize,this.props.CurrentPage)
    }

    onSetCurrentPage = (PageNumber: number) => {
        this.props.getUsersTC(this.props.PageSize,PageNumber)
    }

    render() {

        return <Users Users={this.props.Users} PageSize={this.props.PageSize} CurrentPage={this.props.CurrentPage}
                      TotalUsersCount={this.props.TotalUsersCount} Follow={this.props.Follow}
                      Unfollow={this.props.Unfollow} onSetCurrentPage={this.onSetCurrentPage}
                      isFetching={this.props.isFetching} isFollowing={this.props.isFollowing}
        followTC={this.props.followTC} unfollowTC={this.props.unfollowTC}/>

    }
}

const mapStateToProps = (state: RootStoreType) => {
    return {
        Users: state.UsersPage.UsersData,
        PageSize: state.UsersPage.PageSize,
        TotalUsersCount:state.UsersPage.TotalUsersCount,
        CurrentPage: state.UsersPage.CurrentPage,
        isFetching: state.UsersPage.isFething,
        isFollowing:state.UsersPage.isFollowing
    }
}



export default  compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {
        Follow:followAC, Unfollow:unfollowAC, SetCurrentPage:setCurrentPageAC,
        ChangeFetching:ChangeFetchingAC, ChangeIsFollowing:IsFollowingAC, getUsersTC, followTC,unfollowTC
    })
)(UsersAPIComponent)
