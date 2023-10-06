import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../../redux/pynk/get"
import "../css/products_management.css";

function ProductsManagement() {
    const history = useHistory();
    const dispatch = useDispatch();

    const user = useSelector(({ auth }) => (auth ? auth.user : ""));
    const products_pynk = useSelector(({ getPynk }) => (getPynk ? getPynk.products_pynk : ""));

    const [productDetailPage, setProductDetailPage] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [focusImg, setFocusImg] = useState(null);

    useEffect(() => {
        //เช็คว่าถ้าไม่ใช่ admin ให้เตะออกจากหน้านี้
        if (!user || (user && user.authorization !== "admin")) {
            history.push("/home");
        }

        dispatch(getProducts());
    }, []);

    function onSelectedProduct(product_id) {
        setProductDetailPage(true);

        //กรองโดยใช้ product_id และ setState
        const targetProductId = product_id;
        const filteredProduct = products_pynk.filter(product => product.product_id === targetProductId);
        setSelectedProduct(filteredProduct[0]);
    }

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
                                <th>ประเภท</th>
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
                                        <td>{product.product_name}</td>
                                        <td>{product.category}</td>
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

    const renderProductDetail = () => {
        const imageList = JSON.parse(selectedProduct && selectedProduct.image_list);
        return (
            <div>
                <div className='pointer bold text-primary' onClick={() => setProductDetailPage(false)}>{`< สินค้า`}</div>
                <h2 className='mb-5'>รายละเอียดสินค้า {selectedProduct.product_name}</h2>
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
                                <div className='bold fs-5'>{selectedProduct.category}</div>
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

    return (
        <div style={{ padding: 30 }}>

            {
                productDetailPage ?
                    renderProductDetail()
                    :
                    renderProductList()
            }
        </div>
    );
}

export default ProductsManagement;
