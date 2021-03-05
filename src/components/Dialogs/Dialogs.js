import React from 'react'
import classes from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

function Dialogs(props) {

    // let dialogs = [
    //     { name: 'Sultan', id: 1 },
    //     { name: 'Adam', id: 2 },
    //     { name: 'Usman', id: 3 },
    //     { name: 'Emir', id: 4 },
    //     { name: 'Ilim', id: 5 },
    //     { name: 'Azamat', id: 6 },
    //     { name: 'Kaira', id: 7 },
    // ]

    // let messages = [
    //     { id: 1, message: 'Hey' },
    //     { id: 2, message: 'Bye' },
    //     { id: 3, message: 'How\'re u doing?' },
    //     { id: 4, message: 'Yo' },
    //     { id: 5, message: 'How\'re u doing?' },
    // ]

    let dialogsElements = props.dialogs.map(dialog => {
        return (
            <DialogItem name={dialog.name} id={dialog.id} />
        )
    })

    let messagesElements = props.messages.map(message => {
        return (
            <Message id={message.id} message={message.message} />
        )
    })

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs