import React from 'react'
import Preloader from '../../common/Preloader/Preloader'
import classes from './ProfileInfo.module.css'

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }
    return (
        <>
            <h1 className={classes.title}>Main Content</h1>
            <img src="https://get-edu.kz/wp-content/uploads/2020/04/helpbox-contact.jpg" alt="wallpaper" />

            <div>
                <img
                    style={{ width: '400px' }}
                    src={props.profile.photos.large}
                    alt="" />
            </div>
        </>
    )

}

export default ProfileInfo
