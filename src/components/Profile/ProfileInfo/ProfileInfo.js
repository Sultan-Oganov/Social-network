import React from 'react'
import Preloader from '../../common/Preloader/Preloader'
import classes from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }
    return (
        <>
            {/* <h1 className={classes.title}>Main Content</h1>
            <img src="https://get-edu.kz/wp-content/uploads/2020/04/helpbox-contact.jpg" alt="wallpaper" />
*/}
            <div className={classes.descriptionBlock}>
                <img
                    className={classes.userPhoto}
                    src={props.profile.photos.large}
                    alt="" />
                <ProfileStatus status={'Hello MF'} />
            </div>
            {/* 
            <div className={classes.userName}>
                <b>Name:<em>{props.profile.fullName}</em></b>
            </div>
        </div> */}
        </>
    )

}

export default ProfileInfo
