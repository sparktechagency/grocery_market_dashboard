


import { useEffect, useState } from "react";
import { Pagination, Table } from "antd";
import { IconSearch } from "../../../assets/icon";
import { useGetShopperApiQuery } from "../../../redux/dashboardFeatures/shoppers/dashboardShoppers";



const ManageShopper = () => {
  const [searchText, setSearchText] = useState('')
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(8);



  const { data: getAllShopper, refetch } = useGetShopperApiQuery({ per_page: perPage, page: currentPage, search: searchText })
  const allShopperData = getAllShopper?.data
  const totalPagination = getAllShopper?.total




  const columns = [
    {
      title: "Image",
      dataIndex: "photo",
      key: "photo",
      align: "center",
      render: (text) => <img src={text} alt="image" className="w-[30px] h-[30px] rounded-full object-cover" />
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      align: "center",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      align: "center",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      align: "center",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      align: "center",
    },
    {
      title: "Total Delivery",
      dataIndex: "total_delivery",
      key: "total_delivery",
      align: "center",
    },
  ];


  const handleChange = (e) => {
    setSearchText(e.target.value);
  }


  useEffect(() => {
    refetch();
  }, [currentPage, perPage, searchText, refetch]);



  return (
    <div className="w-full">
      <div className='flex items-center my-8'>
        <input
          type="search"
          value={searchText}
          onChange={handleChange}
          className="w-[534px] p-4 border rounded-l-full border-[#D9D9D9] focus:outline-none"
          placeholder="Search by name "
          name=""
          id=""
        />
        <button className="bg-primary p-2.5 -ml-1 border rounded-r-full">
          {IconSearch}
        </button>
      </div>

      <Table
        columns={columns}
        dataSource={allShopperData}
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
    </div>
  )
}

export default ManageShopper
