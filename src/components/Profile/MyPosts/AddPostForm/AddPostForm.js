import React from 'react';
import { Field } from 'redux-form';
import { reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../../utils/validators';
import { Textarea } from '../../../common/FormsControl/FormsControl';

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    placeholder="Enter post text"
                    name="newPostText"
                    validate={[required, maxLength10]}
                />
            </div>
            <button>Add post</button>
        </form>
    );
};
const AddNewPostReduxForm = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm);
export default AddNewPostReduxForm;