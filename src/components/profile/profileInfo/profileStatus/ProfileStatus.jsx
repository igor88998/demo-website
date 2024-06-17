import React from 'react';
import classes from '../ProfileInfo.module.css'

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <>
                <div>
                    <img className={classes.myAvatar} src={this.props.profile.photos.large} alt='' />
                </div>
                <div className={classes.userInfo}>
                    <div className={classes.userName}>{this.props.profile.fullName}</div>
                    <div className={classes.editMode}>
                        {!this.state.editMode &&
                            <div className={classes.activateMode}>
                                <span onClick={this.activateEditMode}>{this.props.status}</span>
                            </div>
                        }
                        {this.state.editMode &&
                            <div className={classes.deactivateMode}>
                                <input onChange={this.onStatusChange} className={classes.deactivateModeInput} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} />
                            </div>
                        }
                    </div>
                    <p>About me: {this.props.profile.aboutMe}</p>
                    <p>Instagram: {this.props.profile.contacts.instagram}</p>
                    <p>Looking for a job: {this.props.profile.lookingForAJobDescription}</p>
                </div>
            </>
        );
    }
};

export default ProfileStatus;