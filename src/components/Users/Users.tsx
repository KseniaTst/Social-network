import st from "./Users.module.css";
import userPhoto from "../../assets/photos/avatar-profile-picture.jpg";
import {Button, CircularProgress} from "@mui/material";
import React from "react";
import {UsersType} from "../../data/Users-reducer";
import {NavLink} from "react-router-dom";

export type UsersPropsType = {
    Users: UsersType
    PageSize: number
    CurrentPage: number
    TotalUsersCount: number
    isFetching: boolean
    isFollowing:(boolean|number)[]
    Follow: (userId: number) => void
    Unfollow: (userId: number) => void
    onSetCurrentPage: (PageNumber: number) => void
    followTC:(id:number)=>void
    unfollowTC:(id:number)=>void
}


export let Users = (props: UsersPropsType) => {

    let PagesCount = Math.ceil(props.TotalUsersCount / props.PageSize)
    let pages = []
    for (let i = 1; i <= PagesCount; i++) {
        pages.push(i)
    }
    const onClickFollow = (id: number) => {
        props.followTC(id)
    }
    const onClickUnfollow = (id: number) => {
        props.unfollowTC(id)
    }



    return <div className={st.container}>
        {props.isFetching && <CircularProgress/>}
        <div>
            {pages.map(p => {
                return <span onClick={() => props.onSetCurrentPage(p)}
                             className={props.CurrentPage === p ? st.selectedPage : ''}>{p}</span>
            })}
        </div>
        {
            props.Users.map(el =>
                <div key={el.id}>
                    <div className={st.main} key={el.id}>
                        <div>
                            <NavLink to={'/profile/' + el.id}>
                                <img className={st.img}
                                     src={el.photos.small !== null ? el.photos.small : userPhoto}/>
                            </NavLink>
                        </div>
                        <div className={st.inf}>
                            <div>{el.name}</div>
                            <div>{'el.location.country'},{'el.location.city'}</div>
                            <div>{el.status !== null ? el.status : 'no status'}</div>
                        </div>
                        <div>
                            {el.followed ?
                                <Button style={{margin: '40px', width: '100px'}}
                                        variant={'outlined'}
                                        disabled={props.isFollowing.some(id=>id===el.id)}
                                        onClick={() => onClickUnfollow(el.id)}
                                        size={'small'}>UnFollow</Button> :
                                <Button style={{margin: '40px', width: '100px'}}
                                        variant={'outlined'}
                                        disabled={props.isFollowing.some(id=>id===el.id)}
                                        onClick={() => onClickFollow(el.id)}
                                        size={'small'}>Follow</Button>}
                        </div>

                    </div>
                    <hr/>
                </div>
            )}
    </div>

}