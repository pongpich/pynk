import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../../redux/pynk/get"

function ProductsManagement() {
    const history = useHistory();
    const dispatch = useDispatch();

    const user = useSelector(({ auth }) => (auth ? auth.user : ""));
    const products_pynk = useSelector(({ getPynk }) => (getPynk ? getPynk.products_pynk : ""));

    useEffect(() => {
        //เช็คว่าถ้าไม่ใช่ admin ให้เตะออกจากหน้านี้
        if (!user || (user && user.authorization !== "admin")) {
            history.push("/home");
        }

        dispatch(getProducts());
    }, []);

    const renderProductList = () => {
        return (
            <div>
                <div className='d-flex justify-content-between mb-4'>
                    <div>
                        <h2 className='bold'>สินค้า</h2>
                        <div>จำนวน {products_pynk ? products_pynk.length : 0} รายการ</div>
                    </div>
                    <button className='buy-now' style={{ width: 150 }} onClick={() => history.push("add_product")}>เพิ่มสินค้าใหม่</button>
                </div>

                <div className='card'>
                    <table>
                        <thead>
                            <tr>
                                <th>รหัสสินค้า</th>
                                <th>ชื่อสินค้า</th>
                                <th>ประเภท</th>
                                <th>ราคา</th>
                                <th>จำนวนสินค้า</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products_pynk.map((product, index) => (
                                <tr key={product.product_id}>
                                    <td>{product.product_id}</td>
                                    <td>{product.product_name}</td>
                                    <td>{product.category}</td>
                                    <td>{product.price}</td>
                                    <td>{product.available_stock}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    return (
        <div style={{ padding: 30 }}>
            {renderProductList()}
        </div>
    );
}

export default ProductsManagement;
