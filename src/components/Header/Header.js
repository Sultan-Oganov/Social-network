import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = ({ isAuth, login, logout }) => {
    return (
        <header className={classes.header}>
            <img src="https://theteamw.com/img/logo/disney_small.jpg"></img>

            {
                isAuth
                    ? <div className={classes.loginBlock}>{login} - <button onClick={logout}>Logout</button></div>
                    : <div className={classes.loginBlock}><NavLink to="/login">Login</NavLink></div>

            }
        </header>
    );
}

export default Header;