import React from 'react'
import { connect } from 'react-redux';
import Navbar from './Navbar';

const mapStateToProps = (state, ownProps) => {

    return {
        friends: state.sidebar.friends
    }
}

const NavbarContainer = connect(mapStateToProps, null)(Navbar)

export default NavbarContainer;