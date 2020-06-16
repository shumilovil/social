import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, updateStatus, getStatus } from '../../redux/profile-reducer'
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
    };
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
    if (!userId) {
      this.props.history.push('/login');
    }
  }

  render() {
    return (
      <Profile profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus} />
    )
  }
};

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
  }
}

export default compose(
  connect(mapStateToProps, { getUserProfile, updateStatus, getStatus }),
  withRouter
)(ProfileContainer);