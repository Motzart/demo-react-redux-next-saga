import {
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE,
} from '../constants/actionTypes';

const initialState = { data: [], loading: false, error: '' };

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_ITEMS_REQUEST: {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }
    case FETCH_ITEMS_SUCCESS: {
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    }
    case FETCH_ITEMS_FAILURE: {
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
