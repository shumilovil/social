import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi', likesCount: 0 },
        { id: 2, message: 'Bye', likesCount: 23 }
      ],
      newPostText: 'Go go go'
    },
    dialogsPage: {
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
    },
    sidebarPage: {
      friends: [
        { id: 1, name: 'Sham1' },
        { id: 2, name: 'Sham2' },
        { id: 3, name: 'Sham3' }
      ]
    }
  },
  _callSubscriber() {
    console.log('State is changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }  
};

export default store;