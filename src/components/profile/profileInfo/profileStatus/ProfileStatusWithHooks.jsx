import React, { useEffect, useState } from 'react';
import classes from '../ProfileInfo.module.css'

const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }


    return (
        <>
            <div>
                <img className={classes.myAvatar} src={props.profile.photos.large} alt='' />
            </div>
            <div className={classes.userInfo}>
                <div className={classes.userName}>{props.profile.fullName}</div>
                <div className={classes.editMode}>
                    {!editMode &&
                        <div className={classes.activateMode}>
                            <span onClick={activateEditMode}>{props.status}</span>
                        </div>
                    }
                    {editMode &&
                        <div className={classes.deactivateMode}>
                            <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
                        </div>
                    }
                </div>
                <p>About me: {props.profile.aboutMe}</p>
                <p>Instagram: {props.profile.contacts.instagram}</p>
                <p>Looking for a job: {props.profile.lookingForAJobDescription}</p>
            </div>
        </>
    );
};

export default ProfileStatusWithHooks;