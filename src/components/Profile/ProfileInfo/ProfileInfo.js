import React from 'react'
import Preloader from '../../common/Preloader/Preloader'
import classes from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus'
import ProfileStatusHooks from './ProfileStatusHooks'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <>
            {/* <h1 className={classes.title}>Main Content</h1>
            <img src="https://get-edu.kz/wp-content/uploads/2020/04/helpbox-contact.jpg" alt="wallpaper" /> */}

            <div className={classes.descriptionBlock}>
                {
                    props.profile.photos.large && <img
                        className={classes.userPhoto}
                        src={props.profile.photos.large}
                        alt="" />
                }

                {/* <ProfileStatus status={props.status} updateStatus={props.updateStatus} /> */}
                <ProfileStatusHooks status={props.status} updateStatus={props.updateStatus} />
            </div>
            {/* <div className={classes.userName}>
                <b>Name:<em>{props.profile.fullName}</em></b> 
        </div>*/}
        </>
    )

}

export default ProfileInfo
