import React from 'react'
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';


const Profile = () => {
    return (
        <div className={classes.content}>
            <h1 className={classes.title}>Main Content</h1>
            <img src="https://get-edu.kz/wp-content/uploads/2020/04/helpbox-contact.jpg"></img>
            <MyPosts />
        </div>
    );
}

export default Profile;