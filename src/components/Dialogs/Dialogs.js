import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {

    let state = props.dialogsPage
    let dialogsElements = state.dialogs.map(dialog => <DialogItem ava={dialog.ava} name={dialog.name} id={dialog.id} />)
    let messagesElements = state.messages.map(message => <Message id={message.id} message={message.message} />)
    let newMessageBody = state.newMessagesBody



    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let updateNewMessageText = (event) => {
        let body = event.target.value
        props.updateNewMessageBody(body)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                {messagesElements}
            </div>
            <button onClick={onSendMessageClick}>Sent Message</button>
            <textarea onChange={updateNewMessageText} placeholder="Enter you're message" value={newMessageBody}></textarea>

        </div>
    )
}

export default Dialogs