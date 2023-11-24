import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { API } from "aws-amplify";

/* ACTION Section */

export const types = {
  CREATE_ORDER: "CREATE_ORDER",
  CREATE_ORDER_SUCCESS: "CREATE_ORDER_SUCCESS",
  CLEAR_STATUS: "CLEAR_STATUS",
  UPDATE_STATUS_CART: "UPDATE_STATUS_CART",
  GET_TRACKING_ORDERS: "GET_TRACKING_ORDERS",
  GET_TRACKING_ORDERS_SUCCESS: "GET_TRACKING_ORDERS_SUCCESS",
  GET_TRACKING_ORDERS_FAIL: "GET_TRACKING_ORDERS_FAIL",
};

export const update_status_cart = (status) => ({
  type: types.UPDATE_STATUS_CART,
  payload: status,
});

export const clear_status = () => ({
  type: types.CLEAR_STATUS,
});

export const get_tracking_order = (user_id) => ({
  type: types.GET_TRACKING_ORDERS,
  payload: {user_id},
});

export const create_order = (
  user_id,
  product_list,
  total_amount,
  customer_data,
  shipping_address,
  tax_invoice_address,
  note,
  payment_method
) => ({
  type: types.CREATE_ORDER,
  payload: {
    user_id,
    product_list,
    total_amount,
    customer_data,
    shipping_address,
    tax_invoice_address,
    note,
    payment_method,
  },
});

/* END OF ACTION Section */

/* SAGA Section */

const createOrderSagaAsync = async (
  user_id,
  product_list,
  total_amount,
  customer_data,
  shipping_address,
  tax_invoice_address,
  note,
  payment_method
) => {
  try {
    const apiResult = await API.post("pynk", "/create_order", {
      body: {
        user_id,
        product_list,
        total_amount,
        customer_data,
        shipping_address,
        tax_invoice_address,
        note,
        payment_method,
      },
    });
    console.log("create_order apiResult", apiResult);
    return apiResult;
  } catch (error) {
    return { error, messsage: error.message };
  }
};
const getTrackingOrdersSagaAsync = async (user_id) => {
  try {
    const apiResult = await API.get("pynk", "/getTrackingOrders", {
      queryStringParameters: {
        user_id,
      },
    });
    return apiResult;
  } catch (error) {
    return { error, messsage: error.message };
  }
};

function* createOrderSaga({ payload }) {
  const {
    user_id,
    product_list,
    total_amount,
    customer_data,
    shipping_address,
    tax_invoice_address,
    note,
    payment_method,
  } = payload;

  try {
    const apiResult = yield call(
      createOrderSagaAsync,
      user_id,
      product_list,
      total_amount,
      customer_data,
      shipping_address,
      tax_invoice_address,
      note,
      payment_method
    );

    if (apiResult.results.message === "success") {
      yield put({
        type: types.CREATE_ORDER_SUCCESS,
        payload: apiResult.results.order_id,
      });
    }
  } catch (error) {
    console.log("error from createOrderSaga :", error);
  }
}
function* getTrackingOrdersSaga({ payload }) {
  const { user_id } = payload;

  try {
    const apiResult = yield call(getTrackingOrdersSagaAsync, user_id);

    if (apiResult.results.message === "success") {
      yield put({
        type: types.GET_TRACKING_ORDERS_SUCCESS,
        payload: apiResult.results.tracking_orders,
      });
    }
    if (apiResult.results.message === "fail") {
      yield put({
        type: types.GET_TRACKING_ORDERS_FAIL,
      });
    }
  } catch (error) {
    console.log("error from getTrackingOrderSaga :", error);
  }
}


export function* watchCreateOrder() {
  yield takeEvery(types.CREATE_ORDER, createOrderSaga);
}
export function* watchGetTrackingOrders() {
  yield takeEvery(types.GET_TRACKING_ORDERS, getTrackingOrdersSaga);
}

export function* saga() {
  yield all([fork(watchCreateOrder), fork(watchGetTrackingOrders)]);
}

/* END OF SAGA Section */

/* REDUCER Section */

const INIT_STATE = {
  status_create_order: "default",
  status_cart: "default",
  current_order_id: null,
  tracking_orders: null,
  status_tracking_orders: "default",
};

export function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case types.CREATE_ORDER:
      return {
        ...state,
        status_create_order: "loading",
      };
    case types.CREATE_ORDER_SUCCESS:
      return {
        ...state,
        status_create_order: "success",
        current_order_id: action.payload,
      };
    case types.GET_TRACKING_ORDERS:
      return {
        ...state,
        status_tracking_orders: "loading",
      };
    case types.GET_TRACKING_ORDERS_SUCCESS:
      return {
        ...state,
        tracking_orders: action.payload,
        status_tracking_orders: "success",
      };
    case types.GET_TRACKING_ORDERS_FAIL:
      return {
        ...state,
        status_tracking_orders: "fail",
      };
    case types.CLEAR_STATUS:
      return {
        ...state,
        status_create_order: "default",
      };
    case types.UPDATE_STATUS_CART:
      return {
        ...state,
        status_cart: action.payload,
      };
    default:
      return { ...state };
  }
}
