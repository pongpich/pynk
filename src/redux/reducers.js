import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";

import settings from "./settings/reducer";

//ของ Pynk
import { reducer as dashboardPynk } from "./pynk/post";
import { reducer as auth } from "./pynk/auth";
import { reducer as orders } from "./pynk/orders";
import { reducer as getPynk } from "./pynk/get";
import { reducer as admin } from "./pynk/admin";
import { reducer as contents } from "./pynk/contents";

//ของ Bebe Stay Fit
import { reducer as authUser } from "./stay_fit/auth";
import { reducer as createUser } from "./stay_fit/createUser";
import { reducer as exerciseProgram } from "./stay_fit/exerciseProgram";
import { reducer as shippingAddress } from "./stay_fit/shippingAddress";
import { reducer as basicInFormation } from "./stay_fit/basicInFormation";
import { reducer as update } from "./stay_fit/update";
import { reducer as get } from "./stay_fit/get";
import { reducer as exerciseVideos } from "./stay_fit/exerciseVideos";
import { reducer as updateAddress } from "./stay_fit/updateAddress";
import { reducer as challenges } from "./stay_fit/challenges";
import { reducer as dashboard } from "./stay_fit/dashboard";

//ของ Bebe Platform
import { reducer as authPlatform } from "./platform/auth";
import { reducer as exerciseVideosPlatform } from "./platform/exerciseVideos";
import { reducer as exerciseProgramPlatform } from "./platform/exerciseProgram";
import { reducer as paymentPlatform } from "./platform/payment";
import { reducer as challengesPlatform } from "./platform/challenges";
import { reducer as dashboardPlatform } from "./platform/dashboard";
import { reducer as getPlatform } from "./platform/get";
import { reducer as updatePlatform } from "./platform/update";

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: hardSet,
};

const reducers = combineReducers({
  //ของ Bebe Stay Fit
  authUser,
  settings,
  createUser,
  exerciseProgram,
  shippingAddress,
  basicInFormation,
  update,
  get,
  exerciseVideos,
  updateAddress,
  challenges,
  dashboard,

  //ของ Bebe Platform
  authPlatform,
  exerciseVideosPlatform,
  exerciseProgramPlatform,
  paymentPlatform,
  challengesPlatform,
  dashboardPlatform,
  getPlatform,
  updatePlatform,

  //ของ Pynk
  dashboardPynk,
  getPynk,
  auth,
  orders,
  admin,
  contents,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export default persistedReducer;
