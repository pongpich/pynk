import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { API } from "aws-amplify";

/* ACTION Section */

export const types = {
    CREATE_ORDER: "CREATE_ORDER",
    CREATE_ORDER_SUCCESS: "CREATE_ORDER_SUCCESS"
}

export const create_order = (
    user_id,
    product_list,
    total_amount,
    customer_data,
    shipping_address,
    note
) => ({
    type: types.CREATE_ORDER,
    payload: {
        user_id,
        product_list,
        total_amount,
        customer_data,
        shipping_address,
        note
    }
});

/* END OF ACTION Section */

/* SAGA Section */

const createOrderSagaAsync = async (
    user_id,
    product_list,
    total_amount,
    customer_data,
    shipping_address,
    note
) => {
    try {
        const apiResult = await API.post("pynk", "/create_order", {
            body: {
                user_id,
                product_list,
                total_amount,
                customer_data,
                shipping_address,
                note
            }
        });
        return apiResult;
    } catch (error) {
        return { error, messsage: error.message };
    }
};

function* createOrderSaga({ payload }) {
    const {
        user_id,
        product_list,
        total_amount,
        customer_data,
        shipping_address,
        note
    } = payload

    try {
        yield call(
            createOrderSagaAsync,
            user_id,
            product_list,
            total_amount,
            customer_data,
            shipping_address,
            note
        );
        yield put({
            type: types.CREATE_ORDER_SUCCESS
        })
    } catch (error) {
        console.log("error from createOrderSaga :", error);
    }
}


export function* watchCreateOrder() {
    yield takeEvery(types.CREATE_ORDER, createOrderSaga)
}

export function* saga() {
    yield all([
        fork(watchCreateOrder),
    ]);
}

/* END OF SAGA Section */

/* REDUCER Section */

const INIT_STATE = {
    status_create_order: "default",
};

export function reducer(state = INIT_STATE, action) {
    switch (action.type) {
        case types.CREATE_ORDER:
            return {
                ...state,
                status_create_order: "loading"
            }
        case types.CREATE_ORDER_SUCCESS:
            return {
                ...state,
                status_create_order: "success"
            }
        default:
            return { ...state };
    }
}