import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/state'

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
        props.dispatch(addMessageActionCreator())
    }

    let updateNewMessageText = () => {
        let text = newMessage.current.value
        let action = updateNewMessageTextActionCreator(text)
        props.dispatch(action)
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