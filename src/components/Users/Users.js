import React from 'react'
import classes from './Users.module.css'

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    avaUrl: 'https://media-exp1.licdn.com/dms/image/C5622AQH32m5gDbnn5g/feedshare-shrink_800/0/1601896044130?e=1619654400&v=beta&t=xX8SiRZbgV1JLpYYs6bcdQrB9cIWlC0J20DUX3KZPTU',
                    followed: true,
                    fullName: 'Sultan',
                    status: 'I am a boss',
                    location: { city: 'Bishkek', country: 'Kyrgzstan' }
                },
                {
                    id: 2,
                    avaUrl: 'https://videourokiprogrammirovanie.ru/upload/000/u0/0/c/0c5e7750.jpg',
                    followed: false,
                    fullName: 'Dmitry',
                    status: 'I am looking for a Job right now',
                    location: { city: 'Moscow', country: 'Russia' }
                },
                {
                    id: 3,
                    avaUrl: 'https://static-cdn.jtvnw.net/jtv_user_pictures/95f080c5-d5a9-4659-944c-091b7a2bb91c-profile_image-300x300.png',
                    followed: false,
                    fullName: 'Ilya',
                    status: 'I like a football!!!',
                    location: { city: 'Kiev', country: 'Ukraine' }
                },
                {
                    id: 4,
                    avaUrl: 'https://ae01.alicdn.com/kf/HTB1cQupitnJ8KJjSszdq6yxuFXaK/-.jpg',
                    followed: true,
                    fullName: 'Kiyoko',
                    status: 'I am so pretty',
                    location: { city: 'Tokyo', country: 'Japan' }
                },
            ]
        )
    }



    return (
        <div className={classes.users}>

            {props.users.map(user => {
                return (
                    <div className={classes.user} key={user.id}>
                        <span className={classes.leftBlock}>
                            <div className={classes.userAva}>
                                <img src={user.avaUrl} alt="" />
                            </div>
                            <div>
                                {user.followed ?
                                    <button onClick={() => props.unfollow(user.id)} className={classes.btn}>Unfollow</button>
                                    :
                                    <button onClick={() => props.follow(user.id)} className={classes.btn}>Follow</button>
                                }
                            </div>
                        </span>

                        <span className={classes.rightBlock}>
                            <span className={classes.about_user}>
                                <div className={classes.userName}>{user.fullName}</div>
                                <div>{user.status}</div>
                            </span>
                            <span className={classes.location}>
                                <div>{user.location.country}</div>
                                <div>{user.location.city}</div>
                            </span>
                        </span>
                    </div>
                )
            })}
        </div>
    )
}

export default Users