import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, updateStatus, getStatus, savePhoto, saveProfile } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { follow, unfollow } from '../../redux/users-reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {

  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
    };
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);    
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.userId !== this.props.match.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <Profile profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        savePhoto={this.props.savePhoto}
        isOwner={!this.props.match.params.userId}
        saveProfile={this.props.saveProfile}        
        followed={this.props.followed}
        followingInProgress={this.props.followingInProgress}
        follow={this.props.follow}
        unfollow={this.props.unfollow}/>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,   
    followed: state.profilePage.followed,
    followingInProgress: state.usersPage.followingInProgress

  }
}

export default compose(
  connect(mapStateToProps, { getUserProfile, updateStatus, getStatus, savePhoto, saveProfile, follow, unfollow }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);


