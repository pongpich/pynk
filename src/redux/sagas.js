import { all } from 'redux-saga/effects';

//ของ Bebe Stay Fit
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

//ของ Bebe Platform
import { saga as authSagasPlatform } from './platform/auth';
import { saga as exerciseVideosPlatform } from './platform/exerciseVideos';
import { saga as exerciseProgramPlatform } from './platform/exerciseProgram';
import { saga as paymentPlatform } from './platform/payment';
import { saga as challengesPlatform } from './platform/challenges';
import { saga as dashboardPlatform } from './platform/dashboard';
import { saga as getPlatform } from './platform/get';
import { saga as updatePlatform } from './platform/update';

//ของ Pynk

export default function* rootSaga(getState) {
  yield all([
    //ของ Bebe Stay Fit
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
    dashboard(),

    //ของ Bebe Platform
    authSagasPlatform(),
    exerciseVideosPlatform(),
    exerciseProgramPlatform(),
    paymentPlatform(),
    challengesPlatform(),
    dashboardPlatform(),
    getPlatform(),
    updatePlatform(),

    //ของ Pynk

  ]);
}
