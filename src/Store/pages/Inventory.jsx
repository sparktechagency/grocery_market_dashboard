import { DownOutlined } from "@ant-design/icons";
import React, { useState } from 'react'
import { Select } from "antd";
import InventoryTable from "../../components/inventrory/InventoryTable";
import { IconPlusWhite, IconSearch } from "../../assets/icon";
import AddModalProduct from "../../components/inventrory/AddProductModal";

const InventoryPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };



    return (
        <div>
            <div className=" flex justify-between items-center mt-5 mb-[43px]">

                <div className="flex items-center">
                    <input
                        type="search"
                        className="w-[534px] p-4 border rounded-l-full border-[#D9D9D9]"
                        placeholder="Search products"
                        name=""
                        id=""
                    />
                    <button className="bg-primary p-2.5 -ml-1 border rounded-r-full">
                        {IconSearch}
                    </button>
                </div>

                <button
                    onClick={showModal}
                    className="font-semibold ml-7 flex items-center gap-6 text-base font-roboto text-white bg-primary rounded-full py-3 px-[63px]"
                >
                    {IconPlusWhite}
                </button>

            </div>
            {/* ---------------- table -------------------- */}
            <InventoryTable />

            <AddModalProduct isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </div>
    )
}

export default InventoryPage