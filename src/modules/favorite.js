import { getLocalData } from '../utils/localStorage';

const PUSH_FAVORITE = 'favorite/GET_FAVORITE';
const REMOVE_FAVORITE = 'favorite/REMOVE_FAVORITE';

const pushFavorite = input => ({
  type: PUSH_FAVORITE,
  input
});

const removeFavorite = input => ({
  type: REMOVE_FAVORITE,
  input
});

const initialState = {
  list: getLocalData({ storageKey: 'favorite' })
};

function favorite(state = initialState, action) {
  switch (action.type) {
    case PUSH_FAVORITE:
      return {
        ...state,
        list: [...state.list, action.input]
      };
    case REMOVE_FAVORITE:
      state.list.splice(state.list.findIndex(item => item.fullName === action.input), 1)

      return {
        ...state
      };
    default:
      return state;
  }
}

export { pushFavorite, removeFavorite };
export default favorite;