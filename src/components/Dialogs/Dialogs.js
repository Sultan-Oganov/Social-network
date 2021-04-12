import React from 'react'
import classes from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

function Dialogs(props) {

    let dialogsElements = props.dialogsPage.dialogs.map(dialog => {
        return (
            <DialogItem ava={dialog.ava} name={dialog.name} id={dialog.id} />
        )
    })

    let messagesElements = props.dialogsPage.messages.map(message => {
        return (
            <Message id={message.id} message={message.message} />
        )
    })

    let newMessage = React.createRef()

    let addMessage = () => {
        props.dispatch({ type: 'ADD-MESSAGE' })
    }

    let updateNewMessageText = () => {
        let text = newMessage.current.value
        props.dispatch({ type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text })
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                {messagesElements}
            </div>
            <button onClick={addMessage}>Sent Message</button>
            <textarea onChange={updateNewMessageText} ref={newMessage} value={props.dialogsPage.newMessagesText}></textarea>

        </div>
    )
}

export default Dialogs