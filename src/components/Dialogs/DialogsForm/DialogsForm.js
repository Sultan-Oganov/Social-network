import React from 'react';
import { Field } from 'redux-form';
import { reduxForm } from 'redux-form';

const DialogsForm = ({ handleSubmit }) => {

    return (
        <form onSubmit={handleSubmit}>
            <button>Sent Message</button>
            <Field component='textarea' name='newMessageBody' placeholder="Enter you're message" />
        </form>
    );
};

const DialogsReduxForm = reduxForm({ form: 'DialogsAddMessageForm' })(DialogsForm);

export default DialogsReduxForm;