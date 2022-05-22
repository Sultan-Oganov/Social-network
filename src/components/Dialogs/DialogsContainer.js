import React from 'react'
import { connect } from 'react-redux'
import { sendMessageActionCreator } from '../../redux/reducers/dialogs-reducer'
import Dialogs from './Dialogs'
import { Redirect } from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'


const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessagesBody) => {
            dispatch(sendMessageActionCreator(newMessagesBody))
        }
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)