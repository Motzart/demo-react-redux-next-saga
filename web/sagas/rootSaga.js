import { put, take, all, call } from 'redux-saga/effects';
import axios from 'axios';

import {
  fetchItemsRequest,
  fetchItemsSuccess,
  fetchItemsFail,
} from '../reducers/items';

function* fetchItems(per_page) {
  const url = `http://localhost:8081/api/v1/items?per-page=${per_page}`;
  try {
    const { data: items } = yield call([axios, 'get'], url);
    yield put(fetchItemsSuccess(items));
  } catch (e) {
    yield put(fetchItemsFail(e.message));
  }
}

function* watchItemsSaga() {
  yield take(fetchItemsRequest);
  const per_page = 20;
  yield call(fetchItems, per_page);
}

export default function* rootSaga() {
  yield all([
    watchItemsSaga(),
  ]);
}
