import React from 'react'
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import img from '../../img/ava.jpg'


const Profile = (props) => {

    return (
        <div className={classes.content}>
            <ProfileInfo />
            <MyPosts posts={props.posts} />
        </div>
    );
}

export default Profile;