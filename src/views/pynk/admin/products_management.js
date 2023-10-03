import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getProductDetail } from "../../../redux/pynk/admin"

function ProductsManagement() {
    const dispatch = useDispatch();
    const status_get_product_detail_zort = useSelector(({ admin }) => (admin ? admin.status_get_product_detail_zort : ""));
    const product_detail_zort = useSelector(({ admin }) => (admin ? admin.product_detail_zort : ""));


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
            <h1 style={{ color: "white" }}>.</h1>
            <h1 style={{ color: "white" }}>.</h1>

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

            {
                (product_detail_zort && product_detail_zort.imageList) ?
                    product_detail_zort.imageList.map((imageUrl, index) => (
                        <img key={index} src={imageUrl} alt={`Image ${index}`} width={400} style={{ margin: 2 }} />
                    ))
                    :
                    <></>
            }
            <div>name: {product_detail_zort && product_detail_zort.name}</div>
            <div>price: {product_detail_zort && product_detail_zort.sellprice}</div>
            <div>description: ไม่มีจาก Zort</div>
            <div>สารอาหาร: ไม่มีจาก Zort</div>
            <div>stock: {product_detail_zort &&product_detail_zort.availablestock}</div>
            <div>รายละเอียดสินค้า:ไม่มีจาก Zort</div>
            <button style={{ height: 55, width: 100 }} onClick={handleSubmit}>เพิ่มสินค้า</button>
        </div>
    );
}

export default ProductsManagement;
