import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { API } from "aws-amplify";

/* ACTION Section */

export const types = {
  CREATE_SHIPPINGADDRESS: "CREATE_SHIPPINGADDRESS",
  SELECT_PRODUCTS: "SELECT_PRODUCTS",
  CLEAR_SELECT_PRODUCTS: "CLEAR_SELECT_PRODUCTS",
  SELECT_DELIVERY_ADDRESS: "SELECT_DELIVERY_ADDRESS",
  CLEAR_SELECT_DELIVERY_ADDRESS: "CLEAR_SELECT_DELIVERY_ADDRESS",
  SELECT_RECEIPT_ADDRESS: "SELECT_RECEIPT_ADDRESS",
  CLEAR_SELECT_RECEIPT_ADDRESS: "CLEAR_SELECT_RECEIPT_ADDRESS",
}

export const selectReceiptAddress = (receipt_address) => ({
  type: types.SELECT_RECEIPT_ADDRESS,
  payload: {
    receipt_address
  }
})

export const clearSelectReceiptAddress = () => ({
  type: types.CLEAR_SELECT_RECEIPT_ADDRESS
})

export const selectDeliveryAddress = (delivery_address) => ({
  type: types.SELECT_DELIVERY_ADDRESS,
  payload: {
    delivery_address
  }
})

export const clearSelectDeliveryAddress = () => ({
  type: types.CLEAR_SELECT_DELIVERY_ADDRESS
})

export const selectProducts = (products_list) => ({
  type: types.SELECT_PRODUCTS,
  payload: {
    products_list
  }
})

export const clearSelectProducts = () => ({
  type: types.CLEAR_SELECT_PRODUCTS
})

export const shippingAddress = (
  taxInvoice, username, lastname, telephone, addressUser, subdistrictUser, districtUser, provinceUser, zipcodeUser,
  InvoicePerson, InvoiceTaxpayerName, InvoiceTaxIdentificationNumber, InvoiceTelephone, useShippingAddress,
  InvoiceAddressUser, InvoiceSubdistrict, InvoiceDistrict, InvoiceProvince, InvoiceZipcode
) => ({
  type: types.CREATE_SHIPPINGADDRESS,
  payload: {
    taxInvoice,
    username,
    lastname,
    telephone,
    addressUser,
    subdistrictUser,
    districtUser,
    provinceUser,
    zipcodeUser,
    InvoicePerson,
    InvoiceTaxpayerName,
    InvoiceTaxIdentificationNumber,
    InvoiceTelephone,
    useShippingAddress,
    InvoiceAddressUser,
    InvoiceSubdistrict,
    InvoiceDistrict,
    InvoiceProvince,
    InvoiceZipcode
  }
})


/* END OF ACTION Section */

/* SAGA Section */



export function* saga() {
  yield all([

  ]);

}

/* END OF SAGA Section */

/* REDUCER Section */

const INIT_STATE = {
  create_taxInvoice: null,
  create_username: null,
  create_lastname: null,
  create_telephone: null,
  create_addressUser: null,
  create_subdistrictUser: null,
  create_districtUser: null,
  create_provinceUser: null,
  create_zipcodeUser: null,
  create_InvoicePerson: null,
  create_InvoiceTaxpayerName: null,
  create_InvoiceTaxIdentificationNumber: null,
  create_InvoiceTelephone: null,
  create_useShippingAddress: null,
  create_InvoiceAddressUser: null,
  create_InvoiceSubdistrict: null,
  create_InvoiceDistrict: null,
  create_InvoiceProvince: null,
  create_InvoiceZipcode: null,
  products_list: null,
  delivery_address: null,
  receipt_address: ""
};

export function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case types.CLEAR_SELECT_RECEIPT_ADDRESS:
      return {
        ...state,
        receipt_address: ""
      }
    case types.SELECT_RECEIPT_ADDRESS:
      return {
        ...state,
        receipt_address: action.payload.receipt_address
      }
    case types.CLEAR_SELECT_DELIVERY_ADDRESS:
      return {
        ...state,
        delivery_address: null
      }
    case types.SELECT_DELIVERY_ADDRESS:
      return {
        ...state,
        delivery_address: action.payload.delivery_address
      }
    case types.CLEAR_SELECT_PRODUCTS:
      return {
        ...state,
        products_list: null
      }
    case types.SELECT_PRODUCTS:
      return {
        ...state,
        products_list: action.payload.products_list
      }
    case types.CREATE_SHIPPINGADDRESS:
      return {
        ...state,
        create_taxInvoice: action.payload.taxInvoice,
        create_username: action.payload.username,
        create_lastname: action.payload.lastname,
        create_telephone: action.payload.telephone,
        create_addressUser: action.payload.addressUser,
        create_subdistrictUser: action.payload.subdistrictUser,
        create_districtUser: action.payload.districtUser,
        create_provinceUser: action.payload.provinceUser,
        create_zipcodeUser: action.payload.zipcodeUser,
        create_InvoicePerson: action.payload.InvoicePerson,
        create_InvoiceTaxpayerName: action.payload.InvoiceTaxpayerName,
        create_InvoiceTaxIdentificationNumber: action.payload.InvoiceTaxIdentificationNumber,
        create_InvoiceTelephone: action.payload.InvoiceTelephone,
        create_useShippingAddress: action.payload.useShippingAddress,
        create_InvoiceAddressUser: action.payload.InvoiceAddressUser,
        create_InvoiceSubdistrict: action.payload.InvoiceSubdistrict,
        create_InvoiceDistrict: action.payload.InvoiceDistrict,
        create_InvoiceProvince: action.payload.InvoiceProvince,
        create_InvoiceZipcode: action.payload.InvoiceZipcode,
      };
    default:
      return { ...state };
  }
}