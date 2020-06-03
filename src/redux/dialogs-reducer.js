const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const initialState = {
  dialogs: [
    { id: 1, name: 'Shum1' },
    { id: 2, name: 'Shum2' },
    { id: 3, name: 'Shum3' }
  ],
  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How are you' },
    { id: 3, message: 'Bye' }
  ],
  newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body
      };
    case SEND_MESSAGE:
      const body = state.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }],
        newMessageBody: ''
      };
    default:
      return state;
  }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
  ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })


export default dialogsReducer;