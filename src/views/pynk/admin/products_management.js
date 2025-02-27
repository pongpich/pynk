import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../../redux/pynk/get"
import { delete_product, update_product, clear_status, updateProductStock } from "../../../redux/pynk/admin"
import no_img from "../../../assets/img/pynk/no_image_icon.png";
import { s3Upload } from "../../../helpers/awsLib";

import "../css/products_management.css";

function ProductsManagement() {
    const history = useHistory();
    const dispatch = useDispatch();

    const user = useSelector(({ auth }) => (auth ? auth.user : ""));
    const products_pynk = useSelector(({ getPynk }) => (getPynk ? getPynk.products_pynk : ""));
    const status_products_pynk = useSelector(({ getPynk }) => (getPynk ? getPynk.status_products_pynk : ""));
    const status_delete_product = useSelector(({ admin }) => (admin ? admin.status_delete_product : ""));
    const status_update_product = useSelector(({ admin }) => (admin ? admin.status_update_product : ""));

    useEffect(() => {
        //เช็คว่าถ้าไม่ใช่ admin ให้เตะออกจากหน้านี้
        if (!user || (user && user.authorization !== "admin")) {
            history.push("/admin");
        }

        //สั่งเคลีย status ต่างๆ
        dispatch(clear_status());

        dispatch(getProducts());
    }, []);

    useEffect(() => {
        if (status_products_pynk && products_pynk) {
            const filtered = products_pynk.filter(
                product =>
                    product.product_id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredProducts(filtered);
        }
    }, [status_products_pynk]);

    const [isAfterDiscount, setIsAfterDiscount] = useState(false);
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

    const handleRadioChange2 = (event) => {
        setIsAfterDiscount(event.target.value === 'yes');
        // เมื่อผู้ใช้เลือก "ใช่" ให้เปิดใช้งานช่องกรอกลดราคา
        // เมื่อผู้ใช้เลือก "ไม่" ให้ปิดใช้งานช่องกรอกลดราคา
    };

    const [productDetailPage, setProductDetailPage] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [focusImg, setFocusImg] = useState(null);
    const initialImages = [
        { name: 'รูปสินค้าหลัก', img: null },
        { name: 'รูปภาพ 1', img: null },
        { name: 'รูปภาพ 2', img: null },
        { name: 'รูปภาพ 3', img: null },
        { name: 'รูปภาพ 4', img: null },
        { name: 'รูปภาพ 5', img: null },
        { name: 'รูปภาพ 6', img: null },
        { name: 'รูปภาพ 7', img: null },
        { name: 'รูปภาพ 8', img: null },
    ];
    const [btnUpload, setBtnUpload] = useState(initialImages);
    const [statusS3Upload, setStatusS3Upload] = useState('default');
    const [statusDelUpload, setStatusDelUpload] = useState('default');

    const handleImageChange = (e) => {
        const selectedImages = e.target.files[0];

        var today = new Date();
        var time = today.getTime();
        var addPrefix = time;
        const customPrefixName = `images/pynk_product_thumbnail/${selectedProduct.sku}/${addPrefix}.png`;
        const urlProductImg = `https://bebe-platform.s3-ap-southeast-1.amazonaws.com/public/${customPrefixName}`;
        const btnID = e.target.id;
        setStatusS3Upload("default");
        onUploadImg(selectedImages, customPrefixName, urlProductImg, btnID);
    };

    async function onUploadImg(file, customPrefixName, urlProductImg, btnID) {
        await s3Upload(file, customPrefixName);

        switch (btnID) {
            case "btnImgUpload0":
                btnUpload[0].img = urlProductImg;
                break;
            case "btnImgUpload1":
                btnUpload[1].img = urlProductImg;
                break;
            case "btnImgUpload2":
                btnUpload[2].img = urlProductImg;
                break;
            case "btnImgUpload3":
                btnUpload[3].img = urlProductImg;
                break;
            case "btnImgUpload4":
                btnUpload[4].img = urlProductImg;
                break;
            case "btnImgUpload5":
                btnUpload[5].img = urlProductImg;
                break;
            case "btnImgUpload6":
                btnUpload[6].img = urlProductImg;
                break;
            case "btnImgUpload7":
                btnUpload[7].img = urlProductImg;
                break;
            case "btnImgUpload8":
                btnUpload[8].img = urlProductImg;
                break;
        }

        setStatusS3Upload("success");
    }

    useEffect(() => {
        console.log("statusS3Upload update:", statusS3Upload);
        console.log("btnUpload:", btnUpload);
    }, [statusS3Upload]);


    function onDeleteImg(index) {
        console.log("onDeleteImg !!!");

        switch (index) {
            case 0:
                btnUpload[0].img = null;
                break;
            case 1:
                btnUpload[1].img = null;
                break;
            case 2:
                btnUpload[2].img = null;
                break;
            case 3:
                btnUpload[3].img = null;
                break;
            case 4:
                btnUpload[4].img = null;
                break;
            case 5:
                btnUpload[5].img = null;
                break;
            case 6:
                btnUpload[6].img = null;
                break;
            case 7:
                btnUpload[7].img = null;
                break;
            case 8:
                btnUpload[8].img = null;
                break;
        }

        setStatusDelUpload("success");
    }

    useEffect(() => {
        console.log("statusDelUpload update:", statusDelUpload);
        console.log("btnUpload:", btnUpload);
    }, [statusDelUpload]);

    const [editDetail, setEditDetail] = useState(false);
    const [editDetailForm, setEditDetailForm] = useState({
        product_name: '',
        category: 'another',
        description: '',
        detail: '',
        nutritional_value: null,
        after_discount: null
    });

    useEffect(() => {
        if (isAfterDiscount) {
            setEditDetailForm({
                ...editDetailForm,
                after_discount: selectedProduct.after_discount ? selectedProduct.after_discount : (selectedProduct.price - 1),
            });
        }
        if (!isAfterDiscount) {
            setEditDetailForm({
                ...editDetailForm,
                after_discount: null
            });
        }
    }, [isAfterDiscount])

    useEffect(() => {
        if (editDetail) {
            setEditDetailForm({
                ...editDetailForm,
                product_name: selectedProduct.product_name,
                description: selectedProduct.description,
                detail: selectedProduct.detail,
                after_discount: selectedProduct.after_discount ? selectedProduct.after_discount : (selectedProduct.price - 1),
            });

            setIsAfterDiscount(selectedProduct.after_discount ? true : false);
        }
    }, [editDetail]);

    const handleChangeEditForm = (e) => {
        let { name, value } = e.target;

        //เพิ่มการเช็คราคาที่ลดห้ามกรอกเกินราคาต้น
        if (name === 'after_discount') {
            if (value > (selectedProduct.price - 1)) {
                value = selectedProduct.price - 1;
            }
        }
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

        dispatch(updateProductStock(targetProductId))

    }

    const status_update_stock = useSelector(({ admin }) => (admin ? admin.status_update_stock : ""));
    const available_stock = useSelector(({ admin }) => (admin ? admin.available_stock : ""));

    useEffect(() => {
        if ((status_update_stock === "success") && (selectedProduct)) {
            // คัดลอก state ทั้ง object
            const updatedState = { ...selectedProduct };

            // ทำการอัปเดตค่าใน object
            updatedState.available_stock = available_stock;

            setSelectedProduct(updatedState);
        }
    }, [status_update_stock])

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

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);

    // ฟังก์ชันค้นหารายการสินค้า
    const handleSearch = () => {
        const filtered = products_pynk.filter(
            product =>
                product.product_id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    useEffect(() => {
        if (products_pynk) {
            handleSearch();
        }
    }, [searchTerm])

    const renderProductList = () => {
        return (
            <div>
                <div className='d-flex justify-content-between mb-4'>
                    <div>
                        <h2 className='bold'>สินค้า</h2>
                        <div>จำนวน {products_pynk ? products_pynk.length : 0} รายการ</div>
                        <div className='d-flex align-items-center  justify-content-center'>
                            <input
                                type="text"
                                placeholder="ค้นหารายการสินค้า (รหัสสินค้า หรือ ชื่อสินค้า)"
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                                style={{ width: 500, height: 40 }}
                            />
                            <button onClick={handleSearch} className='buy-now' style={{ width: 100 }} ><i class="fa-solid fa-magnifying-glass"></i> ค้นหา</button>
                        </div>
                    </div>
                    <div>
                        <button className='buy-now' style={{ width: 150 }} onClick={() => history.push("group_product")}>จัดกลุ่มสินค้า</button>
                        <button className='buy-now' style={{ width: 150 }} onClick={() => history.push("add_product")}><i class="fa-solid fa-plus"></i> เพิ่มสินค้าใหม่</button>
                    </div>
                </div>


                <div className='card'>
                    <table class="product-table-admin">
                        <thead>
                            <tr>
                                <th>รหัสสินค้า</th>
                                <th>ชื่อสินค้า</th>
                                <th>หมวดหมู่สินค้า</th>
                                <th>กลุ่มสินค้า</th>
                                <th>ราคา</th>
                                <th>ราคาลด</th>
                                <th>จำนวนสินค้า</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                (filteredProducts.length > 0) ?
                                    filteredProducts.map((product, index) => (

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
                                            <td>{product.group_name ? product.group_name : "-"}</td>
                                            <td>{product.price}</td>
                                            <td>{product.after_discount ? `${product.after_discount}` : "-"}</td>
                                            <td>{product.available_stock}</td>
                                        </tr>
                                    ))
                                    :
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

    async function fetchImages() {
        const imageUrls = JSON.parse(selectedProduct.image_list);
        console.log("za selectedProduct :", selectedProduct);
        let updatedImages = []

        for (let i = 0; i < initialImages.length; i++) {
            const name = initialImages[i].name;
            const url = imageUrls[i] ? imageUrls[i] : null;
            updatedImages.push({ name: name, img: url })
        }

        console.log("za updatedImages:", updatedImages);
        setBtnUpload(updatedImages);
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
                    onClick={() => {
                        setEditDetail(true);
                        fetchImages();
                    }}
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
                                {
                                    selectedProduct.after_discount ?
                                        <div className="d-flex gap-2">
                                            <p className='fs-5' style={{ textDecoration: "line-through" }} >{selectedProduct.price} บาท</p>
                                            <p className='bold fs-5'>{selectedProduct.after_discount} บาท</p>
                                        </div>
                                        :
                                        <div className='bold fs-5'>{selectedProduct.price} บาท</div>
                                }
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
        description,
        nutritional_value,
        detail,
        after_discount
    ) {

        let image_list = [];
        btnUpload.map((item, index) => {
            if (item.img) {
                image_list.push(item.img)
            }
        });

        dispatch(update_product(
            product_id,
            product_name,
            category,
            available_stock,
            image_list,
            description,
            nutritional_value,
            detail,
            after_discount
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
                    <div className="p-3 gap-3">
                        {/* <div style={{}}>
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
                        </div> */}

                        <p className='text-danger' style={{ position: "absolute" }}>โปรดใส่อย่างน้อย 1 รูป เพื่อใช้เป็นรูปสินค้าหลัก</p>
                        <div className='d-flex mt-5 gap-3 flex-wrap' style={{}}>
                            {
                                btnUpload &&
                                btnUpload.map((item, index) => (
                                    <div className="parent-div d-flex flex-column ">
                                        {
                                            item.img ?
                                                <div className="d-flex flex-row-reverse" style={{ position: "relative", top: 20, right: 5 }} >
                                                    <i className="fa-solid fa-trash pointer" onClick={() => onDeleteImg(index)}></i>
                                                </div>
                                                :
                                                <div className="d-flex flex-row-reverse" style={{ position: "relative", top: 20, right: 5, color: "white" }} >
                                                    <i className="fa-solid fa-trash" ></i>
                                                </div>
                                        }

                                        <div className="top-div border d-flex align-items-center align-items-center justify-content-center" style={{ width: 200 }} >
                                            {
                                                item.img ?
                                                    <img key={index} src={item.img} alt={`Image ${index}`} width={200} />
                                                    :
                                                    <img key={index} src={no_img} alt={`Image ${index}`} width={200} />
                                            }
                                        </div>
                                        <div className="bottom-div border d-flex flex-column align-items-center  justify-content-center" style={{ width: 200 }} >
                                            <p>{item.name}</p>
                                        </div>
                                        <input type="file" id={`btnImgUpload${index}`} /* multiple */ onChange={handleImageChange} accept="image" style={{ display: "none" }} />
                                        {
                                            (index > 0) ?
                                                btnUpload[index - 1].img ?
                                                    <div
                                                        class="file-upload"
                                                        onClick={() => {
                                                            document.getElementById(`btnImgUpload${index}`).click();
                                                        }}
                                                    >
                                                        <label for="myFile center" style={{ width: 200 }}>
                                                            <i class="fas fa-cloud-upload-alt"></i> เลือกไฟล์
                                                        </label>
                                                    </div>
                                                    :
                                                    <div
                                                        class="file-upload"
                                                    >
                                                        <label for="myFile center" style={{ width: 200, backgroundColor: "gray", cursor: "auto" }}>
                                                            <i class="fas fa-cloud-upload-alt"></i> เลือกไฟล์
                                                        </label>
                                                    </div>
                                                :
                                                <div
                                                    class="file-upload"
                                                    onClick={() => {
                                                        document.getElementById(`btnImgUpload${index}`).click();
                                                    }}
                                                >
                                                    <label for="myFile center" style={{ width: 200 }}>
                                                        <i class="fas fa-cloud-upload-alt"></i> เลือกไฟล์
                                                    </label>
                                                </div>
                                        }
                                    </div>
                                ))
                            }
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
                                {
                                    isAfterDiscount ?
                                        <div className='fs-5' style={{ textDecoration: "line-through" }}>{selectedProduct.price} บาท</div>
                                        :
                                        <div className='bold fs-5'>{selectedProduct.price} บาท</div>
                                }
                            </div>
                            <div className='mb-2'>
                                <label>คุณต้องการลดราคาสินค้าชิ้นนี้หรือไม่?</label>

                                <div className='d-flex align-items-center gap-2'>
                                    <input
                                        className='form-check-input2'
                                        type="radio"
                                        id="no"
                                        name="afterDiscount"
                                        value="no"
                                        checked={!isAfterDiscount}
                                        onChange={handleRadioChange2}
                                    />
                                    <div>ไม่</div>
                                </div>
                                <div className='d-flex  align-items-center gap-2'>
                                    <input
                                        className='form-check-input2'
                                        type="radio"
                                        id="yes"
                                        name="afterDiscount"
                                        value="yes"
                                        checked={isAfterDiscount}
                                        onChange={handleRadioChange2}
                                    />
                                    <div>ใช่</div>
                                </div>
                                {
                                    isAfterDiscount &&
                                    <div className='d-flex align-items-center gap-1'>
                                        <p>ราคาหลังจากลด:</p>
                                        <input
                                            type="number"
                                            id="after_discount"
                                            name="after_discount"
                                            value={editDetailForm.after_discount}
                                            onChange={handleChangeEditForm}
                                            style={{ width: 150, height: 40 }}
                                            max={selectedProduct.price - 1}
                                        />
                                        <p>บาท</p>
                                    </div>
                                }
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
                                editDetailForm.description,
                                nutritionalInfoList,
                                editDetailForm.detail,
                                (editDetailForm.after_discount && isAfterDiscount) ? editDetailForm.after_discount : null
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
