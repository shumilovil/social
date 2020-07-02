import React from 'react';
import { connect } from 'react-redux';
import { requestUsers, unfollow, follow } from '../../redux/users-reducer';
import Preloader from '../Common/Preloader/Preloader';
import Users from './Users';
import { compose } from 'redux';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress, getUsers } from '../../redux/users-selectors';
import { withRouter } from 'react-router-dom';

class UsersContainer extends React.Component {
  componentDidMount() {
    const {currentPage, pageSize} = this.props;
    this.props.requestUsers(currentPage, pageSize)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.pageNumberParam !== this.props.match.params.pageNumberParam) {
      let pageNumberParam = this.props.match.params.pageNumberParam;
      if (!pageNumberParam) {
        pageNumberParam = this.props.currentPage;
      };
      this.props.requestUsers(pageNumberParam, this.props.pageSize);
    }
  } 

  render() {
    return (
      <div>
        {this.props.isFetching ? <Preloader /> : null}
        <Users totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}          
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
  withAuthRedirect,
  withRouter
)(UsersContainer);

