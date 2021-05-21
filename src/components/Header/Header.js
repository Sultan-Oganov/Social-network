import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src="https://theteamw.com/img/logo/disney_small.jpg"></img>

            {
                props.isAuth ? props.login
                    : <div className={classes.loginBlock}><NavLink to="/login">Login</NavLink></div>

            }
        </header>
    );
}

export default Header;