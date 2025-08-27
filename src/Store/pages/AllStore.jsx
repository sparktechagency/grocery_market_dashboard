import React, { useState } from "react";
import { Table, Pagination } from "antd";
import { IconSearch } from "../../assets/icon";
import { useGetStoreApiQuery } from "../../redux/dashboardFeatures/allProduct/allStore/dashboardAllStore";



const AllStore = () => {
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);


  const { data: getStore } = useGetStoreApiQuery({ search: searchText, per_page: perPage, page: currentPage, })
  const allStoreData = getStore?.data?.data
  const totalPagination = getStore?.data?.total



  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  // 🔹 Table Columns
  const columns = [
    {
      title: "Store Name",
      dataIndex: "storeName",
      key: "storeName",
      align: "center",
      render: (storeName) => <span className="font-medium">{storeName}</span>,
    },
    {
      title: "Address",
      dataIndex: "addressLine1",
      key: "addressLine1",
      align: "center",
    },
    {
      title: "Zip Code",
      dataIndex: "zipCode",
      key: "zipCode",
      align: "center",
    },
    {
      title: "Latitude",
      dataIndex: "latitude",
      key: "latitude",
      align: "center",
    },
    {
      title: "Longitude",
      dataIndex: "longitude",
      key: "longitude",
      align: "center",
    },
  ];

  return (
    <>
      {/* Search Box */}
      <div className="w-full my-8">
        <div className="flex items-center">
          <input
            type="search"
            value={searchText}
            onChange={handleChange}
            className="w-[534px] p-4 border rounded-l-full border-[#D9D9D9] focus:outline-none"
            placeholder="Search by storeName or address"
          />
          <button className="bg-primary p-2.5 -ml-1 border rounded-r-full">
            {IconSearch}
          </button>
        </div>
      </div>

      {/* 🔹 Table */}
      <Table
        columns={columns}
        dataSource={allStoreData}
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

export default AllStore;
