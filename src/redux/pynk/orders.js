import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { API } from "aws-amplify";

/* ACTION Section */

export const types = {
    CREATE_ORDER: "CREATE_ORDER",
    CREATE_ORDER_SUCCESS: "CREATE_ORDER_SUCCESS",
    CLEAR_STATUS: "CLEAR_STATUS",
    UPDATE_STATUS_CART: "UPDATE_STATUS_CART"
}

export const update_status_cart = (status) => ({
    type: types.UPDATE_STATUS_CART,
    payload: status
})

export const clear_status = () => ({
    type: types.CLEAR_STATUS
})

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
        const apiResult = yield call(
            createOrderSagaAsync,
            user_id,
            product_list,
            total_amount,
            customer_data,
            shipping_address,
            note
        );

        if (apiResult.results.message === "success") {
            yield put({
                type: types.CREATE_ORDER_SUCCESS,
                payload: apiResult.results.order_id
            })
        }


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
    status_cart: "default",
    current_order_id: null
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
                status_create_order: "success",
                current_order_id: action.payload
            }
        case types.CLEAR_STATUS:
            return {
                ...state,
                status_create_order: "default",

            }
        case types.UPDATE_STATUS_CART:
            return {
                ...state,
                status_cart: action.payload,
            }
        default:
            return { ...state };
    }
}