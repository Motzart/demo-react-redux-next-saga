import actionTypes from '../constants/actionTypes';

export const loadItems = () => (dispatch) => { dispatch({ type: actionTypes.LOAD_ITEMS_LOADING }); };
export const loadItem = () => (dispatch) => { dispatch({ type: actionTypes.LOAD_ITEM_LOADING }); };
