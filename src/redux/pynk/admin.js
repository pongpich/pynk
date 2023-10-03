import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { API } from "aws-amplify";

/* ACTION Section */

export const types = {
  GET_PRODUCT_DETAIL: "GET_PRODUCT_DETAIL",
  GET_PRODUCT_DETAIL_SUCCESS: "GET_PRODUCT_DETAIL_SUCCESS",
  GET_PRODUCT_DETAIL_FAIL: "GET_PRODUCT_DETAIL_FAIL",
};


export const getProductDetail = (sku) => ({
  type: types.GET_PRODUCT_DETAIL,
  payload: {
    sku
  }
});

const getProductDetailSagaAsync = async (
  sku
) => {
  try {
    const apiResult = await API.get("pynk", "/getProductDetail", {
      queryStringParameters: {
        sku
      },
    });
    return apiResult;
  } catch (error) {
    return { error, messsage: error.message };
  }
};

function* getProductDetailSaga({ payload }) {
  const {
    sku
  } = payload

  try {
    const apiResult = yield call(
      getProductDetailSagaAsync,
      sku
    );

    if (apiResult.results.message === "success") {
      yield put({
        type: types.GET_PRODUCT_DETAIL_SUCCESS,
        payload: apiResult.results.product
      })
    } else if (apiResult.results.message === "fail") {
      yield put({
        type: types.GET_PRODUCT_DETAIL_FAIL
      })
    }

  } catch (error) {
    console.log("error from getProductDetailSaga :", error);
  }
}

export function* watchGetProductDetailSaga() {
  yield takeEvery(types.GET_PRODUCT_DETAIL, getProductDetailSaga);
}

export function* saga() {
  yield all([
    fork(watchGetProductDetailSaga),
  ]);
}

const INIT_STATE = {
  product_detail_zort: null,
  status_get_product_detail_zort: "default"
};

export function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case types.GET_PRODUCT_DETAIL:
      return {
        ...state,
        status_get_product_detail_zort: "loading",
      };
    case types.GET_PRODUCT_DETAIL_SUCCESS:
      return {
        ...state,
        product_detail_zort: action.payload,
        status_get_product_detail_zort: "success",
      };
    case types.GET_PRODUCT_DETAIL_FAIL:
      return {
        ...state,
        status_get_product_detail_zort: "fail",
      };
    default:
      return { ...state };
  }
}
