import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { API } from "aws-amplify";

export const types = {
  POSTTEST: "POSTTEST",
  POSTTEST_SUCCESS: "POSTTEST_SUCCESS",
};

export const postTest = (title, description) => ({
  type: types.POSTTEST,
  payload: { title, description },
});

const postTestSagaAsync = async (title, description) => {
  try {
    const apiResult = await API.post("pynk", "/postTest", {
      body: {
        title,
        description,
      },
    });
    return apiResult;
  } catch (error) {
    return { error, messsage: error.message };
  }
};

function* postTestSaga({ payload }) {
  const { title, description } = payload;
  try {
    yield call(postTestSagaAsync, title, description);
    yield put({
      type: types.POSTTEST_SUCCESS,
    });
  } catch (error) {
    return { error, messsage: error.message };
  }
}

export function* watchPostTestSaga() {
  yield takeEvery(types.POSTTEST, postTestSaga);
}
export function* saga() {
  yield all([fork(watchPostTestSaga)]);
}

const INIT_STATE = {
  status_post_test: "default",
};

export function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case types.POSTTEST:
      return { ...state, status_post_test: "loading" };
    case types.POSTTEST_SUCCESS:
      return { ...state, status_post_test: "success" };
    default:
      return { ...state };
  }
}
