import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Mesage';
import { Field } from 'redux-form';
import { reduxForm } from 'redux-form';
import { Textarea } from '../Common/FormControls/FormControl';
import { maxLengthCreator, required } from '../../utils/validators/validator';


const maxLength50 = maxLengthCreator(50);

const Dialogs = (props) => {

  const state = props.dialogsPage;

  const dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />)
  const messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />)

  const onSendMessageClick = (formData) => {
    props.sendMessage(formData.newMessageBody);    
  }
  

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
      </div>
      <AddMessageFormRedux onSubmit={onSendMessageClick} />
    </div>
  );
};


const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} >
      <div>
        <Field component={Textarea}
          name="newMessageBody"
          placeholder="Enter your message"
          validate={[required, maxLength50]} />
      </div>
      <div><button>Send</button></div>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm);

export default Dialogs;