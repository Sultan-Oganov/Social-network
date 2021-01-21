import React from 'react'
import classes from './Post.module.css';

const Post = (props) => {
    // console.log(props.message);
    return (
        <div className={classes.item}>
            <img src={props.img ? props.img : "https://st2.depositphotos.com/9223672/12056/v/950/depositphotos_120568228-stock-illustration-female-face-avatar-round-flat.jpg"} />
            {props.message}
            {props.hi}

            <span>Like</span>
        </div>
    );
}

export default Post;