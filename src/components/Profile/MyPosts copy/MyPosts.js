import React from 'react'
import classes from './MyPosts.module.css';

const MyPosts = () => {
    return (
        <div>
            <h2 className={classes.title}>My Posts</h2>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                <div className={classes.item}>
                    <img src="https://st2.depositphotos.com/9223672/12056/v/950/depositphotos_120568228-stock-illustration-female-face-avatar-round-flat.jpg" />
                        Post 1
                </div>
                <div className={classes.item}>
                    Post 2
                </div>
                <div className={classes.item}>
                    Post 3
                </div>
                <div className={classes.item}>
                    Post 4
                </div>
                <div className={classes.item}>
                    Post 5
                </div>
            </div>
        </div>
    );
}

export default MyPosts;