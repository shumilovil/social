import React from 'react';
import { connect } from 'react-redux';
import { requestUsers, unfollow, follow } from '../../redux/users-reducer';
import Preloader from '../Common/Preloader/Preloader';
import Users from './Users';
import { compose } from 'redux';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress, getUsers } from '../../redux/users-selectors';

class UsersContainer extends React.Component {
  componentDidMount() {
    const {currentPage, pageSize} = this.props;
    this.props.requestUsers(currentPage, pageSize)
  }

  onPageChanged = (pageNumber) => { 
    const {pageSize} = this.props;   
    this.props.requestUsers(pageNumber, pageSize);
  }

  render() {
    return (
      <div>
        {this.props.isFetching ? <Preloader /> : null}
        <Users totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          users={this.props.users}
          followingInProgress={this.props.followingInProgress}
        />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}

export default compose(
  connect(mapStateToProps, { follow, unfollow, requestUsers }),
  withAuthRedirect
)(UsersContainer);