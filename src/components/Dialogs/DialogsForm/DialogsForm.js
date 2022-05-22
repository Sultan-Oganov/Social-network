import React from 'react';
import { Field } from 'redux-form';
import { reduxForm } from 'redux-form';
import { Textarea } from '../../common/FormsControl/FormsControl';
import { required, maxLengthCreator } from '../../../utils/validators/index';

const maxLength50 = maxLengthCreator(50);

const DialogsForm = ({ handleSubmit }) => {

    return (
        <form onSubmit={handleSubmit}>
            <button>Sent Message</button>
            <Field
                component={Textarea}
                name='newMessageBody'
                placeholder="Enter you're message"
                validate={[required, maxLength50]}
            />
        </form>
    );
};

const DialogsReduxForm = reduxForm({ form: 'DialogsAddMessageForm' })(DialogsForm);

export default DialogsReduxForm;