import React from 'react'
import classes from './Users.module.css'
import * as axios from 'axios'
import defaultAva from '../../img/1.jpg'

class UsersClass extends React.Component {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => this.props.setUsers(response.data.items))
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

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
                                    className={this.props.currentPage === page ? classes.selectedPage : ''}
                                    onClick={(event) => this.onPageChanged(page)}>
                                    {page}
                                </span>
                            )
                        })
                    }
                </div>
                {
                    this.props.users.map(user => {
                        return (
                            <div className={classes.user} key={user.id}>
                                <div className={classes.leftBlock}>
                                    <div className={classes.userAva}>
                                        <img src={user.photos.small !== null ? user.photos.small : defaultAva} alt="" />
                                    </div>
                                    {user.followed ?
                                        <button onClick={() => this.props.unfollow(user.id)} className={classes.btn}>Unfollow</button>
                                        :
                                        <button onClick={() => this.props.follow(user.id)} className={classes.btn}>Follow</button>
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
}


export default UsersClass