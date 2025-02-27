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
  LOGIN_GOOGLE: "LOGIN_GOOGLE",
  REGISTER_PYNK: "REGISTER_PYNK",
  REGISTER_SUCCESS: "REGISTER_SUCCESS",
  REGISTER_FAIL: "REGISTER_FAIL",
  REGISTER_LOGIN_GOOGLE_PYNK: "REGISTER_LOGIN_GOOGLE_PYNK",
  REGISTER_LOGIN_GOOGLE_PYNK_SUCCESS: "REGISTER_LOGIN_GOOGLE_PYNK_SUCCESS",
  REGISTER_LOGIN_GOOGLE_PYNK_FAIL: "REGISTER_LOGIN_GOOGLE_PYNK_FAIL",
  UPDATE_REGISTER_PYNK: "UPDATE_REGISTER_PYNK",
  UPDATE_REGISTER_SUCCESS: "UPDATE_REGISTER_SUCCESS",
  UPDATE_REGISTER_FAIL: "UPDATE_REGISTER_FAIL",
  UPDATE_ADDRESS_PYNK: "UPDATE_ADDRESS_PYNK",
  UPDATE_ADDRESS_PYNK_SUCCESS: "UPDATE_ADDRESS_PYNK_SUCCESS",
  UPDATE_ADDRESS_PYNK_FAIL: "UPDATE_ADDRESS_PYNK_FAIL",
  CLEAR_STATUS_UPDATE_REGISTER: "CLEAR_STATUS_UPDATE_REGISTER",
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

export const registerLoginGoogle = (email, first_name, last_name) => ({
  type: types.REGISTER_LOGIN_GOOGLE_PYNK,
  payload: {
    email,
    first_name,
    last_name,
  },
});

export const updateRegister = (
  id,
  email,
  password,
  first_name,
  last_name,
  phone,
  name_display_system,
  facebook,
  birthday,
  sex
) => ({
  type: types.UPDATE_REGISTER_PYNK,
  payload: {
    id,
    email,
    password,
    first_name,
    last_name,
    phone,
    name_display_system,
    facebook,
    birthday,
    sex,
  },
});

export const updateAddressPynk = (id, address, addressStatus) => ({
  type: types.UPDATE_ADDRESS_PYNK,
  payload: {
    id,
    address,
    addressStatus,
  },
});

export const clearUpdateRegister = () => ({
  type: types.CLEAR_STATUS_UPDATE_REGISTER,
  payload: {},
});

export const loginGoogle = (profile) => ({
  type: types.LOGIN_GOOGLE,
  payload: { profile },
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
const registerLoginGoogleSagaAsync = async (email, first_name, last_name) => {
  try {
    const apiResult = await API.post("pynk", "/registerLoginGoogle", {
      body: {
        email: email,
        first_name: first_name,
        last_name: last_name,
      },
    });
    console.log("apiResult", apiResult);
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
  phone,
  name_display_system,
  facebook,
  birthday,
  sex
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
        name_display_system,
        facebook,
        birthday,
        sex,
      },
    });
    console.log("apiResult", apiResult);
    return apiResult;
  } catch (error) {
    console.log("error", error);
    return { error, messsage: error.message };
  }
};

const updateAddressPynkSagaAsync = async (id, address, addressStatus) => {
  try {
    const apiResult = await API.post("pynk", "/postAddress", {
      body: {
        id,
        address,
        addressStatus,
      },
    });
    console.log("apiResult 55", apiResult);
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
function* registerLoginGoogleSaga({ payload }) {
  const { email, first_name, last_name } = payload;

  try {
    const apiResult = yield call(
      registerLoginGoogleSagaAsync,
      email,
      first_name,
      last_name
    );
    if (apiResult.results.message === "success") {
      yield put({
        type: types.REGISTER_LOGIN_GOOGLE_PYNK_SUCCESS,
      });
    } else if (apiResult.results.message === "fail") {
      yield put({
        type: types.REGISTER_LOGIN_GOOGLE_PYNK_FAIL,
      });
    }
  } catch (error) {
    console.log("error from register :", error);
  }
}

function* updateRegisterSaga({ payload }) {
  const {
    id,
    email,
    password,
    first_name,
    last_name,
    phone,
    name_display_system,
    facebook,
    birthday,
    sex,
  } = payload;

  try {
    const apiResult = yield call(
      updateRegisterSagaAsync,
      id,
      email,
      password,
      first_name,
      last_name,
      phone,
      name_display_system,
      facebook,
      birthday,
      sex
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

function* updateAddressPynkSaga({ payload }) {
  const { id, address, addressStatus } = payload;

  try {
    const apiResult = yield call(
      updateAddressPynkSagaAsync,
      id,
      address,
      addressStatus
    );

    console.log("apiResult", apiResult);
    if (apiResult.results.message === "success") {
      yield put({
        type: types.UPDATE_ADDRESS_PYNK_SUCCESS,
        payload: apiResult.results.user,
      });
    } else if (apiResult.results.message === "fail") {
      yield put({
        type: types.UPDATE_ADDRESS_PYNK_FAIL,
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
export function* watchRegisterLoginGoogleSaga() {
  yield takeEvery(types.REGISTER_LOGIN_GOOGLE_PYNK, registerLoginGoogleSaga);
}
export function* watchUpdateRegister() {
  yield takeEvery(types.UPDATE_REGISTER_PYNK, updateRegisterSaga);
}
export function* watchUpdateAddressPynk() {
  yield takeEvery(types.UPDATE_ADDRESS_PYNK, updateAddressPynkSaga);
}

export function* saga() {
  yield all([
    fork(watchLogin),
    fork(watchRegister),
    fork(watchLoginAdmin),
    fork(watchUpdateRegister),
    fork(watchUpdateAddressPynk),
    fork(watchRegisterLoginGoogleSaga),
  ]);
}

export /* END OF SAGA Section */

/* REDUCER Section */

const INIT_STATE = {
  statusLogin: "default",
  statusLoginAdmin: "default",
  user: null,
  googleProfile: null,
  statusGoogleProfile: "default",
  statusRegister: "default",
  statusUpdateRegister: "default",
  statusUpdateAddress: "default",
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
    case types.UPDATE_ADDRESS_PYNK_SUCCESS:
      return {
        ...state,
        user: action.payload,
        statusUpdateAddress: "success",
      };
    case types.UPDATE_ADDRESS_PYNK_FAIL:
      return {
        ...state,
        statusUpdateAddress: "fail",
      };
    case types.REGISTER_LOGIN_GOOGLE_PYNK:
      return {
        ...state,
        statusGoogleProfile: "fail",
      };
    case types.REGISTER_LOGIN_GOOGLE_PYNK_SUCCESS:
      return {
        ...state,
        statusGoogleProfile: "success",
      };
    case types.REGISTER_LOGIN_GOOGLE_PYNK_FAIL:
      return {
        ...state,
        statusGoogleProfile: "fail",
      };
    case types.CLEAR_STATUS:
      return {
        ...state,
        statusLogin: "default",
        statusLoginAdmin: "default",
        statusRegister: "default",
      };
    case types.CLEAR_STATUS_UPDATE_REGISTER:
      return {
        ...state,
        statusUpdateRegister: "default",
        statusUpdateAddress: "default",
      };
    case types.LOGIN_GOOGLE:
      return {
        ...state,
        googleProfile: action.payload,
      };
    case types.LOGOUT:
      return INIT_STATE;
    default:
      return { ...state };
  }
}
