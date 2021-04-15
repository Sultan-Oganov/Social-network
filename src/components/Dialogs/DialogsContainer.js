import React from 'react'
import { sendMessageActionCreator, updateNewMessageBodyActionCreator } from '../../redux/reducers/dialogs-reducer'
import Dialogs from './Dialogs'


const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage

    let onSendMessageCliclk = () => {
        props.store.dispatch(sendMessageActionCreator())
    }

    let onNewMessageChange = (body) => {
        let action = updateNewMessageBodyActionCreator(body)
        props.store.dispatch(action)
    }

    return (
        <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageCliclk}
            dialogsPage={state}
        />
    )
}

export default DialogsContainer