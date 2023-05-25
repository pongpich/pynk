import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { API } from "aws-amplify";

/* ACTION Section */

export const types = {
  CREATE_CUSTOM_WEEK_FOR_USER: "CREATE_CUSTOM_WEEK_FOR_USER",
  CREATE_CUSTOM_WEEK_FOR_USER_SUCCESS: "CREATE_CUSTOM_WEEK_FOR_USER_SUCCESS",
  UPDATE_PLAYTIME: "UPDATE_PLAYTIME",
  UPDATE_PLAYTIME_SUCCESS: "UPDATE_PLAYTIME_SUCCESS",
  UPDATE_PLAYTIME_LASTWEEK: "UPDATE_PLAYTIME_LASTWEEK",
  UPDATE_PLAYTIME_LASTWEEK_SUCCESS: "UPDATE_PLAYTIME_LASTWEEK_SUCCESS",
  UPDATE_PLAYLIST: "UPDATE_PLAYLIST",
  UPDATE_PLAYLIST_SUCCESS: "UPDATE_PLAYLIST_SUCCESS",
  UPDATE_BODY_INFO: "UPDATE_BODY_INFO",
  UPDATE_BODY_INFO_SUCCESS: "UPDATE_BODY_INFO_SUCCESS",
  VIDEO_LIST_FOR_USER: "VIDEO_LIST_FOR_USER",
  VIDEO_LIST_FOR_USER_SUCCESS: "VIDEO_LIST_FOR_USER_SUCCESS",
  VIDEO_LIST_FOR_USER_FAIL: "VIDEO_LIST_FOR_USER_FAIL",
  GET_WEEK: "GET_WEEK",
  VIDEO_LIST_FOR_USER_LASTWEEK: "VIDEO_LIST_FOR_USER_LASTWEEK",
  VIDEO_LIST_FOR_USER_LASTWEEK_SUCCESS: "VIDEO_LIST_FOR_USER_LASTWEEK_SUCCESS",
  VIDEO_LIST_FOR_USER_LASTWEEK_FAIL: "VIDEO_LIST_FOR_USER_LASTWEEK_FAIL",
  GET_LASTWEEK: "GET_LASTWEEK",
  RANDOM_VIDEO: "RANDOM_VIDEO",
  RANDOM_VIDEO_SUCCESS: "RANDOM_VIDEO_SUCCESS",
  RANDOM_VIDEO_FAIL: "RANDOM_VIDEO_FAIL",
  SELECT_CHANGE_VIDEO: "SELECT_CHANGE_VIDEO",
  SELECT_CHANGE_VIDEO_SUCCESS: "SELECT_CHANGE_VIDEO_SUCCESS",
  SELECT_CHANGE_VIDEO_FAIL: "SELECT_CHANGE_VIDEO_FAIL",
  RESET_STATUS: "RESET_STATUS",
  SELECT_PROGRAM_IN_WEEK: "SELECT_PROGRAM_IN_WEEK",
  SELECT_PROGRAM_IN_WEEK_SUCCESS: "SELECT_PROGRAM_IN_WEEK_SUCCESS",
  SELECT_MEMBER_INFO: "SELECT_MEMBER_INFO",
  SELECT_MEMBER_INFO_SUCCESS: "SELECT_MEMBER_INFO_SUCCESS",
  SELECT_BODY_INFO: "SELECT_BODY_INFO",
  SELECT_BODY_INFO_SUCCESS: "SELECT_BODY_INFO_SUCCESS",
  DELETE_PROGRAM_IN_WEEK: "DELETE_PROGRAM_IN_WEEK",
  CLEAR_VIDEO_LIST: "CLEAR_VIDEO_LIST",
  CLEAR_VIDEOS: "CLEAR_VIDEOS",
}

export const selectBodyInfo = (email) => ({
  type: types.SELECT_BODY_INFO,
  payload: {
    email
  }
});

export const selectMemberInfo = (email) => ({
  type: types.SELECT_MEMBER_INFO,
  payload: {
    email
  }
});

export const selectProgramInWeek = (email) => ({
  type: types.SELECT_PROGRAM_IN_WEEK,
  payload: {
    email
  }
});

export const deleteProgramInWeek = (email) => ({
  type: types.DELETE_PROGRAM_IN_WEEK,
  payload: {
    email
  }
});

export const createCustomWeekForUser = (user_id, weight, start_date, expire_date, offset, displayName) => ({
  type: types.CREATE_CUSTOM_WEEK_FOR_USER,
  payload: {
    user_id,
    weight,
    start_date,
    expire_date,
    offset,
    displayName
  }
});

export const clearVideoList = () => ({
  type: types.CLEAR_VIDEO_LIST
})

export const clearVideos = () => ({
  type: types.CLEAR_VIDEOS
})

export const resetStatus = () => ({
  type: types.RESET_STATUS
})

export const selectChangeVideo = (video_id, category, type, user_id) => ({
  type: types.SELECT_CHANGE_VIDEO,
  payload: {
    video_id,
    category,
    type,
    user_id
  }
})

export const randomVideo = (video_id, category, type, user_id) => ({
  type: types.RANDOM_VIDEO,
  payload: {
    video_id,
    category,
    type,
    user_id
  }
})

export const updateBodyInfo = (user_id, start_date, expire_date, other_attributes) => ({
  type: types.UPDATE_BODY_INFO,
  payload: {
    user_id,
    start_date,
    expire_date,
    other_attributes
  }
})

export const updatePlaylist = (user_id, start_date, day_number, playlist, exerciseVideo) => ({
  type: types.UPDATE_PLAYLIST,
  payload: {
    user_id,
    start_date,
    day_number,
    playlist,
    exerciseVideo
  }
})

export const updatePlaytime = (user_id, start_date, expire_date, day_number, video_number, play_time, duration, exerciseVideo) => ({
  type: types.UPDATE_PLAYTIME,
  payload: {
    user_id,
    start_date,
    expire_date,
    day_number,
    video_number,
    play_time,
    duration,
    exerciseVideo
  }
})

export const updatePlaytimeLastWeek = (user_id, start_date, expire_date, day_number, video_number, play_time, duration, exerciseVideo) => ({
  type: types.UPDATE_PLAYTIME_LASTWEEK,
  payload: {
    user_id,
    start_date,
    expire_date,
    day_number,
    video_number,
    play_time,
    duration,
    exerciseVideo
  }
})

export const videoListForUserLastWeek = (
  user_id,
  weight,
  start_date,
  expire_date,
  offset) => ({
    type: types.VIDEO_LIST_FOR_USER_LASTWEEK,
    payload: {
      user_id,
      weight,
      start_date,
      expire_date,
      offset
    }
  });

export const videoListForUser = (
  user_id,
  weight,
  start_date,
  expire_date,
  offset) => ({
    type: types.VIDEO_LIST_FOR_USER,
    payload: {
      user_id,
      weight,
      start_date,
      expire_date,
      offset
    }
  });

/* END OF ACTION Section */

/* SAGA Section */

const updatePlaylistSagaAsync = async (
  user_id,
  start_date,
  day_number,
  playlist
) => {
  try {
    const apiResult = await API.put("bebe_platform", "/playlist", {
      body: {
        user_id,
        start_date,
        day_number,
        playlist
      }
    });
    return apiResult;
  } catch (error) {
    return { error, messsage: error.message };
  }
}

const updatePlaytimeSagaAsync = async (
  user_id,
  start_date,
  expire_date,
  day_number,
  video_number,
  play_time,
  duration
) => {
  try {
    const apiResult = await API.put("bebe_platform", "/play_time", {
      body: {
        user_id,
        start_date,
        expire_date,
        day_number,
        video_number,
        play_time,
        duration
      }
    });
    return apiResult;
  } catch (error) {
    return { error, messsage: error.message };
  }
}

const updatePlaytimeLastWeekSagaAsync = async (
  user_id,
  start_date,
  expire_date,
  day_number,
  video_number,
  play_time,
  duration
) => {
  try {
    const apiResult = await API.put("bebe_platform", "/play_time_lastweek", {
      body: {
        user_id,
        start_date,
        expire_date,
        day_number,
        video_number,
        play_time,
        duration
      }
    });
    return apiResult;
  } catch (error) {
    return { error, messsage: error.message };
  }
}

const videoListForUserLastWeekSagaAsync = async (
  user_id,
  weight,
  start_date,
  expire_date,
  offset
) => {
  try {
    const apiResult = await API.get("bebe_platform", "/videoListForUserLastWeek", {
      queryStringParameters: {
        user_id,
        weight,
        start_date,
        expire_date,
        offset
      }
    });
    return apiResult
  } catch (error) {
    console.log("error :", error);
    return { error, messsage: error.message }
  }
}

const videoListForUserSagaAsync = async (
  user_id,
  weight,
  start_date,
  expire_date,
  offset
) => {
  try {
    const apiResult = await API.get("bebe_platform", "/videoListForUser", {
      queryStringParameters: {
        user_id,
        weight,
        start_date,
        expire_date,
        offset
      }
    });
    return apiResult
  } catch (error) {
    console.log("error :", error);
    return { error, messsage: error.message }
  }
}

const selectChangeVideoSagaAsync = async (
  video_id,
  category,
  type,
  user_id
) => {
  try {
    const apiResult = await API.get("bebe_platform", "/selectChangeVideo", {
      queryStringParameters: {
        video_id,
        category,
        type,
        user_id
      }
    });
    return apiResult;
  } catch (error) {

  }
}

const randomVideoSagaAsync = async (
  video_id,
  category,
  type,
  user_id
) => {
  try {
    const apiResult = await API.get("bebe_platform", "/randomVideo", {
      queryStringParameters: {
        video_id,
        category,
        type,
        user_id
      }
    });
    return apiResult;
  } catch (error) {
    return { error, messsage: error.message };
  }
}

const updateBodyInfoSagaAsync = async (
  user_id,
  start_date,
  expire_date,
  other_attributes
) => {
  try {
    const apiResult = await API.post("bebe_platform", "/updateBodyInfo", {
      body: {
        user_id,
        start_date,
        expire_date,
        other_attributes
      }
    });
    return apiResult;
  } catch (error) {
    return { error, messsage: error.message };
  }
}

const selectProgramInWeekSagaAsync = async (
  email
) => {
  try {
    const apiResult = await API.get("bebe_platform", "/selectProgramInWeek", {
      queryStringParameters: {
        email
      }
    });
    return apiResult;
  } catch (error) {
    return { error, messsage: error.message };
  }
}

const selectMemberInfoSagaAsync = async (
  email
) => {
  try {
    const apiResult = await API.get("bebe_platform", "/selectMemberInfo", {
      queryStringParameters: {
        email
      }
    });
    return apiResult;
  } catch (error) {
    return { error, messsage: error.message };
  }
}

const selectBodyInfoSagaAsync = async (
  email
) => {
  try {
    const apiResult = await API.get("bebe_platform", "/selectBodyInfo", {
      queryStringParameters: {
        email
      }
    });
    return apiResult;
  } catch (error) {
    return { error, messsage: error.message };
  }
}

const deleteProgramInWeekSagaAsync = async (
  email
) => {
  try {
    const apiResult = await API.post("bebe_platform", "/deleteProgramInWeek", {
      body: {
        email
      }
    });
    return apiResult;
  } catch (error) {
    return { error, messsage: error.message };
  }
}

const createCustomWeekForUserSagaAsync = async (
  user_id,
  weight,
  start_date,
  expire_date,
  offset,
  displayName
) => {
  try {
    const apiResult = await API.post("bebe_platform", "/createCustomWeekForUser", {
      body: {
        user_id,
        weight,
        start_date,
        expire_date,
        offset,
        displayName
      }
    });
    return apiResult;
  } catch (error) {
    return { error, messsage: error.message };
  }
}

function* selectChangeVideoSaga({ payload }) {
  const {
    video_id,
    category,
    type,
    user_id
  } = payload
  try {
    const apiResult = yield call(
      selectChangeVideoSagaAsync,
      video_id,
      category,
      type,
      user_id
    );
    if (apiResult.results.message === "no_video") {
      yield put({
        type: types.SELECT_CHANGE_VIDEO_FAIL
      })
    } else {
      yield put({
        type: types.SELECT_CHANGE_VIDEO_SUCCESS,
        payload: apiResult.results.videos
      })
    }
  } catch (error) {
    return { error, messsage: error.message };
  }
}

function* randomVideoSaga({ payload }) {
  const {
    video_id,
    category,
    type,
    user_id
  } = payload
  try {
    const apiResult = yield call(
      randomVideoSagaAsync,
      video_id,
      category,
      type,
      user_id
    );
    if (apiResult.results.message === "no_video") {
      console.log("user :", apiResult.results);
      yield put({
        type: types.RANDOM_VIDEO_FAIL,
      })
    } else {
      yield put({
        type: types.RANDOM_VIDEO_SUCCESS,
        payload: apiResult.results.video
      })
    }
  } catch (error) {
    return { error, messsage: error.message };
  }
}

function* updatePlaylistSaga({ payload }) {
  const {
    user_id,
    start_date,
    day_number,
    playlist,
    exerciseVideo
  } = payload
  try {
    const apiResult = yield call(
      updatePlaylistSagaAsync,
      user_id,
      start_date,
      day_number,
      playlist
    );
    let keyDay = "";
    switch (day_number) {
      case 0:
        keyDay = "day1";
        break;
      case 1:
        keyDay = "day2";
        break;
      case 2:
        keyDay = "day3";
        break;
      case 3:
        keyDay = "day4";
        break;
      default:
        break;
    }
    yield put({
      type: types.UPDATE_PLAYLIST_SUCCESS,
      payload: exerciseVideo
    });
    return apiResult;
  } catch (error) {
    return { error, messsage: error.message };
  }
}

function* updateBodyInfoSaga({ payload }) {
  const {
    user_id,
    start_date,
    expire_date,
    other_attributes
  } = payload
  try {
    yield call(
      updateBodyInfoSagaAsync,
      user_id,
      start_date,
      expire_date,
      other_attributes
    );
    yield put({
      type: types.UPDATE_BODY_INFO_SUCCESS
    })
  } catch (error) {
    console.log("error from updateBodyInfo :", error);
  }
}

function* selectProgramInWeekSaga({ payload }) {
  const {
    email
  } = payload
  try {
    const apiResult = yield call(
      selectProgramInWeekSagaAsync,
      email
    );

    yield put({
      type: types.SELECT_PROGRAM_IN_WEEK_SUCCESS,
      payload: apiResult.results
    });

    return apiResult;
  } catch (error) {
    return { error, messsage: error.message };
  }
}

function* selectMemberInfoSaga({ payload }) {
  const {
    email
  } = payload
  try {
    const apiResult = yield call(
      selectMemberInfoSagaAsync,
      email
    );

    yield put({
      type: types.SELECT_MEMBER_INFO_SUCCESS,
      payload: apiResult.results.memberInfo
    });

    return apiResult;
  } catch (error) {
    return { error, messsage: error.message };
  }
}

function* selectBodyInfoSaga({ payload }) {
  const {
    email
  } = payload
  try {
    const apiResult = yield call(
      selectBodyInfoSagaAsync,
      email
    );

    yield put({
      type: types.SELECT_BODY_INFO_SUCCESS,
      payload: apiResult.results.bodyInfo
    });

    return apiResult;
  } catch (error) {
    return { error, messsage: error.message };
  }
}

function* deleteProgramInWeekSaga({ payload }) {
  const {
    email
  } = payload
  try {
    const apiResult = yield call(
      deleteProgramInWeekSagaAsync,
      email
    );
    return apiResult;
  } catch (error) {
    return { error, messsage: error.message };
  }
}

function* updatePlaytimeSaga({ payload }) {
  const {
    user_id,
    start_date,
    expire_date,
    day_number,
    video_number,
    play_time,
    duration,
    exerciseVideo
  } = payload
  try {
    const apiResult = yield call(
      updatePlaytimeSagaAsync,
      user_id,
      start_date,
      expire_date,
      day_number,
      video_number,
      play_time,
      duration
    );
    let keyDay = "";
    switch (day_number) {
      case 0:
        keyDay = "day1";
        break;
      case 1:
        keyDay = "day2";
        break;
      case 2:
        keyDay = "day3";
        break;
      case 3:
        keyDay = "day4";
        break;
      default:
        break;
    }
    yield put({
      type: types.UPDATE_PLAYTIME_SUCCESS,
      payload: exerciseVideo
    });
    return apiResult;
  } catch (error) {
    return { error, messsage: error.message };
  }
}

function* updatePlaytimeLastWeekSaga({ payload }) {
  const {
    user_id,
    start_date,
    expire_date,
    day_number,
    video_number,
    play_time,
    duration,
    exerciseVideo
  } = payload
  try {
    const apiResult = yield call(
      updatePlaytimeLastWeekSagaAsync,
      user_id,
      start_date,
      expire_date,
      day_number,
      video_number,
      play_time,
      duration,
    );
    let keyDay = "";
    switch (day_number) {
      case 0:
        keyDay = "day1";
        break;
      case 1:
        keyDay = "day2";
        break;
      case 2:
        keyDay = "day3";
        break;
      case 3:
        keyDay = "day4";
        break;
      default:
        break;
    }
    yield put({
      type: types.UPDATE_PLAYTIME_LASTWEEK_SUCCESS,
      payload: exerciseVideo
    });
    return apiResult;
  } catch (error) {
    return { error, messsage: error.message };
  }
}


function* videoListForUserLastWeekSaga({ payload }) {
  const {
    user_id,
    weight,
    start_date,
    expire_date,
    offset
  } = payload
  try {
    const apiResult = yield call(
      videoListForUserLastWeekSagaAsync,
      user_id,
      weight,
      start_date,
      expire_date,
      offset
    );
    if (apiResult.results.length > 0) {
      const activities = JSON.parse(apiResult.results[0].activities);
      const lastweek = JSON.parse(apiResult.results[0].week_in_program);
      if (lastweek > 0) { // lastweek > 0 คือ ไม่ใช่สัปดาห์ที่ 1
        yield put({
          type: types.VIDEO_LIST_FOR_USER_LASTWEEK_SUCCESS,
          payload: activities
        })
        yield put({
          type: types.GET_LASTWEEK,
          payload: lastweek
        })

      } else {
        yield put({ // lastweek <= 0 กำหนด isFirstWeek = true
          type: types.VIDEO_LIST_FOR_USER_LASTWEEK_FAIL
        })
      }
    }
  } catch (error) {
    console.log("error form videoListForUserSaga", error);
  }
}

function* videoListForUserSaga({ payload }) {
  const {
    user_id,
    weight,
    start_date,
    expire_date,
    offset
  } = payload
  try {
    const apiResult = yield call(
      videoListForUserSagaAsync,
      user_id,
      weight,
      start_date,
      expire_date,
      offset
    );
    if (apiResult.results.length > 0) {
      const activities = JSON.parse(apiResult.results[0].activities);
      const week = JSON.parse(apiResult.results[0].week_in_program);
      yield put({
        type: types.VIDEO_LIST_FOR_USER_SUCCESS,
        payload: activities
      })
      yield put({
        type: types.GET_WEEK,
        payload: week
      })
    } else if (apiResult.results.message === 'no_video') {
      yield put({
        type: types.VIDEO_LIST_FOR_USER_FAIL
      })
    }
  } catch (error) {
    console.log("error form videoListForUserSaga", error);
  }
}

function* createCustomWeekForUserSaga({ payload }) {
  const {
    user_id,
    weight,
    start_date,
    expire_date,
    offset,
    displayName
  } = payload

  try {
    yield call(
      createCustomWeekForUserSagaAsync,
      user_id,
      weight,
      start_date,
      expire_date,
      offset,
      displayName
    );
    yield put({
      type: types.CREATE_CUSTOM_WEEK_FOR_USER_SUCCESS
    })
  } catch (error) {
    console.log("error from createCustomWeekForUser :", error);
  }
}

export function* watchUpdatePlaytime() {
  yield takeEvery(types.UPDATE_PLAYTIME, updatePlaytimeSaga)
}

export function* watchUpdatePlaytimeLastWeek() {
  yield takeEvery(types.UPDATE_PLAYTIME_LASTWEEK, updatePlaytimeLastWeekSaga)
}

export function* watchUpdatePlaylist() {
  yield takeEvery(types.UPDATE_PLAYLIST, updatePlaylistSaga)
}

export function* watchVideoListForUser() {
  yield takeEvery(types.VIDEO_LIST_FOR_USER, videoListForUserSaga)
}

export function* watchVideoListForUserLastWeek() {
  yield takeEvery(types.VIDEO_LIST_FOR_USER_LASTWEEK, videoListForUserLastWeekSaga)
}

export function* watchRandomVideo() {
  yield takeEvery(types.RANDOM_VIDEO, randomVideoSaga)
}

export function* watchSelectChangeVideo() {
  yield takeEvery(types.SELECT_CHANGE_VIDEO, selectChangeVideoSaga)
}

export function* watchCreateCustomWeekForUser() {
  yield takeEvery(types.CREATE_CUSTOM_WEEK_FOR_USER, createCustomWeekForUserSaga)
}

export function* watchUpdateBodyInfo() {
  yield takeEvery(types.UPDATE_BODY_INFO, updateBodyInfoSaga)
}

export function* watchSelectProgramInWeek() {
  yield takeEvery(types.SELECT_PROGRAM_IN_WEEK, selectProgramInWeekSaga)
}

export function* watchSelectMemberInfo() {
  yield takeEvery(types.SELECT_MEMBER_INFO, selectMemberInfoSaga)
}

export function* watchSelectBodyInfo() {
  yield takeEvery(types.SELECT_BODY_INFO, selectBodyInfoSaga)
}

export function* watchDeleteProgramInWeek() {
  yield takeEvery(types.DELETE_PROGRAM_IN_WEEK, deleteProgramInWeekSaga)
}

export function* saga() {
  yield all([
    fork(watchUpdatePlaytime),
    fork(watchUpdatePlaytimeLastWeek),
    fork(watchUpdatePlaylist),
    fork(watchVideoListForUser),
    fork(watchVideoListForUserLastWeek),
    fork(watchRandomVideo),
    fork(watchSelectChangeVideo),
    fork(watchCreateCustomWeekForUser),
    fork(watchUpdateBodyInfo),
    fork(watchSelectProgramInWeek),
    fork(watchSelectMemberInfo),
    fork(watchSelectBodyInfo),
    fork(watchDeleteProgramInWeek)
  ]);
}

/* END OF SAGA Section */

/* REDUCER Section */

const INIT_STATE = {
  exerciseVideo: [[], [], [], []],
  exerciseVideoLastWeek: [[], [], [], []],
  week: 0,
  lastweek: 0,
  isFirstWeek: false,
  status: "default",
  video: {},
  videos: [],
  statusVideoList: "default",
  statusUpdateBodyInfo: "default",
  programInWeek: [],
  memberInfo: [],
  bodyInfo: [],
};

export function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case types.UPDATE_BODY_INFO_SUCCESS:
      return {
        ...state,
        statusUpdateBodyInfo: "success"
      }
    case types.CREATE_CUSTOM_WEEK_FOR_USER_SUCCESS:
      return {
        ...state,
        statusVideoList: "default",
        statusUpdateBodyInfo: "default"
      }
    case types.UPDATE_PLAYLIST:
      return {
        ...state,
        status: "processing"
      };
    case types.UPDATE_PLAYLIST_SUCCESS:
      return {
        ...state,
        exerciseVideo: action.payload,
        status: "success"
      };
    case types.UPDATE_PLAYTIME_SUCCESS:
      return {
        ...state,
        exerciseVideo: action.payload
      };
    case types.UPDATE_PLAYTIME_LASTWEEK_SUCCESS:
      return {
        ...state,
        exerciseVideoLastWeek: action.payload
      };
    case types.VIDEO_LIST_FOR_USER_LASTWEEK_SUCCESS:
      return {
        ...state,
        exerciseVideoLastWeek: action.payload,
        isFirstWeek: false
      };
    case types.GET_LASTWEEK:
      return {
        ...state,
        lastweek: action.payload
      };
    case types.VIDEO_LIST_FOR_USER_LASTWEEK_FAIL:
      return {
        ...state,
        isFirstWeek: true
      }
    case types.VIDEO_LIST_FOR_USER_SUCCESS:
      return {
        ...state,
        exerciseVideo: action.payload
      };
    case types.GET_WEEK:
      return {
        ...state,
        week: action.payload
      };
    case types.VIDEO_LIST_FOR_USER_FAIL:
      return {
        ...state,
        statusVideoList: "no_video"
      }
    case types.RANDOM_VIDEO_SUCCESS:
      return {
        ...state,
        video: action.payload
      };
    case types.SELECT_CHANGE_VIDEO_SUCCESS:
      return {
        ...state,
        videos: action.payload
      };
    case types.SELECT_PROGRAM_IN_WEEK_SUCCESS:
      return {
        ...state,
        programInWeek: JSON.stringify(action.payload)
      };
    case types.SELECT_MEMBER_INFO_SUCCESS:
      return {
        ...state,
        memberInfo: action.payload
      };
    case types.SELECT_BODY_INFO_SUCCESS:
      return {
        ...state,
        bodyInfo: action.payload
      };
    case types.RESET_STATUS:
      return {
        ...state,
        status: "default"
      };
    case types.CLEAR_VIDEOS:
      return {
        ...state,
        videos: []
      };
    case types.CLEAR_VIDEO_LIST:
      return INIT_STATE;
    default:
      return { ...state };
  }
}