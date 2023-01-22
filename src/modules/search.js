
const CHANGE_KEYWORD = 'search/SET_KEYWORD';
const CHANGE_PAGE = 'search/SET_PAGE';

const changeKeyword = input => ({
  type: CHANGE_KEYWORD,
  input
});

const changePage = input => ({
  type: CHANGE_PAGE,
  input
});

const initialState = {
  keyword: '',
  page: 1
};

function search(state = initialState, action) {
  switch (action.type) {
    case CHANGE_KEYWORD:
      return {
        keyword: action.input,
        page: 1
      };
    case CHANGE_PAGE:
      return {
        ...state,
        page: action.input
      };
    default:
      return state;
  }
}

export { changeKeyword, changePage  };
export default search;