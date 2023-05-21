import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { API } from "aws-amplify";

/* ACTION Section */

export const types = {
  CLEAR_CREATE_USER: "CLEAR_CREATE_USER",
  CREATE_USER: "CREATE_USER",
  INSERT_SUBSCRIPTION_PRODUCTS: "INSERT_SUBSCRIPTION_PRODUCTS"

}

export const insertSubscriptionProducts = (
  email,
  products_list,
  delivery_address,
  receipt_address
) => ({
  type: types.INSERT_SUBSCRIPTION_PRODUCTS,
  payload: {
    email,
    products_list,
    delivery_address,
    receipt_address
  }
})

export const clearCreateUser = () => ({
  type: types.CLEAR_CREATE_USER
})

export const createUser = (email, password, phone) => ({
  type: types.CREATE_USER,
  payload: {
    email,
    password,
    phone
  }
})

/* END OF ACTION Section */

/* SAGA Section */

const insertSubscriptionProductsSagaAsync = async (
  email,
  products_list,
  delivery_address,
  receipt_address
) => {
  try {
    const apiResult = await API.post("bebe", "/insertSubscriptionProducts", {
      body: {
        email,
        products_list,
        delivery_address,
        receipt_address
      }
    });
    return apiResult;
  } catch (error) {
    return { error, messsage: error.message };
  }
}

function* insertSubscriptionProductsSaga({ payload }) {
  const {
    email,
    products_list,
    delivery_address,
    receipt_address
  } = payload

  try {
    const apiResult = yield call(
      insertSubscriptionProductsSagaAsync,
      email,
      products_list,
      delivery_address,
      receipt_address
    );
  } catch (error) {
    console.log("error from insertSubscriptionProductsSaga :", error);
  }
}

export function* watchInsertSubscription() {
  yield takeEvery(types.INSERT_SUBSCRIPTION_PRODUCTS, insertSubscriptionProductsSaga)
}

export function* saga() {
  yield all([
    fork(watchInsertSubscription),
  ]);
}

/* END OF SAGA Section */

/* REDUCER Section */

const INIT_STATE = {
  create_user_email: null,
  create_user_password: null,
  create_user_phone: null,
};

export function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case types.CLEAR_CREATE_USER:
      return INIT_STATE;
    case types.CREATE_USER:
      return {
        ...state,
        create_user_email: action.payload.email,
        create_user_password: action.payload.password,
        create_user_phone: action.payload.phone
      };
    default:
      return { ...state };
  }
}
