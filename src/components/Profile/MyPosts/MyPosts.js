import React, { memo } from 'react'
import AddNewPostReduxForm from './AddPostForm/AddPostForm';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = memo((props) => {

    let postsElement = props.posts.map(post => {
        return (
            <Post
                message={post.message}
                img={post.img}
                id={post.id}
                likes={post.likes}
                key={post.id}
            />
        )
    })

    const addNewPost = (formData) => {
        props.addPost(formData.newPostText)
    }

    return (
        <div className={classes.MyPosts}>
            <h2 className={classes.title}>My Posts</h2>
            <AddNewPostReduxForm onSubmit={addNewPost} />
            <div className={classes.posts}>
                {postsElement}
            </div>
        </div>
    );
})

export default MyPosts;