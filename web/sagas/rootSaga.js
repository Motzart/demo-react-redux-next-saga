import { put, takeLatest, all } from 'redux-saga/effects';
import actionTypes from '../constants/actionTypes';
import Api from '../api/api';

async function fetchAsync(func) {
  const response = await func();
  if (response.ok) {
    return await response.json();
  }
  throw new Error('Unexpected error!!!');
}

function* fetchItems() {
  try {
    const items = yield fetchAsync(Api.getItems);
    yield put({ type: actionTypes.LOAD_ITEMS_SUCCESS, data: items });
  } catch (e) {
    yield put({ type: actionTypes.LOAD_ITEMS_FAILURE, error: e.message });
  }
}

function* itemsSaga() {
  yield takeLatest(actionTypes.LOAD_ITEMS_LOADING, fetchItems);
}

export default function* rootSaga() {
  yield all([
    itemsSaga(),
  ]);
}
