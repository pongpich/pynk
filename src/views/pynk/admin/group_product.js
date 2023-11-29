import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getMemberGroupProduct, getAllGroupProduct, setGroupProduct, addGroupProduct } from "../../../redux/pynk/admin";
import no_img from "../../../assets/img/pynk/no_image_icon.png";


function GroupProduct() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [newGroupName, setNewGroupName] = useState('');
    const [productGroups, setProductGroups] = useState(['Group 1', 'Group 2']); // กำหนดกลุ่มสินค้าเริ่มต้น
    const [products, setProducts] = useState([]); // สร้าง state เพื่อเก็บสินค้าที่เพิ่มเข้ามา
    const [groups, setGroups] = useState([]);
    const [selectedGroup, setSelectedGroup] = useState('');
    const [errMessageProductId, setErrMessageProductId] = useState(false);

    const status_get_all_group_product = useSelector(({ admin }) => (admin ? admin.status_get_all_group_product : ""));
    const all_group_product = useSelector(({ admin }) => (admin ? admin.all_group_product : ""));
    const status_get_member_group_product = useSelector(({ admin }) => (admin ? admin.status_get_member_group_product : ""));
    const member_group_product = useSelector(({ admin }) => (admin ? admin.member_group_product : ""));
    const status_set_group_product = useSelector(({ admin }) => (admin ? admin.status_set_group_product : ""));
    const status_add_group_product = useSelector(({ admin }) => (admin ? admin.status_add_group_product : ""));


    const handleSelectChange = (event) => {
        setSelectedGroup(event.target.value);

        dispatch(getMemberGroupProduct(event.target.value))
    };


    const handleAddProduct = (event) => {
        event.preventDefault();
        const product_id = event.target.product_id.value; // รับค่ารหัสสินค้าจากฟอร์ม
        const property = event.target.property.value;
        // setProducts([...products, productId]); // เพิ่มรหัสสินค้าลงใน state products
        event.target.reset(); // รีเซ็ตค่าในฟอร์ม
        dispatch(setGroupProduct(
            product_id,
            selectedGroup,
            property
        ))
    };

    const handleInputChange = (event) => {
        setNewGroupName(event.target.value);
    };

    const handleAddGroup = () => {
        console.log("newGroupName :", newGroupName);
        dispatch(addGroupProduct(newGroupName))
        /* if (newGroupName.trim() !== '') {
            //setProductGroups([...productGroups, newGroupName]);
           // setNewGroupName('');
        } */
    };

    useEffect(() => {
        dispatch(getAllGroupProduct());
    }, [])

    useEffect(() => {
        if (status_get_all_group_product === "success") {
            setGroups(all_group_product);
        }
    }, [status_get_all_group_product]);

    useEffect(() => {
        if (status_get_member_group_product === "success") {
            setProducts(member_group_product);
        }
    }, [status_get_member_group_product]);

    useEffect(() => {
        if (status_set_group_product === "success") {
            dispatch(getMemberGroupProduct(selectedGroup));
        }
    }, [status_set_group_product]);

    useEffect(() => {
        if (status_add_group_product === "success") {
            dispatch(getAllGroupProduct());
        }
    }, [status_add_group_product])

    useEffect(() => {
        if (status_set_group_product === "fail") {
            setErrMessageProductId(true);
        }
        if (status_set_group_product === "success") {
            setErrMessageProductId(false);
        }
    }, [status_set_group_product])

    const renderAddProductGroup = () => {
        return (
            <div className='card' style={{ padding: 20 }}>
                <h2>สร้างกลุ่มใหม่</h2>
                <div className='d-flex align-items-center mt-5'>
                    <p className='bold'>ตั้งชื่อกลุ่ม:</p>
                    <input
                        type="text"
                        placeholder="กรอกชื่อกลุ่ม"
                        value={newGroupName}
                        onChange={handleInputChange}
                        style={{ width: "35%", height: 40 }}
                    />
                    <button className='buy-now' style={{ width: 150 }} onClick={handleAddGroup}>สร้างกลุ่ม</button>
                </div>
                {
                    (status_add_group_product === "fail") &&
                    <p className="text-danger">มีชื่อกลุ่มนี้อยู่แล้วในระบบ ห้ามตั้งชื่อซ้ำ</p>
                }

                <p className='bold'>รายชื่อกลุ่มทั้งหมด:</p> <p>(จะเรียงจากอันที่สร้างล่าสุด ไว้บนสุด)</p>
                <table className="product-table-admin">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>ชื่อกลุ่ม</th>
                        </tr>
                    </thead>
                    <tbody>
                        {groups && groups.map((group, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{group.group_name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }

    const renderSelectedGroup = () => {
        return (
            <div className='card mb-5' style={{ padding: 20 }}>
                <h2>จัดการกลุ่ม</h2>
                <label htmlFor="groupSelect" className='mt-5 bold'>เลือกกลุ่ม:</label>
                <select
                    id="groupSelect"
                    value={selectedGroup}
                    onChange={handleSelectChange}
                >
                    <option value="">Select a group</option>
                    {groups &&
                        groups.map((group, index) => (
                            <option key={index} value={group.group_name}>
                                {group.group_name}
                            </option>
                        ))}
                </select>

                <p className='mt-5 bold'>สมาชิกในกลุ่ม:</p>
                {
                    selectedGroup &&
                    <div>
                        <table className="product-table-admin">
                            <thead>
                                <tr>
                                    <th>รหัสสินค้า</th>
                                    <th>ชื่อสินค้า</th>
                                    <th>คุณสมบัติ</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product, index) => (
                                    <tr key={product.product_id}>
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
                                        <td>{product.property}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <p className='mt-5 bold'>เพิ่มสมาชิก:</p>
                        <form onSubmit={handleAddProduct}>
                            <div className='d-flex  align-items-center'>
                                <label htmlFor="productId">รหัสสินค้า:</label>
                                <input type="text" id="product_id" name="product_id" placeholder="กรอกรหัสสินค้า" style={{ width: "20%", height: 40 }} />
                                <label htmlFor="productId" >คุณสมบัติ (เช่น สี, รสชาติ, size):</label>
                                <input type="text" id="property" name="property" placeholder="กรอกคุณสมบัติ" style={{ width: "20%", height: 40 }} />
                                <button className='buy-now' style={{ width: 100 }} type="submit">เพิ่มสมาชิก</button>
                            </div>
                            {
                                (errMessageProductId) &&
                                <p className="text-danger">รหัสสินค้าไม่ถูกต้อง ตรวจสอบให้แน่ใจว่าเพิ่มสินค้าในระบบแล้ว</p>
                            }
                        </form>
                    </div>
                }
            </div>
        )
    }


    return (
        <div style={{ padding: 30 }}>
            <div className='pointer bold text-primary' onClick={() => history.push("products_management")}>{`< สินค้า`}</div>
            <h2 className='mb-5'>จัดกลุ่มสินค้า</h2>

            {renderSelectedGroup()}
            {renderAddProductGroup()}

        </div>
    );
}

export default GroupProduct;
