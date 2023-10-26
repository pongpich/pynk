import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { API } from "aws-amplify";

/* ACTION Section */
export const types = {
    CLEAR_STATUS_PRODUCT_MANAGEMENT: "CLEAR_STATUS_PRODUCT_MANAGEMENT",
    GET_PRODUCT_DETAIL: "GET_PRODUCT_DETAIL",
    GET_PRODUCT_DETAIL_SUCCESS: "GET_PRODUCT_DETAIL_SUCCESS",
    GET_PRODUCT_DETAIL_FAIL: "GET_PRODUCT_DETAIL_FAIL",
    ADD_PRODUCT: "ADD_PRODUCT",
    ADD_PRODUCT_SUCCESS: "ADD_PRODUCT_SUCCESS",
    ADD_PRODUCT_FAIL: "ADD_PRODUCT_FAIL",
    DELETE_PRODUCT: "DELETE_PRODUCT",
    DELETE_PRODUCT_SUCCESS: "DELETE_PRODUCT_SUCCESS",
    DELETE_PRODUCT_FAIL: "DELETE_PRODUCT_FAIL",
    UPDATE_PRODUCT: "UPDATE_PRODUCT",//update_product
    UPDATE_PRODUCT_SUCCESS: "UPDATE_PRODUCT_SUCCESS",
    UPDATE_PRODUCT_FAIL: "UPDATE_PRODUCT_FAIL",
    UPDATE_PRODUCT_STOCK: "UPDATE_PRODUCT_STOCK",
    UPDATE_PRODUCT_STOCK_SUCCESS: "UPDATE_PRODUCT_STOCK_SUCCESS",
    UPDATE_PRODUCT_STOCK_FAIL: "UPDATE_PRODUCT_STOCK_FAIL",
};

export const clear_status = () => ({
    type: types.CLEAR_STATUS_PRODUCT_MANAGEMENT
})

export const getProductDetail = (sku) => ({
    type: types.GET_PRODUCT_DETAIL,
    payload: {
        sku
    }
});

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

export const delete_product = (
    product_id
) => ({
    type: types.DELETE_PRODUCT,
    payload: {
        product_id
    }
});

export const updateProductStock = (
    product_id
) => ({
    type: types.UPDATE_PRODUCT_STOCK,
    payload: {
        product_id
    }
});

export const update_product = (
    product_id,
    product_name,
    category,
    available_stock,
    image_list,
    description,
    nutritional_value,
    detail
) => ({
    type: types.UPDATE_PRODUCT,
    payload: {
        product_id,
        product_name,
        category,
        available_stock,
        image_list,
        description,
        nutritional_value,
        detail
    }
});

const updateProductStockSagaAsync = async (
    product_id
) => {
    try {
        const apiResult = await API.put("pynk", "/updateProductStock", {
            body: {
                product_id
            },
        });
        return apiResult;
    } catch (error) {
        return { error, messsage: error.message };
    }
};

function* updateProductStockSaga({ payload }) {
    const {
        product_id
    } = payload;

    try {
        const apiResult = yield call(
            updateProductStockSagaAsync,
            product_id
        );
        if (apiResult.results.message === "success") {
            yield put({
                type: types.UPDATE_PRODUCT_STOCK_SUCCESS,
                payload: apiResult.results.product.availablestock
            })
            console.log("apiResult :", apiResult.results.product.availablestock);

        }
    } catch (error) {
        yield put({
            type: types.UPDATE_PRODUCT_STOCK_FAIL
        })
        console.log("error from updateProductStockSaga :", error);
    }
};

const updateProductSagaAsync = async (
    product_id,
    product_name,
    category,
    available_stock,
    image_list,
    description,
    nutritional_value,
    detail
) => {
    try {
        const apiResult = await API.put("pynk", "/update_product", {
            body: {
                product_id,
                product_name,
                category,
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

function* updateProductSaga({ payload }) {
    const {
        product_id,
        product_name,
        category,
        available_stock,
        image_list,
        description,
        nutritional_value,
        detail
    } = payload;

    try {
        const apiResult = yield call(
            updateProductSagaAsync,
            product_id,
            product_name,
            category,
            available_stock,
            image_list,
            description,
            nutritional_value,
            detail
        );

        if (apiResult.results.message === "success") {
            yield put({
                type: types.UPDATE_PRODUCT_SUCCESS
            })
        }
    } catch (error) {
        yield put({
            type: types.UPDATE_PRODUCT_FAIL
        })
        console.log("error from updateProductSaga :", error);
    }
};


const deleteProductSagaAsync = async (
    product_id
) => {
    try {
        const apiResult = await API.post("pynk", "/delete_product", {
            body: {
                product_id
            },
        });
        return apiResult;
    } catch (error) {
        return { error, messsage: error.message };
    }
};

function* deleteProductSaga({ payload }) {
    const {
        product_id
    } = payload;

    try {
        const apiResult = yield call(
            deleteProductSagaAsync,
            product_id
        );

        if (apiResult.results.message === "success") {
            yield put({
                type: types.DELETE_PRODUCT_SUCCESS
            })
        }
    } catch (error) {

        yield put({
            type: types.DELETE_PRODUCT_FAIL
        })
        console.log("error from deleteProductSaga :", error);
    }
};

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


/* takeEvery Section*/
export function* watchGetProductDetailSaga() {
    yield takeEvery(types.GET_PRODUCT_DETAIL, getProductDetailSaga);
};

export function* watchAddProductSaga() {
    yield takeEvery(types.ADD_PRODUCT, addProductSaga);
};

export function* watchDeleteProductSaga() {
    yield takeEvery(types.DELETE_PRODUCT, deleteProductSaga);
};

export function* watchUpdateProductSaga() {
    yield takeEvery(types.UPDATE_PRODUCT, updateProductSaga);
};

export function* watchUpdateProductStockSaga() {
    yield takeEvery(types.UPDATE_PRODUCT_STOCK, updateProductStockSaga);
};

export function* saga() {
    yield all([
        fork(watchGetProductDetailSaga),
        fork(watchAddProductSaga),
        fork(watchDeleteProductSaga),
        fork(watchUpdateProductSaga),
        fork(watchUpdateProductStockSaga),
    ]);
}

/* REDUCER  Section */
const INIT_STATE = {
    product_detail_zort: null,
    status_get_product_detail_zort: "default",
    status_add_product: "default",
    status_delete_product: "default",
    status_update_product: "default",
    status_update_stock: "default",
    available_stock: 0
};

export function reducer(state = INIT_STATE, action) {
    switch (action.type) {
        case types.UPDATE_PRODUCT_STOCK:
            return {
                ...state,
                status_update_stock: "loading",
            };
        case types.UPDATE_PRODUCT_STOCK_SUCCESS:
            return {
                ...state,
                status_update_stock: "success",
                available_stock: action.payload
            };
        case types.UPDATE_PRODUCT_STOCK_FAIL:
            return {
                ...state,
                status_update_stock: "fail",
            };
        case types.UPDATE_PRODUCT:
            return {
                ...state,
                status_update_product: "loading",
            };
        case types.UPDATE_PRODUCT_SUCCESS:
            return {
                ...state,
                status_update_product: "success",
            };
        case types.UPDATE_PRODUCT_FAIL:
            return {
                ...state,
                status_update_product: "fail",
            };
        case types.DELETE_PRODUCT:
            return {
                ...state,
                status_delete_product: "loading",
            };
        case types.DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                status_delete_product: "success",
            };
        case types.DELETE_PRODUCT_FAIL:
            return {
                ...state,
                status_delete_product: "fail",
            };
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
        case types.CLEAR_STATUS_PRODUCT_MANAGEMENT:
            return {
                INIT_STATE
            };
        default:
            return { ...state };
    }
}
