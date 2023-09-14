import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { API } from "aws-amplify";

/* ACTION Section */

export const types = {
    LOGIN: "LOGIN",
    LOGIN_SUCCESS: "LOGIN_SUCCESS",
    LOGIN_FAIL: "LOGIN_FAIL",
    LOGOUT: "LOGOUT",
    REGISTER: "REGISTER",
    REGISTER_SUCCESS: "REGISTER_SUCCESS",
    REGISTER_FAIL: "REGISTER_FAIL",
}

export const login = (email, password) => ({
    type: types.LOGIN,
    payload: {
        email,
        password
    }
});

export const logout = () => ({
    type: types.LOGOUT,
});

export const register = (email, password, first_name, last_name, phone) => ({
    type: types.REGISTER,
    payload: {
        email,
        password,
        first_name, 
        last_name, 
        phone
    }
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
            }
        });
        return apiResult;
    } catch (error) {
        return { error, messsage: error.message };
    }
};

const loginSagaAsync = async (
    email,
    password
) => {
    try {
        const apiResult = await API.get("pynk", "/login", {
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


function* loginSaga({ payload }) {
    const {
        email,
        password
    } = payload

    try {
        const loginResult = yield call(
            loginSagaAsync,
            email,
            password
        );

        if (loginResult.results.message === "success") {
            yield put({
                type: types.LOGIN_SUCCESS,
                payload: loginResult.results.user
            })
        } else if (loginResult.results.message === "fail" || loginResult.results.message === "no_user") {
            yield put({
                type: types.LOGIN_FAIL
            })
        }
    } catch (error) {
        console.log("error form login", error);
    }
}

function* registerSaga({ payload }) {
    const {
        email,
        password,
        first_name, 
        last_name, 
        phone
    } = payload

    try {
        yield call(
            registerSagaAsync,
            email,
            password,
            first_name, 
            last_name, 
            phone
        );
        yield put({
            type: types.REGISTER_SUCCESS
        })
    } catch (error) {
        yield put({
            type: types.REGISTER_FAIL
        })
        console.log("error from register :", error);
    }
}

export function* watchLogin() {
    yield takeEvery(types.LOGIN, loginSaga)
}

export function* watchRegister() {
    yield takeEvery(types.REGISTER, registerSaga)
}

export function* saga() {
    yield all([
        fork(watchLogin),
        fork(watchRegister),
    ]);
}

/* END OF SAGA Section */

/* REDUCER Section */

const INIT_STATE = {
    statusLogin: "default",
    user: null,
    statusRegister: "default",
};

export function reducer(state = INIT_STATE, action) {
    switch (action.type) {
        case types.LOGIN:
            return {
                ...state,
                statusLogin: "loading"
            };
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                statusLogin: "success"
            };
        case types.LOGIN_FAIL:
            return {
                ...state,
                statusLogin: "fail"
            };
        case types.REGISTER:
            return {
                ...state,
                statusRegister: "loading"
            }
        case types.REGISTER_SUCCESS:
            return {
                ...state,
                statusRegister: "success"
            }
        case types.REGISTER_FAIL:
            return {
                ...state,
                statusRegister: "fail"
            }
        case types.LOGOUT:
            return INIT_STATE;
        default:
            return { ...state };
    }
}