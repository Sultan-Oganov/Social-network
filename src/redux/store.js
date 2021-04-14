import img from '../img/ava.jpg'
import a1 from '../img/1.jpg'
import a2 from '../img/2.png'
import a3 from '../img/3.jpg'
import a4 from '../img/4.jpg'
import a5 from '../img/5.png'
import a6 from '../img/6.jpg'
import a7 from '../img/7.png'
import profileReducer from './reducers/profile-reducer'
import sidebarReducer from './reducers/sidebar-reducer'
import dialogsReducer from './reducers/dialogs-reducer'

let store = {

    _state: {
        profilePage: {
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
        },
        dialogsPage: {
            dialogs: [
                { name: 'Sultan', id: 1, ava: a7 },
                { name: 'Adam', id: 2, ava: a2 },
                { name: 'Usman', id: 3, ava: a3 },
                { name: 'Emir', id: 4, ava: a4 },
                { name: 'Ilim', id: 5, ava: a5 },
                { name: 'Azamat', id: 6, ava: a6 },
                { name: 'Kaira', id: 7, ava: a1 },
            ],
            messages: [
                { id: 1, message: 'Hey' },
                { id: 2, message: 'Bye' },
                { id: 3, message: 'How\'re u doing?' },
                { id: 4, message: 'Yo' },
                { id: 5, message: 'How\'re u doing?' },
            ],
            newMessagesBody: ''
        },
        sidebar: {
            friends: [
                { name: 'Oleg', img: a5 },
                { name: 'Kostya', img: a3 },
                { name: 'Sasha', img: a4 },
            ]
        }
    },

    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state
    },
    //===================OBSERVER================
    subscribe(observer) {
        this._callSubscriber = observer;          // Паттерн Observer
    },
    //==================Dispatch================
    dispatch(action) {         //{ type: 'ADD-POST' } 

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)

    }
}

export default store

window.store = store