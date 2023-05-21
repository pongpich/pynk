import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { API } from "aws-amplify";

/* ACTION Section */

export const types = {
  GET_SUBSCRIPTION_PRODUCTS: "GET_SUBSCRIPTION_PRODUCTS",
  GET_SUBSCRIPTION_PRODUCTS_SUCCESS: "GET_SUBSCRIPTION_PRODUCTS_SUCCESS",
  GET_REGISTER_LOG: "GET_REGISTER_LOG",
  GET_REGISTER_LOG_SUCCESS: "GET_REGISTER_LOG_SUCCESS",
  GET_ALL_MEMBER_STAY_FIT: "GET_ALL_MEMBER_STAY_FIT",
  GET_ALL_MEMBER_STAY_FIT_SUCCESS: "GET_ALL_MEMBER_STAY_FIT_SUCCESS",
  GET_CHECK_DISPAY_NAME: "GET_CHECK_DISPAY_NAME",
  GET_CHECK_DISPAY_NAME_FALE: "GET_CHECK_DISPAY_NAME_FALE",
  GET_CHECK_DISPAY_NAME_SUCCESS: "GET_CHECK_DISPAY_NAME_SUCCESS",
  GET_MEMBER_INFO: "GET_MEMBER_INFO",
  GET_MEMBER_INFO_SUCCESS: "GET_MEMBER_INFO_SUCCESS",
}

export const getAllMemberStayFit = () => ({
  type: types.GET_ALL_MEMBER_STAY_FIT
})

export const getSubscriptionProducts = (user_id) => ({
  type: types.GET_SUBSCRIPTION_PRODUCTS,
  payload: {
    user_id
  }
})
export const getMemberInfo = (user_id) => ({
  type: types.GET_MEMBER_INFO,
  payload: {
    user_id
  }
})

export const getRegister_log = (user_id) => ({
  type: types.GET_REGISTER_LOG,
  payload: {
    user_id
  }
})
export const getCheckDisplayName = (display_name) => ({
  type: types.GET_CHECK_DISPAY_NAME,
  payload: {
    display_name
  }
})

/* END OF ACTION Section */

/* SAGA Section */

const getSubscriptionProductsSagaAsync = async (
  user_id
) => {
  try {
    const apiResult = await API.get("bebe", "/getSubscriptionProducts", {
      queryStringParameters: {
        user_id
      }
    });
    return apiResult
  } catch (error) {
    return { error, messsage: error.message };
  }
}
const getMemberInfoSagaAsync = async (
  user_id
) => {
  try {
    const apiResult = await API.get("bebe", "/getMemberInfo", {
      queryStringParameters: {
        user_id
      }
    });
    return apiResult
  } catch (error) {
    return { error, messsage: error.message };
  }
}


const getRegister_logSagaAsync = async (
  user_id
) => {
  try {
    const apiResult = await API.get("bebe", "/getRegister_log", {
      queryStringParameters: {
        user_id
      }
    });
    return apiResult
  } catch (error) {
    return { error, messsage: error.message };
  }
}

const getCheckDisplayNameSagaAsync = async (
  display_name
) => {
  try {
    const apiResult = await API.get("bebe", "/checkDisplayName", {
      queryStringParameters: {
        display_name
      }
    });
    return apiResult
  } catch (error) {
    return { error, messsage: error.message };
  }
}

const getAllMemberStayFitSagaAsync = async (
  
) => {
  try {
    const apiResult = await API.get("bebe", "/getAllMemberStayFit", {
      queryStringParameters: {
        
      }
    });
    return apiResult
  } catch (error) {
    return { error, messsage: error.message };
  }
}


function* getSubscriptionProductsSaga({ payload }) {
  const {
    user_id
  } = payload

  try {
    const apiResult = yield call(
      getSubscriptionProductsSagaAsync,
      user_id
    );
    yield put({
      type: types.GET_SUBSCRIPTION_PRODUCTS_SUCCESS,
      payload: apiResult.results
    })
    console.log("apiResult :", apiResult);
  } catch (error) {
    console.log("error from getSubscriptionProductsSaga :", error);
  }
}
function* getMemberInfoSagaAsyncSaga({ payload }) {
  const {
    user_id
  } = payload

 try {
    const apiResult = yield call(
      getMemberInfoSagaAsync,
      user_id
    );

     yield put({
      type: types.GET_MEMBER_INFO_SUCCESS,
      payload: apiResult.results
    })
     } catch (error) {
    console.log("error from getMemberInfoSagaAsyncSaga :", error);
  }

}

function* getRegister_logSaga({ payload }) {
  const {
    user_id
  } = payload

  try {
    const apiResult = yield call(
      getRegister_logSagaAsync,
      user_id
    );
    yield put({
      type: types.GET_REGISTER_LOG_SUCCESS,
      payload: apiResult.results
    })
    console.log("apiResult :", apiResult);
  } catch (error) {
    console.log("error from getRegister_logSaga :", error);
  }
}

function* getCheckDisplayNameSaga({ payload }) {
  const {
    display_name
  } = payload

  try {
    const apiResult = yield call(
      getCheckDisplayNameSagaAsync,
      display_name
    );

    if (apiResult.results.message === "new") {
      yield put({
        type: types.GET_CHECK_DISPAY_NAME_SUCCESS
      })
    }
    if (apiResult.results.message === "exist") {
      yield put({
        type: types.GET_CHECK_DISPAY_NAME_FALE
      })
    }
  } catch (error) {
    console.log("error from updateDisplayNameSaga :", error);
  }
}


function* getAllMemberStayFitSaga({  }) {

  try {
    const apiResult = yield call(
      getAllMemberStayFitSagaAsync
    );
    yield put({
      type: types.GET_ALL_MEMBER_STAY_FIT_SUCCESS,
      payload: apiResult.results
    })
  } catch (error) {
    console.log("error from getAllMemberStayFitSaga :", error);
  }
}

export function* watchGetSubscriptionProducts() {
  yield takeEvery(types.GET_SUBSCRIPTION_PRODUCTS, getSubscriptionProductsSaga)
}
export function* watchGetRegister_logSaga() {
  yield takeEvery(types.GET_REGISTER_LOG, getRegister_logSaga)
}
export function* watchGetAllMemberStayFitSaga() {
  yield takeEvery(types.GET_ALL_MEMBER_STAY_FIT, getAllMemberStayFitSaga)
}
export function* watchGetCheckDisplayNameSaga() {
  yield takeEvery(types.GET_CHECK_DISPAY_NAME, getCheckDisplayNameSaga)
}
export function* watchGetMemberInfoSagaAsyncSaga() {
  yield takeEvery(types.GET_MEMBER_INFO, getMemberInfoSagaAsyncSaga)
}

export function* saga() {
  yield all([
    fork(watchGetSubscriptionProducts),
    fork(watchGetRegister_logSaga),
    fork(watchGetAllMemberStayFitSaga),
    fork(watchGetCheckDisplayNameSaga),
    fork(watchGetMemberInfoSagaAsyncSaga),
  ]);
}

/* END OF SAGA Section */

/* REDUCER Section */

const INIT_STATE = {
  delivery_address: null,
  products_list: null,
  register_log: null,
  allMemberStayFit: null,
  statusDisplayName: "default",
  member_info:null
};

export function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case types.GET_CHECK_DISPAY_NAME:
      return {
        ...state,
        statusDisplayName: "loading"
      }
    case types.GET_CHECK_DISPAY_NAME_SUCCESS:
      return {
        ...state,
        statusDisplayName: "success"
      }
    case types.GET_CHECK_DISPAY_NAME_FALE:
      return {
        ...state,
        statusDisplayName: "fail"
      }
    case types.GET_ALL_MEMBER_STAY_FIT_SUCCESS:
      return {
        ...state,
        allMemberStayFit: action.payload.allMemberStayFit
      }
    case types.GET_MEMBER_INFO_SUCCESS:
      return {
        ...state,
        member_info: action.payload.member_info
      }
    case types.GET_SUBSCRIPTION_PRODUCTS_SUCCESS:
      return {
        ...state,
        delivery_address: action.payload.delivery_address,
        products_list: action.payload.products_list
      }
    case types.GET_REGISTER_LOG_SUCCESS:
      return {
        ...state,
        register_log: action.payload.register_log,
      }
    default:
      return { ...state };
  }
}