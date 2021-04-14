const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessagesBody
            state.newMessagesBody = ''
            state.messages.push({
                id: state.messages.length + 1,
                message: body,
            })
            return state
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessagesBody = action.body
            return state
        default:
            return state
    }

}

export const addMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE,
    }
}

export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: text,
    }
}

export default dialogsReducer