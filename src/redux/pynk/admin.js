import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { API } from "aws-amplify";

/* ACTION Section */
export const types = {
    GET_PRODUCT_DETAIL: "GET_PRODUCT_DETAIL",
    GET_PRODUCT_DETAIL_SUCCESS: "GET_PRODUCT_DETAIL_SUCCESS",
    GET_PRODUCT_DETAIL_FAIL: "GET_PRODUCT_DETAIL_FAIL",
    ADD_PRODUCT: "ADD_PRODUCT",
    ADD_PRODUCT_SUCCESS: "ADD_PRODUCT_SUCCESS",
    ADD_PRODUCT_FAIL: "ADD_PRODUCT_FAIL",
};

/* ADD_PRODUCT */
export const add_product = (
    product_id,
    product_name,
    category,
    price,
    available_stock,
    image_list,
    description,
    nutritional_value,
    detail
) => ({
    type: types.ADD_PRODUCT,
    payload: {
        product_id,
        product_name,
        category,
        price,
        available_stock,
        image_list,
        description,
        nutritional_value,
        detail
    }
});

const addProductSagaAsync = async (
    product_id,
    product_name,
    category,
    price,
    available_stock,
    image_list,
    description,
    nutritional_value,
    detail
) => {
    try {
        const apiResult = await API.post("pynk", "/add_product", {
            body: {
                product_id,
                product_name,
                category,
                price,
                available_stock,
                image_list,
                description,
                nutritional_value,
                detail
            },
        });
        return apiResult;
    } catch (error) {
        return { error, messsage: error.message };
    }
};

function* addProductSaga({ payload }) {
    const {
        product_id,
        product_name,
        category,
        price,
        available_stock,
        image_list,
        description,
        nutritional_value,
        detail
    } = payload;

    try {
        const apiResult = yield call(
            addProductSagaAsync,
            product_id,
            product_name,
            category,
            price,
            available_stock,
            image_list,
            description,
            nutritional_value,
            detail
        );

        if (apiResult.results.message === "success") {
            yield put({
                type: types.ADD_PRODUCT_SUCCESS
            })
        }
    } catch (error) {
        
        yield put({
            type: types.ADD_PRODUCT_FAIL
        })
        console.log("error from addProductSaga :", error);
    }
};

export function* watchAddProductSaga() {
    yield takeEvery(types.ADD_PRODUCT, addProductSaga);
};

/* GET_PRODUCT_DETAIL  */
export const getProductDetail = (sku) => ({
    type: types.GET_PRODUCT_DETAIL,
    payload: {
        sku
    }
});

const getProductDetailSagaAsync = async (
    sku
) => {
    try {
        const apiResult = await API.get("pynk", "/getProductDetail", {
            queryStringParameters: {
                sku
            },
        });
        return apiResult;
    } catch (error) {
        return { error, messsage: error.message };
    }
};

function* getProductDetailSaga({ payload }) {
    const {
        sku
    } = payload

    try {
        const apiResult = yield call(
            getProductDetailSagaAsync,
            sku
        );

        if (apiResult.results.message === "success") {
            yield put({
                type: types.GET_PRODUCT_DETAIL_SUCCESS,
                payload: apiResult.results.product
            })
        } else if (apiResult.results.message === "fail") {
            yield put({
                type: types.GET_PRODUCT_DETAIL_FAIL
            })
        }

    } catch (error) {
        console.log("error from getProductDetailSaga :", error);
    }
};

export function* watchGetProductDetailSaga() {
    yield takeEvery(types.GET_PRODUCT_DETAIL, getProductDetailSaga);
};

/* FORK  Section */
export function* saga() {
    yield all([
        fork(watchGetProductDetailSaga),
        fork(watchAddProductSaga),
    ]);
}

/* REDUCER  Section */
const INIT_STATE = {
    product_detail_zort: null,
    status_get_product_detail_zort: "default",
    status_add_product: "default",
};

export function reducer(state = INIT_STATE, action) {
    switch (action.type) {
        case types.ADD_PRODUCT:
            return {
                ...state,
                status_add_product: "loading",
            };
        case types.ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                status_add_product: "success",
            };
        case types.ADD_PRODUCT_FAIL:
            return {
                ...state,
                status_add_product: "fail",
            };
        case types.GET_PRODUCT_DETAIL:
            return {
                ...state,
                status_get_product_detail_zort: "loading",
            };
        case types.GET_PRODUCT_DETAIL_SUCCESS:
            return {
                ...state,
                product_detail_zort: action.payload,
                status_get_product_detail_zort: "success",
            };
        case types.GET_PRODUCT_DETAIL_FAIL:
            return {
                ...state,
                status_get_product_detail_zort: "fail",
            };
        default:
            return { ...state };
    }
}
