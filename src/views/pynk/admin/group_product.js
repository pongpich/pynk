import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function GroupProduct() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [addGroupPage, setAddGroupPage] = useState(false);
    const [newGroupName, setNewGroupName] = useState('');
    const [productGroups, setProductGroups] = useState(['Group 1', 'Group 2']); // กำหนดกลุ่มสินค้าเริ่มต้น


    const [groups, setGroups] = useState([
        "Bebe Fit Routine Speed Rope",
        "Fitto Plant Protein"
    ]);
    const [selectedGroup, setSelectedGroup] = useState('');
    const handleSelectChange = (event) => {
        setSelectedGroup(event.target.value);
    };

    const [products, setProducts] = useState([]); // สร้าง state เพื่อเก็บสินค้าที่เพิ่มเข้ามา

    const handleAddProduct = (event) => {
        event.preventDefault();
        const productId = event.target.productId.value; // รับค่ารหัสสินค้าจากฟอร์ม
        setProducts([...products, productId]); // เพิ่มรหัสสินค้าลงใน state products
        event.target.reset(); // รีเซ็ตค่าในฟอร์ม
    };

    const handleInputChange = (event) => {
        setNewGroupName(event.target.value);
    };

    const handleAddGroup = () => {
        if (newGroupName.trim() !== '') {
            setProductGroups([...productGroups, newGroupName]);
            setNewGroupName('');
        }
    };

    const renderAddProductGroup = () => {
        return (
            <div className='card'>
                <h2>สร้างกลุ่มใหม่</h2>
                <input
                    type="text"
                    placeholder="Enter group name"
                    value={newGroupName}
                    onChange={handleInputChange}
                />
                <button onClick={handleAddGroup}>Add Group</button>

                <p>รายชื่อกลุ่ม</p>
                <ul>
                    {productGroups.map((group, index) => (
                        <li key={index}>{group}</li>
                    ))}
                </ul>
            </div>
        )
    }

    const renderSelectedGroup = () => {
        return (
            <div className='card mb-5'>
                <h2>จัดการกลุ่ม</h2>
                <label htmlFor="groupSelect">เลือกกลุ่ม:</label>
                <select
                    id="groupSelect"
                    value={selectedGroup}
                    onChange={handleSelectChange}
                >
                    <option value="">Select a group</option>
                    {groups.map((group, index) => (
                        <option key={index} value={group}>
                            {group}
                        </option>
                    ))}
                </select>

                {
                    selectedGroup &&
                    <div>
                        <form className='mt-5' onSubmit={handleAddProduct}>
                            <label htmlFor="productId">กรอกรหัสสินค้า:</label>
                            <input type="text" id="productId" name="productId" />
                            <button type="submit">เพิ่มสินค้า</button>
                        </form>

                        <p>สมาชิกในกลุ่ม:</p>
                        <ul>
                            {products.map((product, index) => (
                                <li key={index}>{product}</li>
                            ))}
                        </ul>
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
