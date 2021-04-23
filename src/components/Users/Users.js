import React from 'react'
import classes from './Users.module.css'
import defaultAva from '../../img/1.jpg'

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {

        pages.push(i)

    }

    return (
        <div className={classes.users}>
            <div className={classes.pagination}>
                {
                    pages.map(page => {
                        return (
                            <span
                                key={page}
                                className={props.currentPage === page ? classes.selectedPage : ''}
                                onClick={(event) => props.onPageChanged(page)}>
                                {page}
                            </span>
                        )
                    })
                }
            </div>
            {
                props.users.map(user => {
                    return (
                        <div className={classes.user} key={user.id}>
                            <div className={classes.leftBlock}>
                                <div className={classes.userAva}>
                                    <img src={user.photos.small !== null ? user.photos.small : defaultAva} alt="" />
                                </div>
                                {user.followed ?
                                    <button onClick={() => props.unfollow(user.id)} className={classes.btn}>Unfollow</button>
                                    :
                                    <button onClick={() => props.follow(user.id)} className={classes.btn}>Follow</button>
                                }
                            </div>

                            <div className={classes.rightBlock}>
                                <span className={classes.about_user}>
                                    <div className={classes.userName}>{user.name}</div>
                                    <div>{user.status}</div>
                                </span>
                                <span className={classes.location}>
                                    <div>{'user.location.country'}</div>
                                    <div>{'user.location.city'}</div>
                                </span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Users