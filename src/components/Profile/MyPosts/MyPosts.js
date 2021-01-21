import React from 'react'
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import img from '../../../img/ava.jpg'


const MyPosts = () => {
    return (
        <div>
            <h2 className={classes.title}>My Posts</h2>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                <Post message='Hi, how are you' />
                <Post message="It\'s my first post" />
                <Post message='Hello' img={img} />
                <Post message='fffff' />
                <Post hi='SayHello' />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
}

export default MyPosts;