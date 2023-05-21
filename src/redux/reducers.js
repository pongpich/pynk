import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';

import settings from './settings/reducer';
import { reducer as authUser} from './auth';
import { reducer as createUser} from './createUser';
import { reducer as exerciseProgram} from './exerciseProgram';
import { reducer as shippingAddress} from './shippingAddress';
import { reducer as basicInFormation} from './basicInFormation';
import { reducer as update} from './update';
import { reducer as get} from './get';
import { reducer as exerciseVideos} from './exerciseVideos';
import { reducer as updateAddress} from './updateAddress';
import { reducer as challenges} from './challenges';
import { reducer as dashboard} from './dashboard';


const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: hardSet
};

const reducers = combineReducers({
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
  dashboard
});

const persistedReducer = persistReducer(persistConfig, reducers)

export default persistedReducer;