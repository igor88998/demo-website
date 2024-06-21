import React, { useEffect, useState } from 'react';
import classes from '../../ProfileInfo.module.css'

const ProfileStatus = ({ status, updateUserStatus }) => {

    const [editMode, setEditMode] = useState(false)
    const [profileStatus, setProfileStatus] = useState(status)

    useEffect(() => {
        setProfileStatus(status)
    }, [status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        updateUserStatus(profileStatus)
    }

    const onStatusChange = (e) => {
        setProfileStatus(e.currentTarget.value)
    }

    return (
        <div className={classes.editMode}>
            {!editMode &&
                <div className={classes.activateMode}>
                    Status: <span onClick={activateEditMode}>{status}</span>
                </div>
            }
            {editMode &&
                <div className={classes.deactivateMode}>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={profileStatus} />
                </div>
            }
        </div>
    );
};

export default ProfileStatus;