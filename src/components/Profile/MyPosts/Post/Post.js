import React from 'react'
import classes from './Post.module.css';
import avatar from '../../../../img/defaultAvatar.jpg'

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src={props.img ? props.img : avatar} />
            {props.message}
            <div>{props.likes} likes</div>

            <span>Like</span>
        </div>
    );
}

export default Post;