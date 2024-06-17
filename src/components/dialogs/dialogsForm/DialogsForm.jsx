import React from 'react';
import classes from '../Dialogs.module.css'
import { Field, reduxForm } from 'redux-form';
import { TextArea } from '../../common/formsControls/FormsControls';

const DialogsForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className={classes.messageForm}>
                <div>
                    <Field className={classes.messageText} placeholder='Enter text' name='newMessageText' component={TextArea} />
                </div>
                <div>
                    <button className={classes.sendMessageButton}>Send message</button>
                </div>
            </div>
        </form>
    );
};

const DialogsReduxForm = reduxForm({
    form: 'dialogsForm'
})(DialogsForm)

export default DialogsReduxForm;