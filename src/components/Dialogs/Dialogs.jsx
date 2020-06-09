import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Mesage';
import { Redirect } from 'react-router-dom';

const Dialogs = (props) => {  

  const state = props.dialogsPage;

  const dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />)
  const messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />)
  const newMessageBody = state.newMessageBody;

  const onSendMessageClick = () => {
    props.sendMessage();
  }
  
  const onNewMessageChange = (e) => {
    const body = e.target.value;
    props.updateNewMessageBody(body);
  }

  if (!props.auth) return <Redirect to={'/login'} />

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <textarea placeholder='Enter your message'
                    onChange={onNewMessageChange}
                    value={newMessageBody} /> 
        </div>
        <div>
          <button onClick={onSendMessageClick}>Send</button>          
        </div>
      </div>
    </div>
  );
};

export default Dialogs;