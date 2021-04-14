import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/reducers/dialogs-reducer'


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


    let sendMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    let updateNewMessageText = (event) => {
        let text = event.target.value
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
            <button onClick={sendMessage}>Sent Message</button>
            <textarea onChange={updateNewMessageText} placeholder="Enter you're message" value={props.dialogsPage.newMessagesBody}></textarea>

        </div>
    )
}

export default Dialogs