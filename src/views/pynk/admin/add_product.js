import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetail, add_product } from "../../../redux/pynk/admin"

function AddProduct() {
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(({ auth }) => (auth ? auth.user : ""));
    const product_detail_zort = useSelector(({ admin }) => (admin ? admin.product_detail_zort : ""));
    const status_get_product_detail_zort = useSelector(({ admin }) => (admin ? admin.status_get_product_detail_zort : ""));
    const status_add_product = useSelector(({ admin }) => (admin ? admin.status_add_product : ""));

    const [inputValue, setInputValue] = useState('');
    const [description, setDescription] = useState('');
    const [detail, setDetail] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('another'); // เริ่มต้นค่าเป็นช่องว่าง
    const [isNutritionalInfoProvided, setIsNutritionalInfoProvided] = useState(false);
    const [showProductDetail, setShowProductDetail] = useState(false);
    const [msgAddProductSuccess, setMsgAddProductSuccess] = useState(false);
    const [msgAddProductFail, setMsgAddProductFail] = useState(false);
    const [msgGetProductFail, setMsgGetProductFail] = useState(false);

    const [nutritionalInfoList, setNutritionalInfoList] = useState([
        { nutrition_name: '', value: '', unit: '' },
    ]);

    const handleNutritionalInfoChange = (event, index, field) => {
        const updatedNutritionalInfoList = [...nutritionalInfoList];
        updatedNutritionalInfoList[index][field] = event.target.value;
        setNutritionalInfoList(updatedNutritionalInfoList);
    };

    const handleAddRow = () => {
        setNutritionalInfoList([...nutritionalInfoList, { nutrition_name: '', value: '', unit: '' }]);
    };

    const handleRemoveRow = (index) => {
        const updatedNutritionalInfoList = [...nutritionalInfoList];
        updatedNutritionalInfoList.splice(index, 1);
        setNutritionalInfoList(updatedNutritionalInfoList);
    };

    const handleRadioChange = (event) => {
        setIsNutritionalInfoProvided(event.target.value === 'yes');
        // เมื่อผู้ใช้เลือก "ใช่" ให้เปิดใช้งานช่องกรอกข้อมูลสารอาหาร
        // เมื่อผู้ใช้เลือก "ไม่" ให้ปิดใช้งานช่องกรอกข้อมูลสารอาหาร
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleDetailChange = (event) => {
        setDetail(event.target.value);
    };

    const handleSearch = () => {
        //สั่งเคลียค่า status ต่างๆ ตอนจังหวะกำลังค้นหาข้อมูล
        setMsgAddProductSuccess(false);
        setMsgAddProductFail(false);
        setMsgGetProductFail(false);

        //เรียกใช้ API
        dispatch(getProductDetail(inputValue));
    };

    useEffect(() => {
        //ถ้าดึงข้อมูลสินค้าจาก Zort สำเร็จให้โชว์รายละเอียดสินค้า
        if (status_get_product_detail_zort === "success") {
            setShowProductDetail(true);
        }
        //ถ้าดึงข้อมูลสินค้าจาก Zort ไม่สำเร็จให้โชว์ข้อความ Error
        if (status_get_product_detail_zort === "fail") {
            setMsgGetProductFail(true);
            setShowProductDetail(false);
        }
    }, [status_get_product_detail_zort]);

    useEffect(() => {
        if (status_add_product === "success") {
            setShowProductDetail(false);
            setMsgAddProductSuccess(true);
        }
        if (status_add_product === "fail") {
            setShowProductDetail(false);
            setMsgAddProductFail(true);
        }
    }, [status_add_product]);

    useEffect(() => {
        //เช็คว่าถ้าไม่ใช่ admin ให้เตะออกจากหน้านี้
        if (!user || (user && user.authorization !== "admin")) {
            history.push("/admin");
        }

        //สั่งคืนค่าป้องกันค่าค้าง
        setShowProductDetail(false);
        setMsgAddProductSuccess(false);
        setMsgAddProductFail(false);
    }, []);

    function onAddProduct(
        product_id,
        product_name,
        category,
        price,
        available_stock,
        image_list,
        description,
        nutritional_value,
        detail
    ) {
        dispatch(add_product(
            product_id,
            product_name,
            category,
            price,
            available_stock,
            image_list,
            description,
            nutritional_value,
            detail
        ));
    };

    const renderAddProduct = () => {
        return (
            <div>
                <div className='pointer bold text-primary' onClick={() => history.push("products_management")}>{`< สินค้า`}</div>
                <h2 className='mb-5'>เพิ่มสินค้าใหม่</h2>

                <div className='text-danger'>** กรอกรหัสสินค้าจากเว็บไซต์ Zort **</div>
                <div className='d-flex gap-2' style={{ alignItems: "center" }}>
                    <h5 className='bold'>รหัสสินค้า:</h5>
                    <input
                        style={{ width: "20%", height: 40 }}
                        type="text"
                        value={inputValue} // ใช้ค่า state เป็นค่า value ของ input
                        onChange={handleInputChange} // เมื่อมีการเปลี่ยนแปลงใน input จะเรียกฟังก์ชั่น handleInputChange
                    />
                    <button className='buy-now' style={{ width: 100 }} onClick={handleSearch}><i class="fa-solid fa-magnifying-glass"></i> ค้นหา</button>
                </div>
                {
                    msgGetProductFail &&
                    <div>
                        <h1 className='text-danger'><i class="fa-solid fa-xmark"></i> ไม่พบสินค้า</h1>
                        <div className='text-danger'>โปรดตรวจสอบรหัสสินค้าให้ถูกต้อง</div>
                    </div>
                }

                {
                    showProductDetail ?
                        <div className='card' style={{ padding: 20 }}>
                            <div className='d-flex mt-5 gap-3'>
                                {
                                    (product_detail_zort && product_detail_zort.imageList) ?
                                        product_detail_zort.imageList.map((imageUrl, index) => (
                                            <img key={index} src={imageUrl} alt={`Image ${index}`} width={200} style={{ margin: 2 }} />
                                        ))
                                        :
                                        <></>
                                }
                            </div>
                            <div className='mt-5'><span className='bold'>ชื่อสินค้า:</span> {product_detail_zort && product_detail_zort.name}</div>
                            <div><span className='bold'>ราคา:</span> {product_detail_zort && product_detail_zort.sellprice} บาท</div>
                            <div><span className='bold'>จำนวนคงเหลือ:</span> {product_detail_zort && product_detail_zort.availablestock}</div>

                            <div className='mt-3' style={{ display: 'inline-block', marginRight: '10px' }}><span className='bold'>หมวดหมู่สินค้า:</span></div>
                            <select id="category" value={selectedCategory} onChange={handleCategoryChange} style={{ width: 300 }}>
                                <option value="exercise_equipment">อุปกรณ์ออกกำลังกาย</option>
                                <option value="fitto_plant_protein">Fitto Plant Protein</option>
                                <option value="fitto_pre_workout_fat_burner">Fitto Pre-Work Out & Fat Burner</option>
                                <option value="fitto_drink">Fitto Drink</option>
                                <option value="food_supplement">อาหารเสริม</option>
                                <option value="another">อื่นๆ</option>
                                {/* เพิ่ม options ของ category เพิ่มเติมตามที่คุณต้องการ */}
                            </select>
                            {/*  <p>คุณเลือก: {selectedCategory}</p> */}

                            <div className='mt-3'><span className='bold'>คำอธิบายสินค้า:</span></div>
                            <textarea
                                id="description"
                                value={description}
                                onChange={handleDescriptionChange}
                                rows={4} // กำหนดจำนวนแถวที่แสดง
                                cols={50} // กำหนดความกว้างของ textarea
                            />
                            {/* <p>คำอธิบาย: {description}</p> */}

                            <div className='mt-3'><span className='bold'>รายละเอียดสินค้า:</span></div>
                            <textarea
                                id="detail"
                                value={detail}
                                onChange={handleDetailChange}
                                rows={4} // กำหนดจำนวนแถวที่แสดง
                                cols={50} // กำหนดความกว้างของ textarea
                            />
                            {/* <p>รายละเอียดสินค้า: {detail}</p> */}

                            <div className='mt-3'><span className='bold'>สารอาหาร:</span></div>
                            <div>
                                <div>
                                    <label>คุณต้องการกรอกข้อมูลสารอาหารหรือไม่?</label>

                                    <div className='d-flex align-items-center gap-2'>
                                        <input
                                            className='form-check-input2'
                                            type="radio"
                                            id="no"
                                            name="nutritionalInfo"
                                            value="no"
                                            checked={!isNutritionalInfoProvided}
                                            onChange={handleRadioChange}
                                        />
                                        <div>ไม่</div>
                                    </div>
                                    <div className='d-flex  align-items-center gap-2'>
                                        <input
                                            className='form-check-input2'
                                            type="radio"
                                            id="yes"
                                            name="nutritionalInfo"
                                            value="yes"
                                            checked={isNutritionalInfoProvided}
                                            onChange={handleRadioChange}
                                        />
                                        <div>ใช่</div>
                                    </div>

                                </div>
                                {isNutritionalInfoProvided && (
                                    <div>
                                        <label>ข้อมูลสารอาหาร:</label>
                                        <div className='text-danger bold'>ตัวอย่างการกรอก</div>

                                        <thead >
                                            <tr>
                                                <th scope="col"></th>
                                                <th scope="col">ชื่อสารอาหาร</th>
                                                <th scope="col">ปริมาณ</th>
                                                <th scope="col">หน่วย</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1. </th>
                                                <td>พลังงาน</td>
                                                <td>120</td>
                                                <td>แคลอรี่</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2. </th>
                                                <td>โปรตีน</td>
                                                <td>20</td>
                                                <td>กรัม</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3. </th>
                                                <td>น้ำตาล</td>
                                                <td>2</td>
                                                <td>กรัม</td>
                                            </tr>
                                        </tbody>

                                        {nutritionalInfoList.map((info, index) => (
                                            <div key={index} className='mt-3'>
                                                {`${index + 1}. `}
                                                <input
                                                    style={{ width: "auto" }}
                                                    type="text"
                                                    placeholder="ชื่อสารอาหาร"
                                                    value={info.nutrition_name}
                                                    onChange={(event) => handleNutritionalInfoChange(event, index, 'nutrition_name')}
                                                />
                                                <input
                                                    style={{ width: "auto" }}
                                                    type="text"
                                                    placeholder="ปริมาณ"
                                                    value={info.value}
                                                    onChange={(event) => handleNutritionalInfoChange(event, index, 'value')}
                                                />
                                                <input
                                                    style={{ width: "auto" }}
                                                    type="text"
                                                    placeholder="หน่วย"
                                                    value={info.unit}
                                                    onChange={(event) => handleNutritionalInfoChange(event, index, 'unit')}
                                                />
                                                <button className='btn btn-light' style={{ width: 80, borderWidth: 2, borderColor: "black" }} onClick={() => handleRemoveRow(index)}><i class="fa-solid fa-trash"></i> ลบ</button>
                                            </div>
                                        ))}
                                        <button
                                            className='btn btn-light' style={{ width: 150, borderWidth: 2, borderColor: "black" }}
                                            onClick={handleAddRow}
                                        >
                                            <i class="fa-solid fa-plus"></i> เพิ่มรายการ
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                        :
                        <div className='card' style={{ padding: 100 }}>
                        </div>
                }

                <center style={{ display: showProductDetail ? "block" : "none" }}>
                    {
                        (status_add_product !== "loading") &&
                        <button
                            className='buy-now'
                            style={{ width: 150 }}
                            onClick={() => onAddProduct(
                                product_detail_zort.sku, //product_id,
                                product_detail_zort.name, //product_name,
                                selectedCategory, //category,
                                product_detail_zort.sellprice, //price,
                                product_detail_zort.availablestock, //available_stock,
                                product_detail_zort.imageList, //image_list,
                                description, //description,
                                nutritionalInfoList, //nutritional_value,
                                detail, //detail
                            )}
                        >
                            ยืนยัน
                        </button>
                    }
                </center>

                {
                    msgAddProductSuccess &&
                    <h1 className='text-success'><i class="fa-solid fa-check"></i> เพิ่มสินค้าสำเร็จ</h1>
                }
                {
                    msgAddProductFail &&
                    <div>
                        <h1 className='text-danger'><i class="fa-solid fa-xmark"></i> เพิ่มสินค้าไม่สำเร็จ</h1>
                        <div className='text-danger'>หากมีรหัสสินค้านี้อยู่แล้วในระบบ ไม่สามารถเพิ่มสินค้าซ้ำได้</div>
                    </div>
                }
            </div>
        );
    }

    return (
        <div style={{ padding: 30 }}>
            {renderAddProduct()}
        </div>
    );
}

export default AddProduct;
