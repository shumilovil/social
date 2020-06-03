import { connect } from 'react-redux';
import Friends from './Friends';

const mapStateToProps = (state) => {
  return {
    sidebarPage: state.sidebarPage
  }
}

const FriendsContainer = connect(mapStateToProps)(Friends)

export default FriendsContainer;