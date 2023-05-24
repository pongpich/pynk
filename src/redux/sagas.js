import { all } from 'redux-saga/effects';
import { saga as authSagas } from './stay_fit/auth';
import { saga as createUser } from './stay_fit/createUser';
import { saga as exerciseProgram } from './stay_fit/exerciseProgram';
import { saga as shippingAddress } from './stay_fit/shippingAddress';
import { saga as basicInFormation } from './stay_fit/basicInFormation';
import { saga as update } from './stay_fit/update';
import { saga as get } from './stay_fit/get';
import { saga as exerciseVideos } from './stay_fit/exerciseVideos';
import { saga as updateAddress } from './stay_fit/updateAddress';
import { saga as challenges } from './stay_fit/challenges';
import { saga as dashboard } from './stay_fit/dashboard';

export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    createUser(),
    exerciseProgram(),
    shippingAddress(),
    basicInFormation(),
    update(),
    get(),
    exerciseVideos(),
    updateAddress(),
    challenges(),
    dashboard()
  ]);
}
