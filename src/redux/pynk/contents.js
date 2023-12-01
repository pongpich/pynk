import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { API } from "aws-amplify";

/* ACTION Section */

export const types = {
  GET_PRODUCTS: "GET_PRODUCTS",
  GET_PRODUCTS_SUCCESS: "GET_PRODUCTS_SUCCESS",
  GET_CONTENTS: "GET_CONTENTS",
  GET_CONTENTS_SUCCESS: "GET_CONTENTS_SUCCESS",
  GET_PAGE: "GET_PAGE",
  GET_PAGE: "GET_PAGE",
  GET_PAGE_SUCCESS: "GET_PAGE_SUCCESS",
  CLEAR_GET_PAGE: "CLEAR_GET_PAGE",
  CLEAR_GET_PAGE_SUCCESS: "CLEAR_GET_PAGE_SUCCESS",
};

export const getPage = (data) => ({
  type: types.GET_PAGE,
  payload: { data },
});

export const clearGetPage = () => ({
  type: types.CLEAR_GET_PAGE,
  payload: {},
});

export const getProducts = () => ({
  type: types.GET_PRODUCTS,
});

export const getContents = () => ({
  type: types.GET_CONTENTS,
});

const getProductsSagaAsync = async () => {
  try {
    const apiResult = await API.get("pynk", "/getProducts", {
      queryStringParameters: {},
    });
    return apiResult;
  } catch (error) {
    return { error, messsage: error.message };
  }
};

const getContentsSagaAsync = async () => {
  try {
    const apiResult = await API.get("pynk", "/getContents", {
      queryStringParameters: {},
    });
    return apiResult;
  } catch (error) {
    return { error, messsage: error.message };
  }
};

function* getProductsSaga({}) {
  try {
    const apiResult = yield call(getProductsSagaAsync);
    yield put({
      type: types.GET_PRODUCTS_SUCCESS,
      payload: apiResult.results,
    });
  } catch (error) {
    console.log("error from getProductsSaga :", error);
  }
}

function* getContentsSaga({}) {
  try {
    const apiResult = yield call(getContentsSagaAsync);
    yield put({
      type: types.GET_CONTENTS_SUCCESS,
      payload: apiResult.results,
    });
  } catch (error) {
    console.log("error from getContentsSaga :", error);
  }
}

export function* watchGetProductsSaga() {
  yield takeEvery(types.GET_CONTENTS, getProductsSaga);
}

export function* watchGetContentsSaga() {
  yield takeEvery(types.GET_CONTENTS, getContentsSaga);
}
export function* saga() {
  yield all([fork(watchGetProductsSaga), fork(watchGetContentsSaga)]);
}

const INIT_STATE = {
  products_pynk: null,
  contents_pynk: null,
  status_products_pynk: "default",
  status_contents_pynk: "default",
  dataPage: null,
  status_data_page: "default",
};

export function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case types.GET_PRODUCTS:
      return {
        ...state,
        status_products_pynk: "loading",
      };
    case types.GET_CONTENTS:
      return {
        ...state,
        status_contents_pynk: "loading",
      };
    case types.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products_pynk: action.payload.products,
        status_products_pynk: "success",
      };
    case types.GET_CONTENTS_SUCCESS:
      return {
        ...state,
        contents_pynk: action.payload.contents,
        status_contents_pynk: "success",
      };
    case types.GET_PAGE:
      return {
        ...state,
        dataPage: action.payload.data,
        status_data_page: "success",
      };
    case types.CLEAR_GET_PAGE:
      return {
        ...state,
        status_data_page: "default",
      };
    default:
      return { ...state };
  }
}
