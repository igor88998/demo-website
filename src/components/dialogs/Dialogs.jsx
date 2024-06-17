import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './dialogItem/DialogItem';
import Message from './message/Message';
import { Navigate } from 'react-router-dom';
import DialogsReduxForm from './dialogsForm/DialogsForm';

const Dialogs = ({ messagesPage, sendMessage, isAuth }) => {

    let dialogsElements = messagesPage.dialogsData.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />)
    let messagesElements = messagesPage.messagesData.map(message => {

        const isEven = message.id % 2 === 0

        const className = (isEven ? classes.left : classes.right)

        const avatar = (isEven ? '/UserAvatar.png' : '/myAvatar.png')

        const associatedDialog = messagesPage.dialogsData.find(dialog => dialog.id === message.id)

        return (
            <Message
                key={message.id}
                message={message.message}
                id={message.id}
                className={className}
                avatar={avatar}
                name={associatedDialog.name}
            />
        )
    })

    const addNewMessage = (values) => {
        sendMessage(values.newMessageText)
    }

    if (!isAuth) {
        return <Navigate to="/login" replace />;
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsHeading}>DIALOGS</div>

            <div className={classes.dialogsContainer}>
                <div className={classes.dialogsItems}>
                    {dialogsElements}
                </div>

                <div className={classes.messages}>
                    {messagesElements}
                    <DialogsReduxForm onSubmit={addNewMessage} />
                </div>
            </div>

        </div>
    );
};

export default Dialogs;