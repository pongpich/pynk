import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { API } from "aws-amplify";

/* ACTION Section */

export const types = {
  LOGIN: "LOGIN",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAIL: "LOGIN_FAIL",
  LOGIN_ADMIN: "LOGIN_ADMIN",
  LOGIN_ADMIN_SUCCESS: "LOGIN_ADMIN_SUCCESS",
  LOGIN_ADMIN_FAIL: "LOGIN_ADMIN_FAIL",
  LOGOUT: "LOGOUT",
  REGISTER_PYNK: "REGISTER_PYNK",
  REGISTER_SUCCESS: "REGISTER_SUCCESS",
  REGISTER_FAIL: "REGISTER_FAIL",
  UPDATE_REGISTER_PYNK: "UPDATE_REGISTER_PYNK",
  UPDATE_REGISTER_SUCCESS: "UPDATE_REGISTER_SUCCESS",
  UPDATE_REGISTER_FAIL: "UPDATE_REGISTER_FAIL",
  CLEAR_STATUS: "CLEAR_STATUS",
};

export const login = (email, password) => ({
  type: types.LOGIN,
  payload: {
    email,
    password,
  },
});

export const login_admin = (email, password) => ({
  type: types.LOGIN_ADMIN,
  payload: {
    email,
    password,
  },
});

export const clear_status = () => ({
  type: types.CLEAR_STATUS,
});

export const logout = () => ({
  type: types.LOGOUT,
});

export const register = (email, password, first_name, last_name, phone) => ({
  type: types.REGISTER_PYNK,
  payload: {
    email,
    password,
    first_name,
    last_name,
    phone,
  },
});

export const updateRegister = (
  id,
  email,
  password,
  first_name,
  last_name,
  phone
) => ({
  type: types.UPDATE_REGISTER_PYNK,
  payload: {
    id,
    email,
    password,
    first_name,
    last_name,
    phone,
  },
});

/* END OF ACTION Section */

/* SAGA Section */

const registerSagaAsync = async (
  email,
  password,
  first_name,
  last_name,
  phone
) => {
  try {
    const apiResult = await API.post("pynk", "/register", {
      body: {
        email: email,
        password: password,
        first_name: first_name,
        last_name: last_name,
        phone: phone,
      },
    });
    return apiResult;
  } catch (error) {
    return { error, messsage: error.message };
  }
};

const updateRegisterSagaAsync = async (
  id,
  email,
  password,
  first_name,
  last_name,
  phone
) => {
  try {
    const apiResult = await API.post("pynk", "/updateRegister", {
      body: {
        id,
        email: email,
        password: password,
        first_name: first_name,
        last_name: last_name,
        phone: phone,
      },
    });
    console.log("apiResult", apiResult);
    return apiResult;
  } catch (error) {
    console.log("error", error);
    return { error, messsage: error.message };
  }
};

const loginSagaAsync = async (email, password) => {
  try {
    const apiResult = await API.get("pynk", "/login", {
      queryStringParameters: {
        email: email,
        password: password,
      },
    });
    return apiResult;
  } catch (error) {
    return { error, messsage: error.message };
  }
};

const loginAdminSagaAsync = async (email, password) => {
  try {
    const apiResult = await API.get("pynk", "/login_admin", {
      queryStringParameters: {
        email: email,
        password: password,
      },
    });
    return apiResult;
  } catch (error) {
    return { error, messsage: error.message };
  }
};

function* loginSaga({ payload }) {
  const { email, password } = payload;

  try {
    const loginResult = yield call(loginSagaAsync, email, password);

    if (loginResult.results.message === "success") {
      yield put({
        type: types.LOGIN_SUCCESS,
        payload: loginResult.results.user,
      });
    } else if (
      loginResult.results.message === "fail" ||
      loginResult.results.message === "no_user"
    ) {
      yield put({
        type: types.LOGIN_FAIL,
      });
    }
  } catch (error) {
    console.log("error form login", error);
  }
}

function* loginAdminSaga({ payload }) {
  const { email, password } = payload;

  try {
    const loginResult = yield call(loginAdminSagaAsync, email, password);

    if (loginResult.results.message === "success") {
      yield put({
        type: types.LOGIN_ADMIN_SUCCESS,
        payload: loginResult.results.user,
      });
    } else if (
      loginResult.results.message === "fail" ||
      loginResult.results.message === "no_user"
    ) {
      yield put({
        type: types.LOGIN_ADMIN_FAIL,
      });
    }
  } catch (error) {
    console.log("error form login", error);
  }
}

function* registerSaga({ payload }) {
  const { email, password, first_name, last_name, phone } = payload;

  try {
    const apiResult = yield call(
      registerSagaAsync,
      email,
      password,
      first_name,
      last_name,
      phone
    );
    if (apiResult.results.message === "success") {
      yield put({
        type: types.REGISTER_SUCCESS,
      });
    } else if (apiResult.results.message === "fail") {
      yield put({
        type: types.REGISTER_FAIL,
      });
    }
  } catch (error) {
    console.log("error from register :", error);
  }
}

function* updateRegisterSaga({ payload }) {
  const { id, email, password, first_name, last_name, phone } = payload;

  try {
    const apiResult = yield call(
      updateRegisterSagaAsync,
      id,
      email,
      password,
      first_name,
      last_name,
      phone
    );

    console.log("apiResult", apiResult);
    if (apiResult.results.message === "success") {
      yield put({
        type: types.UPDATE_REGISTER_SUCCESS,
        payload: apiResult.results.user,
      });
    } else if (apiResult.results.message === "fail") {
      yield put({
        type: types.UPDATE_REGISTER_FAIL,
      });
    }
  } catch (error) {
    console.log("error from register :", error);
  }
}

export function* watchLogin() {
  yield takeEvery(types.LOGIN, loginSaga);
}

export function* watchLoginAdmin() {
  yield takeEvery(types.LOGIN_ADMIN, loginAdminSaga);
}

export function* watchRegister() {
  yield takeEvery(types.REGISTER_PYNK, registerSaga);
}
export function* watchUpdateRegister() {
  yield takeEvery(types.UPDATE_REGISTER_PYNK, updateRegisterSaga);
}

export function* saga() {
  yield all([
    fork(watchLogin),
    fork(watchRegister),
    fork(watchLoginAdmin),
    fork(watchUpdateRegister),
  ]);
}

export /* END OF SAGA Section */

/* REDUCER Section */

const INIT_STATE = {
  statusLogin: "default",
  statusLoginAdmin: "default",
  user: null,
  statusRegister: "default",
};

export function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        statusLogin: "loading",
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        statusLogin: "success",
      };
    case types.LOGIN_FAIL:
      return {
        ...state,
        statusLogin: "fail",
      };
    case types.LOGIN_ADMIN:
      return {
        ...state,
        statusLoginAdmin: "loading",
      };
    case types.LOGIN_ADMIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        statusLoginAdmin: "success",
      };
    case types.LOGIN_ADMIN_FAIL:
      return {
        ...state,
        statusLoginAdmin: "fail",
      };
    case types.REGISTER_PYNK:
      return {
        ...state,
        statusRegister: "loading",
      };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        statusRegister: "success",
      };
    case types.REGISTER_FAIL:
      return {
        ...state,
        statusRegister: "fail",
      };
    case types.UPDATE_REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        statusUpdateRegister: "success",
      };
    case types.UPDATE_REGISTER_FAIL:
      return {
        ...state,
        statusUpdateRegister: "fail",
      };
    case types.CLEAR_STATUS:
      return {
        ...state,
        statusLogin: "default",
        statusLoginAdmin: "default",
        statusRegister: "default",
      };
    case types.LOGOUT:
      return INIT_STATE;
    default:
      return { ...state };
  }
}
