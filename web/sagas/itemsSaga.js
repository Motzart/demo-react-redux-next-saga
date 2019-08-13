import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE,
} from '../constants/actionTypes';

function* fetchItems(action) {
  const perPage = action.data ? action.data.perPage : 20;
  const currentPage = action.data ? action.data.currentPage : 0;

  const url = `http://localhost:8081/api/v1/items?per-page=${perPage}&page=${currentPage}`;

  try {
    const { data: items } = yield call([axios, 'get'], url);
    yield put({ type: FETCH_ITEMS_SUCCESS, data: items });
  } catch (error) {
    yield put({ type: FETCH_ITEMS_FAILURE });
  }
}

export default function* () {
  yield takeLatest('FETCH_ITEMS_REQUEST', fetchItems);
}
