import actionTypes from '../constants/actionTypes';

const initialState = { data: [], loading: false, error: '' };

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_ITEMS_LOADING: {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }
    case actionTypes.LOAD_ITEMS_SUCCESS: {
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    }
    case actionTypes.LOAD_ITEMS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    default: {
      return state;
    }
  }
}
