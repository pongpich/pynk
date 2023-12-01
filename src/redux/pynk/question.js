import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { API } from "aws-amplify";

export const types = {
    INSERT_QUESTION: "INSERT_QUESTION",
    INSERT_QUESTION_SUCCESS: "INSERT_QUESTION_SUCCESS",
  };

  export const insertQuestion = (user_id, data) => ({
    type: types.INSERT_QUESTION,
    payload: { user_id, data },
  });

  const insertQuestionSagaAsync = async (user_id, data) => {
    try {
      const apiResult = await API.post("pynk", "/insert_question", {
        body: {
          user_id,
          data,
        },
      });
      return apiResult;
    } catch (error) {
      return { error, messsage: error.message };
    }
  };

  function* insertQuestionSaga({ payload }) {
    const { user_id, data } = payload;
    try {
      yield call(insertQuestionSagaAsync, user_id, data);
      yield put({
        type: types.INSERT_QUESTION_SUCCESS,
      });
    } catch (error) {
      return { error, messsage: error.message };
    }
  }

  export function* watchInsertQuestionSaga() {
    yield takeEvery(types.INSERT_QUESTION, insertQuestionSaga);
  }
  export function* saga() {
    yield all([fork(watchInsertQuestionSaga)]);
  }
  
  const INIT_STATE = {
    status_insert_question: "default",
  };
  
  export function reducer(state = INIT_STATE, action) {
    switch (action.type) {
      case types.INSERT_QUESTION:
        return { ...state, status_post_test: "loading" };
      case types.INSERT_QUESTION_SUCCESS:
        return { ...state, status_post_test: "success" };
      default:
        return { ...state };
    }
  }