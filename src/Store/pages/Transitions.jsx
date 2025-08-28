import { useState } from "react";
import { useGetTransitionApiQuery } from "../../redux/dashboardFeatures/transition/dashboardTransitionApi"
import { Pagination, Space, Table } from "antd";
import { IconSearch } from "../../assets/icon";


const Transitions = () => {
  const [searchText, setSearchText] = useState('')
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(8);



  const { data: getAllTransition } = useGetTransitionApiQuery({ search:searchText ,per_page: perPage, page: currentPage, })
  const allTransitionData = getAllTransition?.data?.data
  const totalPagination = getAllTransition?.data?.total
  // console.log(allTransitionData)


  // 🔹 Table Columns
  const columns = [

    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      align: "center",
      render: (_, record) => <span className="font-medium">{record?.user?.name}</span>,
    },
    {
      title: "Order number",
      dataIndex: "order_number",
      key: "order_number",
      align: "center",
    },
    {
      title: "Total amount",
      dataIndex: "total_amount",
      key: "total_amount",
      align: "center",
      render: (total_amount) => (
        <span className="text-green-600 font-semibold">${total_amount}</span>
      ),
    },
    {
      title: "Return amount",
      dataIndex: "return_amount",
      key: "return_amount",
      align: "center",
      render: (return_amount) => (
        <span className="text-gray-800">${return_amount}</span>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      align: "center",
      render: (status) => (
        <span className='text-gray-600 font-bold  rounded-md'>{status}</span>
      ),
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: (_, record) => (
        <Space size="middle">
          {/* view icon */}
          <div className="cursor-pointer"
            onClick={() => showModal(record?.id)}
          >
            <svg
              className="cursor-pointer"
              width="37"
              height="37"
              viewBox="0 0 37 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="37" height="37" rx="5" fill="#FFF3EB" />
              <path
                d="M18 15.8C17.132 15.8 16.2996 16.1371 15.6858 16.7373C15.0721 17.3374 14.7273 18.1513 14.7273 19C14.7273 19.8487 15.0721 20.6626 15.6858 21.2627C16.2996 21.8629 17.132 22.2 18 22.2C18.868 22.2 19.7004 21.8629 20.3142 21.2627C20.9279 20.6626 21.2727 19.8487 21.2727 19C21.2727 18.1513 20.9279 17.3374 20.3142 16.7373C19.7004 16.1371 18.868 15.8 18 15.8ZM18 24.3333C16.5534 24.3333 15.166 23.7714 14.1431 22.7712C13.1201 21.771 12.5455 20.4145 12.5455 19C12.5455 17.5855 13.1201 16.229 14.1431 15.2288C15.166 14.2286 16.5534 13.6667 18 13.6667C19.4466 13.6667 20.834 14.2286 21.8569 15.2288C22.8799 16.229 23.4545 17.5855 23.4545 19C23.4545 20.4145 22.8799 21.771 21.8569 22.7712C20.834 23.7714 19.4466 24.3333 18 24.3333ZM18 11C12.5455 11 7.88727 14.3173 6 19C7.88727 23.6827 12.5455 27 18 27C23.4545 27 28.1127 23.6827 30 19C28.1127 14.3173 23.4545 11 18 11Z"
                fill="#F96D10"
              />
            </svg>
          </div>
        </Space>
      ),
    },
  ];



  const showModal = (id) => {
    console.log(id)
  }














  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div>


      <div className=" w-full my-6">
        <div className="flex items-center">
          <input
            type="search"
            value={searchText}
            onChange={handleChange}
            className="w-[534px] p-4 border rounded-l-full border-[#D9D9D9] focus:outline-none"
            placeholder="Search by order number"
          />
          <button className="bg-primary p-2.5 -ml-1 border rounded-r-full">
            {IconSearch}
          </button>
        </div>
      </div>



      {/* 🔹 Table */}
      <Table
        columns={columns}
        dataSource={allTransitionData}
        rowClassName={() => "table-row-gap"}
        className="custom-ant-table"
        pagination={false}
      />


      {/* pagination */}
      <div className="flex justify-end pt-4">
        <Pagination
          showSizeChanger={false}
          current={currentPage}
          pageSize={perPage}
          total={totalPagination || 0}
          onChange={(page, pageSize) => {
            setCurrentPage(page)
            setPerPage(pageSize)
          }} />
      </div>
    </div>
  )
}

export default Transitions
