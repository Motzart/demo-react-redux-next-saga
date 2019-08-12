import { createActions, handleActions } from 'redux-actions';

const defaultState = { error: null, data: null, isLoading: false };

export const { fetchItemsRequest, fetchItemsSuccess, fetchItemsFail } = createActions({
  FETCH_ITEMS_REQUEST: date => ({ date }),
  FETCH_ITEMS_SUCCESS: data => ({ data }),
  FETCH_ITEMS_FAILURE: error => ({ error }),
});

export const reducer = handleActions(
  {
    [fetchItemsRequest]: state => ({ ...state, error: null, isLoading: true }),
    [fetchItemsSuccess]: (state, { payload: { data } }) => ({
      error: null,
      isLoading: false,
      data: data,
    }),
    [fetchItemsFail]: (state, { payload: { error } }) => ({ error, isLoading: false, data: [] }),
  },
  defaultState,
);

