


import { useEffect, useState } from "react";
import { Pagination, Table } from "antd";
import { IconSearch } from "../../../assets/icon";
import { useGetDashboardAllShopperApiQuery } from "../../../redux/allShopper/dashboardAllShopperApi";



const ManageShopper = () => {
  const [searchText, setSearchText] = useState('')
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);


  const { data: getAllUser, refetch } = useGetDashboardAllShopperApiQuery({ per_page: perPage, page: currentPage,search:searchText })
  const allUserData = getAllUser?.data?.data
  const totalPagination = getAllUser?.data?.total








  const columns = [
    {
      title: "Nmae",
      dataIndex: "storeName",
      key: "storeName",
      align: "center",
    },
    {
      title: "Address",
      dataIndex: "addressLine1",
      key: "addressLine1",
      align: "center",
    },
    {
      title: "Store Number",
      dataIndex: "storeNumber",
      key: "storeNumber",
      align: "center",
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
      align: "center",
    },
    {
      title: "State",
      dataIndex: "state",
      key: "state",
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


  const handleChange = (e) => {
    setSearchText(e.target.value);
  }


  useEffect(() => {
    refetch();
  }, [currentPage, perPage,searchText, refetch]);



  return (
    <div className="w-full">
      <div className='flex items-center my-8'>
        <input
          type="search"
          value={searchText}
          onChange={handleChange}
          className="w-[534px] p-4 border rounded-l-full border-[#D9D9D9] focus:outline-none"
          placeholder="Search by name or city"
          name=""
          id=""
        />
        <button className="bg-primary p-2.5 -ml-1 border rounded-r-full">
          {IconSearch}
        </button>
      </div>

      <Table
        columns={columns}
        dataSource={allUserData}
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
