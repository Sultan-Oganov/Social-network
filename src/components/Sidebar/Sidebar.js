import React from 'react'
import classes from './Sidebar.module.css';

const Navbar = () => {
    return (
        <nav className={classes.sidebar}>
            <ul>
                <li><a className={`${classes.item} ${classes.active}`} href="#">Profile</a></li>
                <li><a className={classes.item} href="#">Messages</a></li>
                <li><a className={classes.item} href="#">News</a></li>
                <li><a className={classes.item} href="#">Music</a></li>
                <li><a className={classes.item} href="#">Settings</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;