import { addPostActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from 'react-redux';
import { reset } from "redux-form";

const mapStateToProps = (state) => {
  

  return {
    posts: state.profilePage.posts,
    ownersPhoto: state.profilePage.profile.photos.large
  };
};

const mapDispatchToProps = (dispatch) => {
  return {    
    addPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText))
    },
    reset: (myForm) => {
      dispatch(reset(myForm))
    }
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

