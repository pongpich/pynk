import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { API } from "aws-amplify";

/* ACTION Section */

export const types = {
  REGISTER: "REGISTER",
  REGISTER_SUCCESS: "REGISTER_SUCCESS",
  REGISTER_FAIL: "REGISTER_FAIL",
  SIGNUP_USER: "SIGNUP_USER",
  LOGIN_USER: "LOGIN_USER",
  LOGIN_USER_SUCCESS: "LOGIN_USER_SUCCESS",
  LOGIN_USER_FAIL: "LOGIN_USER_FAIL",
  CHECK_USER: "CHECK_USER",
  CHECK_USER_SUCCESS: "CHECK_USER_SUCCESS",
  LOGOUT_USER: "LOGOUT_USER",
  SET_PASSWORD: "SET_PASSWORD",
  SET_PASSWORD_SUCCESS: "SET_PASSWORD_SUCCESS",
  RESET_STATUS_SET_PASSWORD: "RESET_STATUS_SET_PASSWORD",
  TRIAL_PACKAGE: "TRIAL_PACKAGE",
  TRIAL_PACKAGE_SUCCESS: "TRIAL_PACKAGE_SUCCESS",
  GET_EXPIRE_DATE: "GET_EXPIRE_DATE",
  GET_EXPIRE_DATE_SUCCESS: "GET_EXPIRE_DATE_SUCCESS",
  FORGOT_PASSWORD: "FORGOT_PASSWORD",
  FORGOT_PASSWORD_SUCCESS: "FORGOT_PASSWORD_SUCCESS",
  FORGOT_PASSWORD_FAIL: "FORGOT_PASSWORD_FAIL",
  RESET_PASSWORD: "RESET_PASSWORD",
  RESET_PASSWORD_SUCCESS: "RESET_PASSWORD_SUCCESS",
  RESET_PASSWORD_FAIL: "RESET_PASSWORD_FAIL",
  IMPORT_MEMBERS: "IMPORT_MEMBERS",
  GET_GROUP_ID: "GET_GROUP_ID",
  GET_GROUP_ID_SUCCESS: "GET_GROUP_ID_SUCCESS",
  CHANGE_EMAIL: "CHANGE_EMAIL",
  CHANGE_EMAIL_SUCCESS: "CHANGE_EMAIL_SUCCESS",
  TEST_POST_SERVICE: "TEST_POST_SERVICE",
  UPDATE_PROFILE: "UPDATE_PROFILE",
  UPDATE_PROFILE_SUCCESS: "UPDATE_PROFILE_SUCCESS",
  CHECK_UPDATE_MAX_FRIENDS: "CHECK_UPDATE_MAX_FRIENDS",
  ADD_ORDERIN_ZORT: "ADD_ORDERIN_ZORT",
  ADD_ORDERIN_ZORT_SUCCESS: "ADD_ORDERIN_ZORT_SUCCESS",
  CANCEL_RECURRING: "CANCEL_RECURRING",
  CANCEL_RECURRING_SUCCESS: "CANCEL_RECURRING_SUCCESS",
  CANCEL_RECURRING_FAIL: "CANCEL_RECURRING_FAIL",
}

export const cancelRecurring = (user_id) => ({
  type: types.CANCEL_RECURRING,
  payload: {
    user_id
  }
})

export const checkUpdateMaxFriends = (user_id) => ({
  type: types.CHECK_UPDATE_MAX_FRIENDS,
  payload: {
    user_id
  }
})
export const addOrderInZort = (customerEmail) => ({
  type: types.ADD_ORDERIN_ZORT,
  payload: {
    customerEmail
  }
});

export const resetStatusSetPassword = () => ({
  type: types.RESET_STATUS_SET_PASSWORD
})

export const updateProfile = (
  user_id,
  other_attributes,
  display_name,
  start_date,
  program_id,
  is_beginner
) => ({
  type: types.UPDATE_PROFILE,
  payload: {
    user_id,
    other_attributes,
    display_name,
    start_date,
    program_id,
    is_beginner
  }
})

export const testPostService = (

) => ({
  type: types.TEST_POST_SERVICE
})

export const changeEmail = (
  email,
  new_email
) => ({
  type: types.CHANGE_EMAIL,
  payload: {
    email,
    new_email
  }
})

export const getGroupID = (
  user_id
) => ({
  type: types.GET_GROUP_ID,
  payload: {
    user_id
  }
})

export const resetPassword = (
  email,
  user_id,
  expire_time
) => ({
  type: types.RESET_PASSWORD,
  payload: {
    email,
    user_id,
    expire_time
  }
})

export const forgotPassword = (email) => ({
  type: types.FORGOT_PASSWORD,
  payload: { email }
});

export const getExpireDate = (email) => ({
  type: types.GET_EXPIRE_DATE,
  payload: {
    email
  }
})

export const trialPackage = (email, expire_date) => ({
  type: types.TRIAL_PACKAGE,
  payload: {
    email,
    expire_date
  }
})

export const setPassword = (email, password) => ({
  type: types.SET_PASSWORD,
  payload: {
    email,
    password
  }
})

export const logoutUser = () => ({
  type: types.LOGOUT_USER
});

export const checkUser = (email) => ({
  type: types.CHECK_USER,
  payload: {
    email
  }
});

export const loginUser = (email, password) => ({
  type: types.LOGIN_USER,
  payload: {
    email,
    password
  }
});

export const importMembers = (members, start_date, expire_date) => ({
  type: types.IMPORT_MEMBERS,
  payload: {
    members,
    start_date,
    expire_date
  }
})


export const register = (email, password, phone) => ({
  type: types.REGISTER,
  payload: {
    email,
    password,
    phone
  }
});

export const signupUser = (email, password, firstname, lastname, phone) => ({
  type: types.SIGNUP_USER,
  payload: {
    email,
    password,
    firstname,
    lastname,
    phone
  }
});

/* END OF ACTION Section */

/* SAGA Section */

const addOrderInZortSagaAsync = async (
  customerEmail
) => {
  try {
    const apiResult = await API.post("bebe", "/addOrderInZort", {
      body: {
        customerEmail
      }
    });
    return apiResult;
  } catch (error) {
    return { error, messsage: error.message };
  }
}

const updateProfileSagaAsync = async (
  user_id,
  other_attributes,
  display_name,
  start_date,
  program_id,
  is_beginner
) => {
  try {
    const apiResult = await API.post("bebe", "/updateStayFitProfile", {
      body: {
        user_id,
        other_attributes,
        display_name,
        start_date,
        program_id,
        is_beginner
      }
    });
    return apiResult;
  } catch (error) {
    return { error, messsage: error.message };
  }
}

const checkUserSagaAsync = async (
  email
) => {
  try {
    const apiResult = await API.get("bebe", "/check_user", {
      queryStringParameters: {
        email: email
      }
    });
    return apiResult
  } catch (error) {
    console.log("error :", error);
    return { error, messsage: error.message }
  }
}

const setPasswordSagaAsync = async (
  email,
  password
) => {
  try {
    const apiResult = await API.put("bebe", "/setPassword", {
      body: {
        email: email,
        password: password,
      }
    });
    return apiResult;
  } catch (error) {
    return { error, messsage: error.message };
  }
};

const trialPackageSagaAsync = async (
  email
) => {
  try {
    const apiResult = await API.put("bebe", "/trialPackage", {
      body: {
        email: email,
      }
    });
    return apiResult;
  } catch (error) {
    return { error, messsage: error.message };
  }
}

const importMembersSagaAsync = async (
  members,
  start_date,
  expire_date
) => {
  try {
    const apiResult = await API.post("bebe", "/import_members", {
      body: {
        members,
        start_date,
        expire_date
      }
    });
    return apiResult;
  } catch (error) {
    return { error, messsage: error.message };
  }
}

const registerSagaAsync = async (
  email,
  password,
  phone
) => {
  try {
    const apiResult = await API.post("bebe", "/registerBebeStayFit", {
      body: {
        email: email,
        password: password,
        phone: phone
      }
    });
    return apiResult;
  } catch (error) {
    return { error, messsage: error.message };
  }
};

const signupUserSagaAsync = async (
  email,
  password,
  firstname,
  lastname,
  phone
) => {
  try {
    const apiResult = await API.post("bebe", "/signup", {
      body: {
        email: email,
        password: password,
        first_name: firstname,
        last_name: lastname,
        phone: phone
      }
    });
    return apiResult;
  } catch (error) {
    return { error, messsage: error.message };
  }
};

const getExpireDateSagaAsync = async (
  email
) => {
  try {
    const apiResult = await API.get("bebe", "/getExpireDate", {
      queryStringParameters: {
        email
      }
    });
    return apiResult
  } catch (error) {
    return { error, messsage: error.message };
  }
}

const changeEmailSagaAsync = async (
  email,
  new_email
) => {
  try {
    const apiResult = await API.put("bebe", "/changeEmail", {
      body: {
        email,
        new_email
      }
    });
    return apiResult
  } catch (error) {
    return { error, messsage: error.message };
  }
}

const checkUpdateMaxFriendsSagaAsync = async (
  user_id
) => {
  try {
    const apiResult = await API.put("bebe", "/checkUpdateMaxFriends", {
      body: {
        user_id
      }
    });
    return apiResult
  } catch (error) {
    return { error, messsage: error.message };
  }
}

const cancelRecurringSagaAsync = async (
  user_id
) => {
  try {
    const apiResult = await API.post("bebe", "/cancelRecurring", {
      body: {
        user_id
      }
    });
    return apiResult
  } catch (error) {
    return { error, messsage: error.message };
  }
}

const getGroupIDSagaAsync = async (
  user_id
) => {
  try {
    const apiResult = await API.get("bebe", "/getGroupID", {
      queryStringParameters: {
        user_id
      }
    });
    return apiResult
  } catch (error) {
    return { error, messsage: error.message };
  }
}

const testPostServiceSagaAsync = async (

) => {
  try {
    const apiResult = await API.post("bebe", "/testPostService", {
      body: {

      }
    });
    return apiResult
  } catch (error) {
    return { error, messsage: error.message };
  }
}

const resetPasswordSagaAsync = async (
  email,
  user_id,
  expire_time
) => {
  try {
    const apiResult = await API.put("bebe", "/resetPassword", {
      body: {
        email,
        user_id,
        expire_time
      }
    });
    return apiResult;
  } catch (error) {
    return { error, messsage: error.message };
  }
}

const forgotPasswordSagaAsync = async (
  email
) => {
  try {
    const apiResult = await API.get("bebe", "/forgotPasswordStayfit", {
      queryStringParameters: {
        email
      }
    });
    return apiResult
  } catch (error) {
    return { error, messsage: error.message };
  }
}

const loginUserSagaAsync = async (
  email,
  password
) => {
  try {
    const apiResult = await API.get("bebe", "/loginStayfit", {
      queryStringParameters: {
        email: email,
        password: password
      }
    });
    return apiResult
  } catch (error) {
    return { error, messsage: error.message };
  }
};

function* checkUserSaga({ payload }) {
  const {
    email
  } = payload

  try {
    const apiResult = yield call(
      checkUserSagaAsync,
      email
    );
    yield put({
      type: types.CHECK_USER_SUCCESS,
      payload: apiResult.results.message
    })
  } catch (error) {
    console.log("error from checkUserSaga :", error);
  }
}

function* signupUserSaga({ payload }) {
  const {
    email,
    password,
    firstname,
    lastname,
    phone
  } = payload

  try {
    const apiResult = yield call(
      signupUserSagaAsync,
      email,
      password,
      firstname,
      lastname,
      phone
    );
    console.log("signupUser : ", apiResult);
  } catch (error) {
    console.log("error from signupUser :", error);
  }
}

function* updateProfileSaga({ payload }) {
  const {
    user_id,
    other_attributes,
    display_name,
    start_date,
    program_id,
    is_beginner
  } = payload

  try {
    const apiResult = yield call(
      updateProfileSagaAsync,
      user_id,
      other_attributes,
      display_name,
      start_date,
      program_id,
      is_beginner
    );
    yield put({
      type: types.UPDATE_PROFILE_SUCCESS,
      payload: JSON.stringify(other_attributes)
    })
  } catch (error) {
    console.log("error from updateProfileSaga :", error);
  }
}

function* addOrderInZortSaga({ payload }) {
  const {
    customerEmail
  } = payload
  try {
    const apiResult = yield call(
      addOrderInZortSagaAsync,
      customerEmail
    );
    yield put({
      type: types.ADD_ORDERIN_ZORT_SUCCESS
    });
  } catch (error) {
    return { error, messsage: error.message };
  }
}

function* setPasswordSaga({ payload }) {
  const {
    email,
    password
  } = payload

  try {
    yield call(
      setPasswordSagaAsync,
      email,
      password
    );
    yield put({
      type: types.SET_PASSWORD_SUCCESS
    })
  } catch (error) {
    console.log("error from setPasswordSaga :", error);
  }
}

function* trialPackageSaga({ payload }) {
  const {
    email,
    expire_date
  } = payload

  try {
    yield call(
      trialPackageSagaAsync,
      email
    );
    yield put({
      type: types.TRIAL_PACKAGE_SUCCESS,
      payload: expire_date
    })
  } catch (error) {
    console.log("error from trialPackageSaga :", error);
  }
}

function* importMembersSaga({ payload }) {
  const {
    members,
    start_date,
    expire_date
  } = payload

  try {
    yield call(
      importMembersSagaAsync,
      members,
      start_date,
      expire_date
    )
  } catch (error) {
    console.log("error from register :", error);
  }
}

function* registerSaga({ payload }) {
  const {
    email,
    password,
    phone
  } = payload

  try {
    const apiResult = yield call(
      registerSagaAsync,
      email,
      password,
      phone
    );
    if (apiResult.results.message === "success") {
      yield put({
        type: types.REGISTER_SUCCESS
      })
    } else if (apiResult.results.message === "existInStayFit" || apiResult.results.message === "existBebefitroutine") {
      yield put({
        type: types.REGISTER_FAIL,
        payload: apiResult.results.message
      })
    }
  } catch (error) {
    console.log("error from register :", error);
  }
}

function* getExpireDateSaga({ payload }) {
  const {
    email
  } = payload

  try {
    const apiResult = yield call(
      getExpireDateSagaAsync,
      email
    );
    yield put({
      type: types.GET_EXPIRE_DATE_SUCCESS,
      payload: apiResult.results.expire_date
    })
  } catch (error) {
    console.log("error from getExpireDateSaga :", error);
  }
}

function* getGroupIDSaga({ payload }) {
  const {
    user_id
  } = payload

  try {
    const apiResult = yield call(
      getGroupIDSagaAsync,
      user_id
    );
    yield put({
      type: types.GET_GROUP_ID_SUCCESS,
      payload: apiResult.results.group_id
    })
  } catch (error) {
    console.log("error from getGroupIDSaga :", error);
  }
}

function* testPostServiceSaga({ }) {

  try {
    yield call(
      testPostServiceSagaAsync
    );

  } catch (error) {
    console.log("error from testPostServiceSaga :", error);
  }
}

function* changeEmailSaga({ payload }) {
  const {
    email,
    new_email
  } = payload

  try {
    const apiResult = yield call(
      changeEmailSagaAsync,
      email,
      new_email
    );
    yield put({
      type: types.CHANGE_EMAIL_SUCCESS,
      payload: apiResult.results.message
    })
    yield put({
      type: types.CHANGE_EMAIL_FAIL,
      payload: apiResult.results.message
    })
  } catch (error) {
    console.log("error from changeEmailSaga :", error);
  }
}

function* checkUpdateMaxFriendsSaga({ payload }) {
  const {
    user_id
  } = payload

  try {
    const apiResult = yield call(
      checkUpdateMaxFriendsSagaAsync,
      user_id
    );
  } catch (error) {
    console.log("error from checkUpdateMaxFriendsSaga :", error);
  }
}

function* cancelRecurringSaga({ payload }) {
  const {
    user_id
  } = payload

  try {
    const apiResult = yield call(
      cancelRecurringSagaAsync,
      user_id
    );
    if (apiResult && apiResult.results && apiResult.results.message === "success") {
      yield put({
        type: types.CANCEL_RECURRING_SUCCESS
      })
    } else {
      yield put({
        type: types.CANCEL_RECURRING_FAIL
      })
    }
  } catch (error) {
    console.log("error from cancelRecurringSaga :", error);
  }
}

function* resetPasswordSaga({ payload }) {
  const {
    email,
    user_id,
    expire_time
  } = payload;
  try {
    const apiResult = yield call(
      resetPasswordSagaAsync,
      email,
      user_id,
      expire_time
    )
    if (apiResult.results.message === "success") {
      yield put({
        type: types.RESET_PASSWORD_SUCCESS,
        payload: apiResult.results.user
      })
    } else if (apiResult.results.message === "fail" || apiResult.results.message === "no_user") {
      yield put({
        type: types.RESET_PASSWORD_FAIL
      })
    }
  } catch (error) {
    console.log("error from resetPasswordSaga :", error);
  }
}

function* forgotPasswordSaga({ payload }) {
  const { email } = payload;
  try {
    const result = yield call(
      forgotPasswordSagaAsync,
      email
    );
    console.log('TESTS', result);
    if (result && result.results && result.results.message) {
      if (result.results.message === "success") {
        yield put({
          type: types.FORGOT_PASSWORD_SUCCESS
        })
      } else {
        yield put({
          type: types.FORGOT_PASSWORD_FAIL
        })
      }

    }

  } catch (error) {
    console.log("error from forgotPasswordSaga :", error);
  }
}

function* loginUserSaga({ payload }) {
  const {
    email,
    password
  } = payload

  try {
    const loginResult = yield call(
      loginUserSagaAsync,
      email,
      password
    );
    console.log(loginResult);
    if (loginResult.results.message === "success") {
      console.log("user :", loginResult.results.user);
      yield put({
        type: types.LOGIN_USER_SUCCESS,
        payload: loginResult.results.user
      })
    } else if (loginResult.results.message === "fail" || loginResult.results.message === "no_user") {
      console.log("user :", loginResult.results.user);
      yield put({
        type: types.LOGIN_USER_FAIL
      })
    }
  } catch (error) {
    console.log("error form login", error);
  }
}

export function* watchCheckUser() {
  yield takeEvery(types.CHECK_USER, checkUserSaga)
}

export function* watchLoginUser() {
  yield takeEvery(types.LOGIN_USER, loginUserSaga)
}

export function* watchSignupUser() {
  yield takeEvery(types.SIGNUP_USER, signupUserSaga);
}

export function* watchRegister() {
  yield takeEvery(types.REGISTER, registerSaga)
}

export function* watchSetPassword() {
  yield takeEvery(types.SET_PASSWORD, setPasswordSaga)
}

export function* watchTrialPackage() {
  yield takeEvery(types.TRIAL_PACKAGE, trialPackageSaga)
}

export function* watchGetExpireDate() {
  yield takeEvery(types.GET_EXPIRE_DATE, getExpireDateSaga)
}

export function* watchForgotPassword() {
  yield takeEvery(types.FORGOT_PASSWORD, forgotPasswordSaga);
}

export function* watchResetPassword() {
  yield takeEvery(types.RESET_PASSWORD, resetPasswordSaga)
}

export function* watchImportMembers() {
  yield takeEvery(types.IMPORT_MEMBERS, importMembersSaga);
}

export function* watchGetGroupID() {
  yield takeEvery(types.GET_GROUP_ID, getGroupIDSaga);
}

export function* watchChangeEmail() {
  yield takeEvery(types.CHANGE_EMAIL, changeEmailSaga);
}

export function* watchTestPostService() {
  yield takeEvery(types.TEST_POST_SERVICE, testPostServiceSaga);
}

export function* watchUpdateProfile() {
  yield takeEvery(types.UPDATE_PROFILE, updateProfileSaga)
}

export function* watchCheckUpdateMaxFriends() {
  yield takeEvery(types.CHECK_UPDATE_MAX_FRIENDS, checkUpdateMaxFriendsSaga)
}

export function* watchCancelRecurringSaga() {
  yield takeEvery(types.CANCEL_RECURRING, cancelRecurringSaga)
}

export function* watchAddOrderInZortSaga() {
  yield takeEvery(types.ADD_ORDERIN_ZORT, addOrderInZortSaga)
}

export function* saga() {
  yield all([
    fork(watchLoginUser),
    fork(watchRegister),
    fork(watchCheckUser),
    fork(watchSignupUser),
    fork(watchSetPassword),
    fork(watchTrialPackage),
    fork(watchGetExpireDate),
    fork(watchForgotPassword),
    fork(watchResetPassword),
    fork(watchImportMembers),
    fork(watchGetGroupID),
    fork(watchChangeEmail),
    fork(watchTestPostService),
    fork(watchUpdateProfile),
    fork(watchCheckUpdateMaxFriends),
    fork(watchAddOrderInZortSaga),
    fork(watchCancelRecurringSaga),
  ]);
}

/* END OF SAGA Section */

/* REDUCER Section */

const INIT_STATE = {
  user: null,
  status: "default",
  loading: false,
  statusRegister: "default",
  statusSetPassword: "default",
  statusChangeEmail: "default",
  createAccount: null,
  statusForgotPassword: "default",
  statusAddZortOrder: "default",
  statusCancelRecurring: "default",
  statusGetExpireDate: "default"
};

export function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case types.CANCEL_RECURRING:
      return {
        ...state,
        statusCancelRecurring: "loading"
      }
    case types.CANCEL_RECURRING_SUCCESS:
      return {
        ...state,
        statusCancelRecurring: "success"
      }
    case types.CANCEL_RECURRING_FAIL:
      return {
        ...state,
        statusCancelRecurring: "fail"
      }
    case types.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        statusForgotPassword: "success"
      }
    case types.ADD_ORDERIN_ZORT_SUCCESS:
      return {
        ...state,
        statusAddZortOrder: "success"
      };
    case types.FORGOT_PASSWORD_FAIL:
      return {
        ...state,
        statusForgotPassword: "fail"
      }
    case types.UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          other_attributes: action.payload
        }
      }
    case types.GET_EXPIRE_DATE:
      return {
        ...state,
        user: {
          ...state.user,
          expire_date: action.payload
        },
        statusGetExpireDate: "loading"
      }
    case types.GET_EXPIRE_DATE_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          expire_date: action.payload
        },
        statusGetExpireDate: "success"
      }
    case types.GET_GROUP_ID_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          group_id: action.payload
        }
      }
    case types.CHECK_USER_SUCCESS:
      return {
        ...state,
        statusRegister: action.payload
      }
    case types.RESET_PASSWORD_SUCCESS:
      return {
        ...state
      };
    case types.SET_PASSWORD_SUCCESS:
      return {
        ...state,
        statusSetPassword: "success"
      }
    case types.RESET_STATUS_SET_PASSWORD:
      return {
        ...state,
        statusSetPassword: "default",
        statusForgotPassword: "default"
      }
    case types.LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        status: "success",
        statusRegister: "default"
      };
    case types.LOGIN_USER_FAIL:
      return {
        ...state,
        status: "fail",
        statusRegister: "default"
      };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        statusRegister: "success"
      }
    case types.REGISTER_FAIL:
      return {
        ...state,
        statusRegister: action.payload
      }
    case types.TRIAL_PACKAGE_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          expire_date: action.payload
        }
      };
    case types.CHANGE_EMAIL_SUCCESS:
      return {
        ...state,
        statusChangeEmail: action.payload
      }
    case types.LOGOUT_USER:
      return INIT_STATE;
    default:
      return { ...state };
  }
}