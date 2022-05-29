import React from 'react'
import { connect } from 'react-redux'
import { follow, setCurrentPage, unfollow, toggleFollowinProgress, requestUsers } from '../../redux/reducers/users-reducer'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
// import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from '../../redux/selectors/users-selectors'

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize)
    }

    render() {

        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}


/*const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}*/

export default compose(
    // withAuthRedirect,
    connect(mapStateToProps, {
        follow, unfollow, setCurrentPage, toggleFollowinProgress, requestUsers
    })
)(
    UsersContainer
)