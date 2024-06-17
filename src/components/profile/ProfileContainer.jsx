import React from 'react'
import Profile from './Profile';
import { connect } from 'react-redux';
import { toggleIsFetching, getUserProfile, getUserStatus, updateUserStatus } from '../../redux/profileReducer';
import { useParams } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

export function withRouter(Children){
    return(props)=>{
        const match = {params: useParams()};
        return <Children {...props}  match={match}/>
    }
}

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = this.props.authorizedUserId
        }

        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth,
        isFetching: state.usersPage.isFetching,
    }
}

export default compose(connect(mapStateToProps, { getUserProfile, toggleIsFetching, getUserStatus, updateUserStatus }), withRouter, withAuthRedirect)(ProfileContainer)