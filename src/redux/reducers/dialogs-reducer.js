import a1 from '../../img/1.jpg'
import a2 from '../../img/2.png'
import a3 from '../../img/3.jpg'
import a4 from '../../img/4.jpg'
import a5 from '../../img/5.png'
import a6 from '../../img/6.jpg'
import a7 from '../../img/7.png'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    dialogs: [
        { name: 'Sultan', id: 1, ava: a7 },
        { name: 'Adam', id: 2, ava: a2 },
        { name: 'Usman', id: 3, ava: a3 },
        { name: 'Emir', id: 4, ava: a4 },
        { name: 'Ilim', id: 5, ava: a5 },
        { name: 'Azamat', id: 6, ava: a6 },
        { name: 'Janbo', id: 7, ava: a1 },
    ],
    messages: [
        { id: 1, message: 'Hey' },
        { id: 2, message: 'Bye' },
        { id: 3, message: 'How\'re u doing?' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'How\'re u doing?' },
    ],
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessagesBody
            return {
                ...state,
                messages: [...state.messages, { id: state.messages.length + 1, message: body, }]
            }
        default:
            return state
    }

}

export const sendMessageActionCreator = (newMessagesBody) => {
    return {
        type: SEND_MESSAGE,
        newMessagesBody
    }
}

export default dialogsReducer