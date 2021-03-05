import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from './Sidebar.module.css';

const Navbar = () => {
    return (
        <nav className={classes.sidebar}>
            <ul>
                <li><NavLink to="/profile" activeClassName={classes.activeLink} className={`${classes.item} ${classes.active}`}>Profile</NavLink></li>
                <li><NavLink to="/dialogs" activeClassName={classes.activeLink} className={classes.item}>Messages</NavLink></li>
                <li><NavLink to="/news" activeClassName={classes.activeLink} className={classes.item}>News</NavLink></li>
                <li><NavLink to="/music" activeClassName={classes.activeLink} className={classes.item}>Music</NavLink></li>
                <li><NavLink to="/settings" activeClassName={classes.activeLink} className={classes.item}>Settings</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;