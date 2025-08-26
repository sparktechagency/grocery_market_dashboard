// import React from 'react';
// import "./order.module.css";
// import { Segmented, Tabs } from 'antd';
// import NewOrderManagementTable from '../../components/orderManagement/NewOrderManagementTable';
// import PendingOrderManagementTable from '../../components/orderManagement/PendingOrderManagementTable';
// import CompleteOrderManagement from '../../components/orderManagement/CompleteOrderManagement';
// import styles from './order.module.css';
// import { useGetOrderApiQuery } from '../../redux/dashboardFeatures/manageOrder/dashboardManageOrder';

// const onChange = () => {
//     // console.log();
// };
// const items = [
//     { key: '1', label: <div className=" ">New</div>, children: <NewOrderManagementTable />, },
//     { key: '2', label: <div className="   ">Pending </div>, children: <PendingOrderManagementTable /> },
//     { key: '3', label: <div className="">Complete</div>, children: <CompleteOrderManagement /> },
// ];
// const OrderManagement = () => {

//     const {data:getOrder} = useGetOrderApiQuery()
//     const orderData = getOrder?.data
//     console.log(orderData)



//     return (
//         <div className={`w-full mx-auto  ${styles.wrapper} ${styles.hoverUnActiveTabs}`}>

//             <Tabs
//                 defaultActiveKey="1"
//                 items={items}
//                 onChange={onChange}
//                 indicator={false}
//                 centered


//             />
//         </div>
//     );
// }

// export default OrderManagement;



import React, { useState } from 'react';
import { Card, Table, Tag, Button, Space, Popconfirm, Pagination } from 'antd';
import { useGetOrderApiQuery, useUpdateNewStatusOrderApiMutation } from '../../redux/dashboardFeatures/manageOrder/dashboardManageOrder';
import toast from 'react-hot-toast';

const OrderManagement = () => {
    const [activeFilter, setActiveFilter] = useState('new');
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(8);



    const { data: getOrder, refetch } = useGetOrderApiQuery({ per_page: perPage, page: currentPage, status: activeFilter });
    const allOrderData = getOrder?.data
    // console.log(allOrderData)
    const totalPagination = getOrder?.total


    const [updateNewStatusOrderApi] = useUpdateNewStatusOrderApiMutation()

    const columns = [
        {
            title: "Customer Name",
            dataIndex: "name",
            key: "Name",
            render: (_, record) => (
                <div className="flex items-center gap-3">
                    <img className="rounded-full h-14 w-14" src={record?.user?.photo} alt="image" />
                    <p className=" text-black text-xl flex items-center">{record?.user?.name}</p>
                </div>
            ),
        },

        {
            title: 'Order Number',
            dataIndex: 'order_number',
            key: 'order_number',
            render: (order_number) => <p className='text-primary text-xl font-bold'>{order_number}</p>,
        },

        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render: (price) => <p className='text-primary text-xl font-medium'>${price}</p>,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status,record) => <p className='text-primary text-xl font-medium'>{status} ======== {record?.id}</p>,
        },


        {
            title: "Action",
            key: "action",
            align: "center",
            render: (_, record) =>
                activeFilter === 'new' ? (
                    <Space size="middle">
                        {/* view icon */}
                        <div
                        // onClick={showModal}
                        >
                            <svg
                                className='cursor-pointer'
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

                        <div
                        // onClick={showEditModal}
                        >
                            <svg
                                className='cursor-pointer'
                                onClick={() => handleStatusChangeNew(record.id)}
                                width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="37" height="37" rx="5" fill="#E4FFEB" />
                                <path d="M15.6933 27L8 19.4158L9.92331 17.5198L15.6933 23.2079L28.0767 11L30 12.8961L15.6933 27Z" fill="#23AA49" />
                            </svg>



                        </div>
                        <div className='cursor-pointer'>
                            <Popconfirm
                                title="Are you sure to changes this order status?"
                                onConfirm={() => handleCancelNew(record.id)}
                                okText="Yes"
                                cancelText="No"
                            >
                                <svg
                                    width="37"
                                    height="37"
                                    viewBox="0 0 37 37"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect width="37" height="37" rx="5" fill="#FFE6E6" />
                                    <path
                                        d="M23 16V26H15V16H23ZM21.5 10H16.5L15.5 11H12V13H26V11H22.5L21.5 10ZM25 14H13V26C13 27.1 13.9 28 15 28H23C24.1 28 25 27.1 25 26V14Z"
                                        fill="#FF0000"
                                    />
                                </svg>
                            </Popconfirm>
                        </div>
                    </Space>
                ) : activeFilter === 'pending' ? (
                    <Space size="middle">
                        {/* view icon */}
                        <div
                        // onClick={showModal}
                        >
                            <svg
                                className='cursor-pointer'
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


                        <div
                            className='cursor-pointer'
                        >
                            <Popconfirm
                                title="Are you sure to changes this name?"
                                // onConfirm={confirm}
                                // onCancel={cancel}
                                okText="Yes"
                                cancelText="No"
                            >
                                <svg
                                    width="37"
                                    height="37"
                                    viewBox="0 0 37 37"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect width="37" height="37" rx="5" fill="#FFE6E6" />
                                    <path
                                        d="M23 16V26H15V16H23ZM21.5 10H16.5L15.5 11H12V13H26V11H22.5L21.5 10ZM25 14H13V26C13 27.1 13.9 28 15 28H23C24.1 28 25 27.1 25 26V14Z"
                                        fill="#FF0000"
                                    />
                                </svg>
                            </Popconfirm>
                        </div>
                    </Space>
                ) : activeFilter === 'complete' ? (
                    <div>
                        <button className='bg-green-100 text-green-600 font-bold px-4 py-2 rounded-md'>Delivered</button>
                    </div>
                ) : activeFilter === 'cancel' ? (
                    <div>
                    
                    
                    </div>
                ) : null
        },
    ];



// =============== order confirm status add ====================
    const handleStatusChangeNew = async (id) => {
        const formData = new FormData();
        formData.append("status", "order_confirmed");

        try {
            const res = await updateNewStatusOrderApi({ updateNewStatusInfo:formData, id }).unwrap();
            console.log(res)
            if (res?.success === true) {
                toast.success(res?.message);
                refetch();
            }
        } catch (error) {
            toast.error(error.data?.message)
        }
    }



    //================== cancel order ================
    const handleCancelNew = async (id) => {
        const formData = new FormData();
        formData.append("status", "order_cancelled");

        try {
            const res = await updateNewStatusOrderApi({ updateNewStatusInfo:formData, id }).unwrap();
            console.log(res)
            if (res?.success === true) {
                toast.success(res?.message);
                refetch();
            }
        } catch (error) {
            toast.error(error.data?.message)
        }
    }







    return (
        <div className="min-h-screen  p-6">
            <div className="">
                <div className="w-full flex justify-center items-center gap-4 mb-10 mt-4">
                    <button
                        type={activeFilter === 'new' ? 'primary' : ''}
                        className={`w-[350px] px-4 py-4 text-2xl font-bold rounded ${activeFilter === 'new'
                            ? 'bg-green-600 text-white'
                            : 'border border-gray-300'
                            }`}
                        onClick={() => setActiveFilter('new')}
                    >
                        New
                    </button>
                    <button
                        type={activeFilter === 'pending' ? 'primary' : ''}
                        className={`w-[350px] px-4 py-4 text-2xl font-bold rounded ${activeFilter === 'pending'
                            ? 'bg-green-600 text-white'
                            : 'border border-gray-300'
                            }`}
                        onClick={() => setActiveFilter('pending')}
                    >
                        Pending
                    </button>
                    <button
                        type={activeFilter === 'complete' ? 'primary' : ''}
                        className={`w-[350px] px-4 py-4 text-2xl font-bold rounded ${activeFilter === 'complete'
                            ? 'bg-green-600 text-white'
                            : 'border border-gray-300'
                            }`}
                        onClick={() => setActiveFilter('complete')}
                    >
                        Complete
                    </button>
                    <button
                        type={activeFilter === 'cancel' ? 'primary' : ''}
                        className={`w-[350px] px-4 py-4 text-2xl font-bold rounded ${activeFilter === 'cancel'
                            ? 'bg-green-600 text-white'
                            : 'border border-gray-300'
                            }`}
                        onClick={() => setActiveFilter('cancel')}
                    >
                        Cancel
                    </button>
                </div>




                <Table
                    columns={columns}
                    dataSource={allOrderData}
                    pagination={false}
                    className="rounded-lg overflow-hidden"
                />


            </div>


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
                    }}
                />
            </div>
        </div>
    );
};

export default OrderManagement;