import React from 'react'
import classes from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {

    // let posts = [
    //     { message: 'Hi, how are you', id: 1, img: img, likes: 130 },
    //     { message: 'Hi, how are you', id: 2, img: '', likes: 250 },
    //     { message: 'Hi, how are you', id: 3, img: '', likes: 10 },
    //     { message: 'Hi, how are you', id: 4, img: img, likes: 1530 },
    //     { message: 'Hi, how are you', id: 5, img: '', likes: 124 },
    //     { message: 'Hi, how are you', id: 6, img: img, likes: 194 },
    //     { message: '', id: 7, img: '', likes: 111 },
    // ]

    let postsElement = props.posts.map(post => <Post message={post.message} img={post.img} id={post.id} likes={post.likes} />)

    return (
        <div className={classes.MyPosts}>
            <h2 className={classes.title}>My Posts</h2>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                {postsElement}
            </div>
        </div>
    );
}

export default MyPosts;