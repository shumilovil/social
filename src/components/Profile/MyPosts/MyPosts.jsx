import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validator';
import { Textarea } from '../../Common/FormControls/FormControl';

const maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {

  const postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id} />);

  const onAddPost = (formData) => {
    props.addPost(formData.newPostText);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <MyPostsFormRedux onSubmit={onAddPost} />
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
};


const myPostsForm = React.memo(props => {
  return (
    <form onSubmit={props.handleSubmit} >
      <div>
        <Field component={Textarea}
          name="newPostText"
          placeholder={"Post message"}
          validate={[required, maxLength10]} />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
})


const MyPostsFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(myPostsForm)

export default MyPosts;