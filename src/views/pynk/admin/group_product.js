import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function GroupProduct() {
    const history = useHistory();
    const dispatch = useDispatch();

    return (
        <div style={{ padding: 30 }}>
            <div className='pointer bold text-primary' onClick={() => history.push("products_management")}>{`< สินค้า`}</div>
            <h2 className='mb-5'>จัดกลุ่มสินค้า</h2>

            GroupProduct
        </div>
    );
}

export default GroupProduct;
