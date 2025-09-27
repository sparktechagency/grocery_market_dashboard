import { useEffect, useState } from "react";
import { useGetDashboardAllUserApiQuery } from "../../../redux/dashboardFeatures/allUsers/dashboardAllUserApi"
import { Pagination, Table } from "antd";
import { IconSearch } from "../../../assets/icon";



const ManageUser = () => {
  const [searchText, setSearchText] = useState('')
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);


  const { data: getAllUser, refetch } = useGetDashboardAllUserApiQuery({ totalUser: perPage, page: currentPage,search:searchText })
  const allUserData = getAllUser?.userdata?.data
  const totalPagination = getAllUser?.userdata?.total








  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
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
      title: "Role",
      dataIndex: "role",
      key: "role",
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
          placeholder="Search by name or email"
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

export default ManageUser
