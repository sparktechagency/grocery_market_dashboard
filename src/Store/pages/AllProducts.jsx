import React, { useState } from "react";
import {
  Table,

  Pagination,
} from "antd";

import { useForm } from "antd/es/form/Form";
import { IconSearch } from "../../assets/icon";
import { useGetProductApiQuery } from "../../redux/dashboardFeatures/allProduct/dashboardAllproducts";

const AllProducts = () => {
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(6);




  const { data: getProduct } = useGetProductApiQuery({ search: searchText, per_page: perPage, page: currentPage, })
  const allProductData = getProduct?.data?.data
   const totalPagination = getProduct?.data?.total








  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  // 🔹 Table Columns
  const columns = [
    {
      title: "Image",
      dataIndex: "images",
      key: "images",
      align: "center",
      render: (_, record) => (
        <div className="">
          <img className="rounded-full h-14 w-14" src={record?.images} alt="image" />
        </div>
      ),
    },
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
      align: "center",
      render: (name) => <span className="font-medium">{name}</span>,
    },
    {
      title: "Store Name",
      dataIndex: "storeName",
      key: "storeName",
      align: "center",
    },
    {
      title: "Promo Price",
      dataIndex: "promo_price",
      key: "promo_price",
      align: "center",
      render: (promo_price) => (
        <span className="text-green-600 font-semibold">${promo_price}</span>
      ),
    },
    {
      title: "Regular Price",
      dataIndex: "regular_price",
      key: "regular_price",
      align: "center",
      render: (regular_price) => (
        <span className="text-gray-800">${regular_price}</span>
      ),
    },

  ];

  return (
    <>
      {/*  Search + Add */}
      <div className=" w-full my-8">
        <div className="flex items-center">
          <input
            type="search"
            value={searchText}
            onChange={handleChange}
            className="w-[534px] p-4 border rounded-l-full border-[#D9D9D9] focus:outline-none"
            placeholder="Search by product name"
          />
          <button className="bg-primary p-2.5 -ml-1 border rounded-r-full">
            {IconSearch}
          </button>
        </div>
      </div>

      {/* 🔹 Table */}
      <Table
        columns={columns}
        dataSource={allProductData}
        rowClassName={() => "table-row-gap"}
        className="custom-ant-table"
        pagination={false}
      />

      {/* 🔹 Pagination */}
      <div className="flex justify-end pt-4">
        <Pagination
          showSizeChanger={false}
          current={currentPage}
          pageSize={perPage}
          total={totalPagination || 0}
          onChange={(page, pageSize) => {
            setCurrentPage(page)
            setPerPage(pageSize)
          }}
        />
      </div>
    </>
  );
};

export default AllProducts;
