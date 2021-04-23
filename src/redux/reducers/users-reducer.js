const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
    users: [
        // {
        //     id: 1,
        //     avaUrl: 'https://media-exp1.licdn.com/dms/image/C5622AQH32m5gDbnn5g/feedshare-shrink_800/0/1601896044130?e=1619654400&v=beta&t=xX8SiRZbgV1JLpYYs6bcdQrB9cIWlC0J20DUX3KZPTU',
        //     followed: true,
        //     fullName: 'Sultan',
        //     status: 'I am a boss',
        //     location: { city: 'Bishkek', country: 'Kyrgzstan' }
        // },
        // {
        //     id: 2,
        //     avaUrl: 'https://videourokiprogrammirovanie.ru/upload/000/u0/0/c/0c5e7750.jpg',
        //     followed: false,
        //     fullName: 'Dmitry',
        //     status: 'I am looking for a Job right now',
        //     location: { city: 'Moscow', country: 'Russia' }
        // },
        // {
        //     id: 3,
        //     avaUrl: 'https://static-cdn.jtvnw.net/jtv_user_pictures/95f080c5-d5a9-4659-944c-091b7a2bb91c-profile_image-300x300.png',
        //     followed: false,
        //     fullName: 'Ilya',
        //     status: 'I like a football!!!',
        //     location: { city: 'Kiev', country: 'Ukraine' }
        // },
        // {
        //     id: 4,
        //     avaUrl: 'https://ae01.alicdn.com/kf/HTB1cQupitnJ8KJjSszdq6yxuFXaK/-.jpg',
        //     followed: true,
        //     fullName: 'Kiyoko',
        //     status: 'I am so pretty',
        //     location: { city: 'Tokyo', country: 'Japan' }
        // },
    ],
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
}
const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }
                    }
                    return user
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false }
                    }
                    return user
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }

}
export const follow = (userId) => ({ type: FOLLOW, userId })
export const unfollow = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export default usersReducer