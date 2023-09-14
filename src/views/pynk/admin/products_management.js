import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getProductDetail } from "../../../redux/pynk/get"

function ProductsManagement() {
    const dispatch = useDispatch();
    const status_get_product_detail_zort = useSelector(({ getPynk }) => (getPynk ? getPynk.status_get_product_detail_zort : ""));
    const product_detail_zort = useSelector(({ getPynk }) => (getPynk ? getPynk.product_detail_zort : ""));


    // สร้าง state สำหรับเก็บค่าของ input
    const [inputValue, setInputValue] = useState('');

    // ฟังก์ชั่น handleInputChange ใช้ในการอัปเดตค่า state เมื่อมีการเปลี่ยนแปลงใน input
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = () => {
        // ในฟังก์ชั่นนี้คุณสามารถดำเนินการกับค่า inputValue หรือส่งข้อมูลไปที่เซิร์ฟเวอร์ตามที่คุณต้องการ
        console.log('ค่าที่คุณกรอกคือ:', inputValue);
        dispatch(getProductDetail(inputValue))

    };

    return (
        <div>
            <h1>.</h1>
            <h1>เพิ่มรายการสินค้า</h1>
            <div className='d-flex' style={{ alignItems: "center" }}>

                <h3>รหัสสินค้า:</h3>
                <input
                    style={{ width: "20%" }}
                    type="text"
                    value={inputValue} // ใช้ค่า state เป็นค่า value ของ input
                    onChange={handleInputChange} // เมื่อมีการเปลี่ยนแปลงใน input จะเรียกฟังก์ชั่น handleInputChange
                />
                <button style={{ height: 55, width: 100 }} onClick={handleSubmit}>ค้นหา</button>

            </div>
        </div>
    );
}

export default ProductsManagement;
