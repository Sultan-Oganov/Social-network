import img from '../../img/ava.jpg'
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'


let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you', img: img, likes: 130 },
        { id: 2, message: 'Hi, how are you', img: '', likes: 250 },
        { id: 3, message: 'Hi, how are you', img: '', likes: 10 },
        { id: 4, message: 'Hi, how are you', img: img, likes: 1530 },
        { id: 5, message: 'Hi, how are you', img: '', likes: 124 },
        { id: 6, message: 'Hi, how are you', img: img, likes: 194 },
        { id: 7, message: 'HALo', img: '', likes: 111 },
    ],
    newPostText: 'Samurai'
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                img: '',
                likes: 0,
            }
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost],

            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state
    }

}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    }
}

export default profileReducer