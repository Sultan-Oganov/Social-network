import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { Redirect } from 'react-router-dom'
import DialogsReduxForm from './DialogsForm/DialogsForm'

const Dialogs = (props) => {

    let state = props.dialogsPage
    let dialogsElements = state.dialogs.map(dialog => <DialogItem key={dialog.id} ava={dialog.ava} name={dialog.name} id={dialog.id} />)
    let messagesElements = state.messages.map(message => <Message key={message.id} id={message.id} message={message.message} />)

    const addNewMessage = (formData) => {
        props.sendMessage(formData.newMessageBody);
    }

    if (!props.isAuth) return <Redirect to="/login" />

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                {messagesElements}
            </div>
            <DialogsReduxForm onSubmit={addNewMessage} />
        </div >
    )
}

export default Dialogs