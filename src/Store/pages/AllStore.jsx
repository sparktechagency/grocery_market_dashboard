import React, { useState } from "react";
import { Table, Pagination } from "antd";
import { useForm } from "antd/es/form/Form";
import { IconSearch } from "../../assets/icon";

const AllStore = () => {
  const [addForm] = useForm();
  const [editForm] = useForm();
  const [isAddModalOpen, setIsModalAddOpen] = useState(false);
  const [isEditModalOpen, setIsModalEditOpen] = useState(false);
  const [viewDetailsModalOpen, setViewDetailsModalOpen] = useState(false);
  const [editId, setEditId] = useState("");
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(8);

  // 🔹 Sample Store Data (replace later with API data)
  const storeData = [
    {
      key: "1",
      store_name: "Tech Store",
      address: "123 Main Street, Dhaka",
      zipCode: "1207",
      latitude: "23.8103",
      longitude: "90.4125",
    },
    {
      key: "2",
      store_name: "Gadget Hub",
      address: "45 Banani, Dhaka",
      zipCode: "1213",
      latitude: "23.7936",
      longitude: "90.4043",
    },
    {
      key: "3",
      store_name: "Pro Gaming",
      address: "88 Uttara, Dhaka",
      zipCode: "1230",
      latitude: "23.8740",
      longitude: "90.3790",
    },
  ];

  // 🔎 Search filter
  const filteredData = storeData.filter(
    (item) =>
      item.store_name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.address.toLowerCase().includes(searchText.toLowerCase()) ||
      item.zipCode.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  // 🔹 Table Columns
  const columns = [
    {
      title: "Store Name",
      dataIndex: "store_name",
      key: "store_name",
      align: "center",
      render: (text) => <span className="font-medium">{text}</span>,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
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
      {/* 🔎 Search Box */}
      <div className="w-full my-8">
        <div className="flex items-center">
          <input
            type="search"
            value={searchText}
            onChange={handleChange}
            className="w-[534px] p-4 border rounded-l-full border-[#D9D9D9] focus:outline-none"
            placeholder="Search store, address or zip code"
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

export default AllStore;
