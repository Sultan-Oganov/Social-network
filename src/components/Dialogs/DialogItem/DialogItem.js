import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './DialogItem.module.css'

function DialogItem(props) {

    let path = "/dialogs/" + props.id
    return (
        <div className={classes.dialog}>
            <NavLink to={path} activeClassName={classes.activeUser}>
                {props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem