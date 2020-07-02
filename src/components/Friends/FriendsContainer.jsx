import { connect } from 'react-redux';
import Friends from './Friends';
import { getFriends } from '../../redux/friends-reducer';

const mapStateToProps = (state) => {
  return {
    friends: state.friends
  }
}

const FriendsContainer = connect(mapStateToProps, {getFriends})(Friends)

export default FriendsContainer;

