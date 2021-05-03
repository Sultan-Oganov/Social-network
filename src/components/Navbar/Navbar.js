import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = (props) => {
    let friends = props.friends.map((friend, id) => {
        return (

            <NavLink key={id} to="">
                <img src={friend.img} alt="" />
                {friend.name}
            </NavLink>

        )
    })
    return (
        <nav className={classes.navbar} >
            <ul>
                <li><NavLink exact activeClassName={classes.activeLink} className={classes.item} to="/profile">Profile</NavLink></li>
                <li><NavLink exact activeClassName={classes.activeLink} className={classes.item} to="/dialogs">Messages</NavLink></li>
                <li><NavLink exact activeClassName={classes.activeLink} className={classes.item} to="/news">News</NavLink></li>
                <li><NavLink exact activeClassName={classes.activeLink} className={classes.item} to="/music">Music</NavLink></li>

                <li><NavLink exact activeClassName={classes.activeLink} className={classes.item} to="/users">Find users</NavLink></li>

                <li><NavLink exact activeClassName={classes.activeLink} className={classes.item} to="/settings">Settings</NavLink></li>
                <h3>Friends</h3>
                <div className={classes.friends}>
                    {friends}
                </div>
            </ul>
        </nav >
    )
}

export default Navbar;