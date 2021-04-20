import React from 'react'
import classes from './Users.module.css'
import * as axios from 'axios'
import defaultAva from '../../img/1.jpg'

let Users = (props) => {
    if (props.users.length === 0) {

        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => props.setUsers(response.data.items))
    }

    return (
        <div className={classes.users}>

            {props.users.map(user => {
                return (
                    <div className={classes.user} key={user.id}>
                        <span className={classes.leftBlock}>
                            <div className={classes.userAva}>
                                <img src={user.photos.small !== null ? user.photos.small : defaultAva} alt="" />
                            </div>
                            {user.followed ?
                                <button onClick={() => props.unfollow(user.id)} className={classes.btn}>Unfollow</button>
                                :
                                <button onClick={() => props.follow(user.id)} className={classes.btn}>Follow</button>
                            }
                        </span>

                        <span className={classes.rightBlock}>
                            <span className={classes.about_user}>
                                <div className={classes.userName}>{user.name}</div>
                                <div>{user.status}</div>
                            </span>
                            <span className={classes.location}>
                                <div>{'user.location.country'}</div>
                                <div>{'user.location.city'}</div>
                            </span>
                        </span>
                    </div>
                )
            })}
        </div>
    )
}

export default Users