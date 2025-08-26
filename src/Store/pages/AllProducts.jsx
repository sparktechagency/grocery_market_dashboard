import React, { useEffect, useState } from "react";
import {
  Table,
  Space,
  Image,
  Popconfirm,
  Pagination,
} from "antd";

import { useForm } from "antd/es/form/Form";
import { IconSearch } from "../../assets/icon";

const AllProducts = () => {
  const [addForm] = useForm();
  const [editForm] = useForm();
  const [isAddModalOpen, setIsModalAddOpen] = useState(false);
  const [isEditModalOpen, setIsModalEditOpen] = useState(false);
  const [viewDetailsModalOpen, setViewDetailsModalOpen] = useState(false);
  const [editId, setEditId] = useState("");
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(8);

  // 🔹 Sample data (replace later with API data)
  const productData = [
    {
      key: "1",
      product_name: "Wireless Headphones",
      image: "https://via.placeholder.com/80",
      store_name: "Tech Store",
      promo_price: 99,
      regular_price: 149,
    },
    {
      key: "2",
      product_name: "Smart Watch",
      image: "https://via.placeholder.com/80",
      store_name: "Gadget Hub",
      promo_price: 199,
      regular_price: 249,
    },
    {
      key: "3",
      product_name: "Gaming Mouse",
      image: "https://via.placeholder.com/80",
      store_name: "Pro Gaming",
      promo_price: 49,
      regular_price: 89,
    },
  ];

  // 🔎 Search filter
  const filteredData = productData.filter(
    (item) =>
      item.product_name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.store_name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  // 🔹 Table Columns
  const columns = [
    {
      title: "Product Name",
      dataIndex: "product_name",
      key: "product_name",
      align: "center",
      render: (text) => <span className="font-medium">{text}</span>,
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      align: "center",
      render: (image) => (
        <Image
          width={60}
          height={60}
          src={image}
          alt="product"
          style={{ objectFit: "cover", borderRadius: "8px" }}
        />
      ),
    },
    {
      title: "Store Name",
      dataIndex: "store_name",
      key: "store_name",
      align: "center",
    },
    {
      title: "Promo Price",
      dataIndex: "promo_price",
      key: "promo_price",
      align: "center",
      render: (price) => (
        <span className="text-green-600 font-semibold">${price}</span>
      ),
    },
    {
      title: "Regular Price",
      dataIndex: "regular_price",
      key: "regular_price",
      align: "center",
      render: (price) => (
        <span className="line-through text-gray-500">${price}</span>
      ),
    },
  
  ];

  return (
    <>
      {/* 🔎 Search + Add */}
      <div className=" w-full my-8">
        <div className="flex items-center">
          <input
            type="search"
            value={searchText}
            onChange={handleChange}
            className="w-[534px] p-4 border rounded-l-full border-[#D9D9D9] focus:outline-none"
            placeholder="Search product or store"
          />
          <button className="bg-primary p-2.5 -ml-1 border rounded-r-full">
            {IconSearch}
          </button>
        </div>
      </div>

      {/* 🔹 Table */}
      <Table
        columns={columns}
        rowClassName={() => "table-row-gap"}
        className="custom-ant-table"
        dataSource={filteredData}
        pagination={false}
      />

      {/* 🔹 Pagination */}
      <div className="flex justify-end pt-4">
        <Pagination
          showSizeChanger={false}
          current={currentPage}
          pageSize={perPage}
          total={filteredData.length}
          onChange={(page, pageSize) => {
            setCurrentPage(page);
            setPerPage(pageSize);
          }}
        />
      </div>
    </>
  );
};

export default AllProducts;
