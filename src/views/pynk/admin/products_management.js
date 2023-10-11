import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../../redux/pynk/get"
import { delete_product, update_product, clear_status } from "../../../redux/pynk/admin"
import no_img from "../../../assets/img/pynk/no_image_icon.png"

import "../css/products_management.css";

function ProductsManagement() {
    const history = useHistory();
    const dispatch = useDispatch();

    const user = useSelector(({ auth }) => (auth ? auth.user : ""));
    const products_pynk = useSelector(({ getPynk }) => (getPynk ? getPynk.products_pynk : ""));
    const status_delete_product = useSelector(({ admin }) => (admin ? admin.status_delete_product : ""));
    const status_update_product = useSelector(({ admin }) => (admin ? admin.status_update_product : ""));

    useEffect(() => {
        //เช็คว่าถ้าไม่ใช่ admin ให้เตะออกจากหน้านี้
        if (!user || (user && user.authorization !== "admin")) {
            history.push("/home");
        }

        //สั่งเคลีย status ต่างๆ
        dispatch(clear_status());

        dispatch(getProducts());
    }, []);

    const [isNutritionalInfoProvided, setIsNutritionalInfoProvided] = useState(false);
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

    const [productDetailPage, setProductDetailPage] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [focusImg, setFocusImg] = useState(null);

    const [editDetail, setEditDetail] = useState(false);
    const [editDetailForm, setEditDetailForm] = useState({
        product_name: '',
        category: 'another',
        description: '',
        detail: '',
        nutritional_value: null
    });

    useEffect(() => {
        if (editDetail) {
            setEditDetailForm({
                ...editDetailForm,
                product_name: selectedProduct.product_name,
                description: selectedProduct.description,
                detail: selectedProduct.detail
            });
        }
    }, [editDetail]);

    const handleChangeEditForm = (e) => {
        const { name, value } = e.target;
        setEditDetailForm({ ...editDetailForm, [name]: value });
    };

    const [isPopupVisible, setPopupVisible] = useState(false);
    const [isPopupVisible2, setPopupVisible2] = useState(false);
    const showPopup = () => {
        setPopupVisible(true);
    };

    const hidePopup = () => {
        setPopupVisible(false);
    };
    const showPopup2 = () => {
        setPopupVisible2(true);
    };

    const hidePopup2 = () => {
        setPopupVisible2(false);
    };

    const handleDelete = () => {
        // ทำการลบสินค้าที่คุณต้องการที่นี่
        console.log('ลบสินค้าแล้ว');
        hidePopup();
        dispatch(delete_product(
            selectedProduct.product_id
        ));
    };

    useEffect(() => {
        if (status_delete_product === "success") {
            dispatch(getProducts());
            setProductDetailPage(false);
        }
    }, [status_delete_product]);

    useEffect(() => {
        if (status_update_product === "success") {
            //สั่ง get ค่า products จาก db ใหม่
            dispatch(getProducts());

            //สั่งโชว์ popup success 3วินาที -> แล้วซ่อน popup
            showPopup2();
            setTimeout(() => {
                hidePopup2();
            }, 3000);
        }
    }, [status_update_product])

    function onSelectedProduct(product_id) {
        setProductDetailPage(true);

        //กรองโดยใช้ product_id และ setState
        const targetProductId = product_id;
        const filteredProduct = products_pynk.filter(product => product.product_id === targetProductId);
        setSelectedProduct(filteredProduct[0]);
    }

    const editPageBackToDeatailPage = () => {
        //สั่งอัพเดทค่าในหน้ารายละเอียดสินค้า
        const targetProductId = selectedProduct.product_id;
        const filteredProduct = products_pynk.filter(product => product.product_id === targetProductId);
        setSelectedProduct(filteredProduct[0]);

        //สั่งกลับหน้า Detail
        setEditDetail(false)
    };

    useEffect(() => {
        if (productDetailPage) {
            const img_list = JSON.parse(selectedProduct.image_list);
            const img = img_list ? img_list[0] : "";
            setFocusImg(img);
        }
    }, [productDetailPage]);

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
                    <table class="product-table-admin">
                        <thead>
                            <tr>
                                <th>รหัสสินค้า</th>
                                <th>ชื่อสินค้า</th>
                                <th>หมวดหมู่สินค้า</th>
                                <th>ราคา</th>
                                <th>จำนวนสินค้า</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products_pynk &&
                                products_pynk.map((product, index) => (

                                    <tr key={product.product_id} onClick={() => onSelectedProduct(product.product_id)}>
                                        <td>{product.product_id}</td>
                                        <td>
                                            {
                                                product.image_url ?
                                                    <img src={product.image_url} width={50} height={50} />
                                                    :
                                                    <img src={no_img} width={50} height={50} />
                                            }
                                            {` `}{product.product_name}
                                        </td>
                                        <td>
                                            {(product.category === "food_supplement") && "อาหารเสริม"}
                                            {(product.category === "exercise_equipment") && "อุปกรณ์ออกกำลังกาย"}
                                            {(product.category === "fitto_plant_protein") && "Fitto Plant Protein"}
                                            {(product.category === "fitto_pre_workout_fat_burner") && "Fitto Pre-Work Out & Fat Burner"}
                                            {(product.category === "fitto_drink") && "Fitto Drink"}
                                            {(product.category === "another") && "อื่นๆ"}
                                        </td>
                                        <td>{product.price}</td>
                                        <td>{product.available_stock}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    };

    const popupConfirmDelete = () => {
        return (
            <div className="confirm-delete-product-popup">
                <div className="confirm-delete-product-popup-content d-flex flex-column">
                    <div
                        className="d-flex justify-content-end align-items-center pointer"
                        style={{ backgroundColor: "#EF60A3", height: 30, paddingRight: 10 }}
                        onClick={hidePopup}
                    >
                        <i style={{ fontSize: 20 }} class="fa-regular fa-circle-xmark"></i>
                    </div>
                    <div style={{ padding: 40 }}>
                        <div className='bold'>คุณแน่ใจหรือไม่ว่าต้องการลบสินค้านี้?</div>
                    </div>

                    <div className='d-flex justify-content-center  mb-2'>
                        <button
                            className='btn btn-light'
                            style={{ width: 80, height: 40, borderWidth: 1, borderColor: "LightGray", borderRadius: 50 }}
                            onClick={hidePopup}
                        >
                            ยกเลิก
                        </button>
                        <button
                            className='btn'
                            style={{ width: 80, height: 40, borderWidth: 1, borderColor: "LightGray", backgroundColor: "#EF60A3", borderRadius: 50, color: "white" }}
                            onClick={handleDelete}
                        >
                            ยืนยัน
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    const renderProductDetail = () => {
        const imageList = JSON.parse(selectedProduct && selectedProduct.image_list);
        return (
            <div>
                <div className='pointer bold text-primary' onClick={() => setProductDetailPage(false)}>{`< สินค้า`}</div>
                <h2 className='mb-5'>รายละเอียดสินค้า {selectedProduct.product_name}</h2>

                <button
                    className='btn btn-light'
                    style={{ width: 80, height: 40, borderWidth: 1, borderColor: "LightGray" }}
                    onClick={() => setEditDetail(true)}
                >
                    <i class="fa-regular fa-pen-to-square"></i> แก้ไข
                </button>
                <button
                    className='btn btn-light'
                    style={{ width: 80, height: 40, borderWidth: 1, borderColor: "LightGray" }}
                    onClick={showPopup}
                >
                    <i class="fa-solid fa-trash"></i> ลบ
                </button>
                <div className='card'>
                    <div className="d-flex p-3 gap-3">
                        <div style={{}}>
                            {
                                (focusImg) ?
                                    <img src={focusImg} width={400} style={{ margin: 2 }} />
                                    :
                                    <></>
                            }
                            <div className='d-flex gap-2  flex-wrap overflow-auto"' style={{ width: 450 }}>
                                {
                                    (imageList) ?
                                        imageList.map((imageUrl, index) => (
                                            <img
                                                key={index}
                                                src={imageUrl}
                                                alt={`Image ${index}`}
                                                width={100}
                                                className='image-with-border pointer'
                                                style={{ margin: 2, borderColor: (focusImg === imageUrl) ? "pink" : "" }}
                                                onClick={() => setFocusImg(imageUrl)}
                                            />
                                        ))
                                        :
                                        <></>
                                }
                            </div>
                        </div>
                        <div style={{}}>
                            <div className='bold fs-5 mb-2' >{selectedProduct.product_name}</div>
                            <div className='mb-2'>
                                <div>รหัสสินค้า:</div>
                                <div className='bold fs-5'>{selectedProduct.product_id}</div>
                            </div>
                            <div className='mb-2'>
                                <div>ราคา:</div>
                                <div className='bold fs-5'>{selectedProduct.price} บาท</div>
                            </div>
                            <div className='mb-2'>
                                <div>จำนวนคงเหลือ:</div>
                                <div className='bold fs-5'>{selectedProduct.available_stock}</div>
                            </div>
                            <div className='mb-2'>
                                <div>หมวดหมู่:</div>
                                <div className='bold fs-5'>
                                    {(selectedProduct.category === "food_supplement") && "อาหารเสริม"}
                                    {(selectedProduct.category === "exercise_equipment") && "อุปกรณ์ออกกำลังกาย"}
                                    {(selectedProduct.category === "fitto_plant_protein") && "Fitto Plant Protein"}
                                    {(selectedProduct.category === "fitto_pre_workout_fat_burner") && "Fitto Pre-Work Out & Fat Burner"}
                                    {(selectedProduct.category === "fitto_drink") && "Fitto Drink"}
                                    {(selectedProduct.category === "another") && "อื่นๆ"}
                                </div>
                            </div>
                            <div className='mb-2'>
                                <div>คำอธิบาย:</div>
                                <div className='bold fs-5'>{selectedProduct.description ? selectedProduct.description : "ไม่มี"}</div>
                            </div>
                            <div className='mb-2'>
                                <div>รายละเอียด:</div>
                                <div className='bold fs-5'>{selectedProduct.detail ? selectedProduct.detail : "ไม่มี"}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    function onUpdateProduct(
        product_id,
        product_name,
        category,
        available_stock,
        image_list,
        description,
        nutritional_value,
        detail
    ) {

        console.log("image_list :", image_list);

        dispatch(update_product(
            product_id,
            product_name,
            category,
            available_stock,
            JSON.parse(image_list),
            description,
            nutritional_value,
            detail
        ));
    };

    const popupStatusUpdateProduct = () => {
        return (
            <div className="status-update-product-popup pointer" onClick={hidePopup2}>
                <div className="status-update-product-popup-content d-flex flex-column">
                    <div
                        className="d-flex justify-content-end align-items-center pointer"
                        style={{ backgroundColor: "#EF60A3", height: 30, paddingRight: 10 }}
                        onClick={hidePopup2}
                    >
                        <i style={{ fontSize: 20 }} class="fa-regular fa-circle-xmark"></i>
                    </div>
                    <div className='d-flex text-success gap-3' style={{ padding: 40 }}>
                        <i style={{ fontSize: 40 }} class="fa-regular fa-circle-check"></i>
                        <div>
                            <div className='bold'>สำเร็จ</div>
                            <div className=''>บันทึกสำเร็จ</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const renderEditDetail = () => {
        const imageList = JSON.parse(selectedProduct && selectedProduct.image_list);
        return (
            <div>
                <div className='pointer bold text-primary' onClick={editPageBackToDeatailPage}>{`< กลับไปยังหน้ารายละเอียดสินค้า`}</div>
                <h2 className='mb-5'>แก้ไข - {selectedProduct.product_name}</h2>

                <div className='card'>
                    <div className="d-flex p-3 gap-3">
                        <div style={{}}>
                            {
                                (focusImg) ?
                                    <img src={focusImg} width={400} style={{ margin: 2 }} />
                                    :
                                    <></>
                            }
                            <div className='d-flex gap-2  flex-wrap overflow-auto"' style={{ width: 450 }}>
                                {
                                    (imageList) ?
                                        imageList.map((imageUrl, index) => (
                                            <img
                                                key={index}
                                                src={imageUrl}
                                                alt={`Image ${index}`}
                                                width={100}
                                                className='image-with-border pointer'
                                                style={{ margin: 2, borderColor: (focusImg === imageUrl) ? "pink" : "" }}
                                                onClick={() => setFocusImg(imageUrl)}
                                            />
                                        ))
                                        :
                                        <></>
                                }
                            </div>
                        </div>
                        <div style={{}}>
                            <div className='mb-2'>
                                <div>ชื่อสินค้า:</div>
                                <input
                                    type="text"
                                    id="product_name"
                                    name="product_name"
                                    value={editDetailForm.product_name}
                                    onChange={handleChangeEditForm}
                                    style={{ width: 700, height: 40 }}
                                />
                            </div>
                            <div className='mb-2'>
                                <div>รหัสสินค้า:</div>
                                <div className='bold fs-5'>{selectedProduct.product_id}</div>
                            </div>
                            <div className='mb-2'>
                                <div>ราคา:</div>
                                <div className='bold fs-5'>{selectedProduct.price} บาท</div>
                            </div>
                            <div className='mb-2'>
                                <div>จำนวนคงเหลือ:</div>
                                <div className='bold fs-5'>{selectedProduct.available_stock}</div>
                            </div>
                            <div className='mb-2'>
                                <div>หมวดหมู่:</div>
                                {/* <div className='bold fs-5'>{selectedProduct.category}</div> */}
                                <select id="category" name='category' value={editDetailForm.category} onChange={handleChangeEditForm} style={{ width: 300 }}>
                                    <option value="exercise_equipment">อุปกรณ์ออกกำลังกาย</option>
                                    <option value="fitto_plant_protein">Fitto Plant Protein</option>
                                    <option value="fitto_pre_workout_fat_burner">Fitto Pre-Work Out & Fat Burner</option>
                                    <option value="fitto_drink">Fitto Drink</option>
                                    <option value="food_supplement">อาหารเสริม</option>
                                    <option value="another">อื่นๆ</option>
                                    {/* เพิ่ม options ของ category เพิ่มเติมตามที่คุณต้องการ */}
                                </select>
                            </div>
                            <div className='mb-2'>
                                <div>คำอธิบาย:</div>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={editDetailForm.description}
                                    onChange={handleChangeEditForm}
                                    rows={4} // กำหนดจำนวนแถวที่แสดง
                                    cols={50} // กำหนดความกว้างของ textarea
                                />
                            </div>
                            <div className='mb-2'>
                                <div>รายละเอียด:</div>
                                <textarea
                                    id="detail"
                                    name="detail"
                                    value={editDetailForm.detail}
                                    onChange={handleChangeEditForm}
                                    rows={4} // กำหนดจำนวนแถวที่แสดง
                                    cols={50} // กำหนดความกว้างของ textarea
                                />
                            </div>
                            <div className='mb-2'>
                                <div>สารอาหาร:</div>
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
                        </div>
                    </div>
                </div>

                {
                    (status_update_product !== "loading") &&
                    <center>
                        <button
                            className='buy-now'
                            style={{ height: 55, width: 100, borderRadius: 10 }}
                            onClick={() => onUpdateProduct(
                                selectedProduct.product_id,
                                editDetailForm.product_name,
                                editDetailForm.category,
                                selectedProduct.available_stock,
                                selectedProduct.image_list,
                                editDetailForm.description,
                                nutritionalInfoList,
                                editDetailForm.detail
                            )}
                        >
                            บันทึก
                        </button>
                    </center>
                }

            </div>
        )
    }

    return (
        <div style={{ padding: 30 }}>
            {isPopupVisible && popupConfirmDelete()}
            {isPopupVisible2 && popupStatusUpdateProduct()}
            {
                productDetailPage ?
                    editDetail ?
                        renderEditDetail()
                        :
                        renderProductDetail()
                    :
                    renderProductList()
            }
        </div>
    );
}

export default ProductsManagement;
