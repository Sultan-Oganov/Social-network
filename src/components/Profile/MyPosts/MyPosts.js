import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElement = props.posts.map(post => {
        <Post
            message={post.message}
            img={post.img}
            id={post.id}
            likes={post.likes}
        />
    })

    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onChangeText = () => {
        let text = newPostElement.current.value
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action)
    }

    return (
        <div className={classes.MyPosts}>
            <h2 className={classes.title}>My Posts</h2>
            <div>
                <div>
                    <textarea onChange={onChangeText} ref={newPostElement} value={props.newPostText} />
                </div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={classes.posts}>
                {postsElement}
            </div>
        </div>
    );
}

export default MyPosts;