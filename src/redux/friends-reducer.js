import { userAPI } from "../api/api";

const SET_MY_FRIENDS = 'SET_MY_FRIENDS';

const initialState = {
  friendsList: []
};

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MY_FRIENDS:
      return {
        ...state,
        friendsList: [...action.friendsList]
      }

    default:
      return state;
  };
};

export const setFriends = (friendsList) => ({ type: SET_MY_FRIENDS, friendsList });

export const getFriends = () => async (dispatch) => {
  const response = await userAPI.getFriends();
  dispatch(setFriends(response))
}

export default friendsReducer;