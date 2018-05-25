import { FETCH_CHEESES_REQUEST, FETCH_CHEESES_SUCCESS, FETCH_CHEESES_ERROR} from '../actions';

const initialState = {
  cheeses: [],
  loading: false,
  error: null
};

const cheeseReducer = (state = initialState, action) => {
  switch(action.type) {
  case FETCH_CHEESES_REQUEST:
    return {
      ...state,
      loading: true
    };

  case FETCH_CHEESES_SUCCESS:
    return {
      ...state,
      loading: false,
      error: null,
      cheeses: action.cheeses
    };

  case FETCH_CHEESES_ERROR:
    return {
      ...state,
      loading: false,
      error: action.error
    };

  default:
    return state;
  }
};

export default cheeseReducer;