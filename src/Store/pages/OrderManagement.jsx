
import React, { useState } from 'react';
import { Card, Table, Space, Popconfirm, Pagination, Modal } from 'antd';
import { useGetAllShopperApiQuery, useGetOrderApiQuery, useUpdateNewStatusOrderApiMutation } from '../../redux/dashboardFeatures/manageOrder/dashboardManageOrder';
import toast from 'react-hot-toast';
import { Select } from 'antd';

import { Avatar, } from "antd";
import {
    ShoppingOutlined,
    UserOutlined,
    DollarOutlined,
} from "@ant-design/icons";
import moment from 'moment';



const OrderManagement = () => {
    const [activeFilter, setActiveFilter] = useState('new');
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(6);
    const [newDetailsId, setNewDetailsId] = useState('')
    const [pendingDetailsId, setPendingDetailsId] = useState('')
    const [completeDetailsId, setCompleteDetailsId] = useState('')
    const [isOpenNewDetails, setIsOpenNewDetails] = useState(false)
    const [isOpenPendingDetails, setIsOpenPendingDetails] = useState(false)
    const [isOpenCompleteDetails, setIsOpenCompleteDetails] = useState(false)




    const { data: getOrder, refetch } = useGetOrderApiQuery({ per_page: perPage, page: currentPage, status: activeFilter });
    const allOrderData = getOrder?.data
    const totalPagination = getOrder?.total


    const { data: getAllShoper } = useGetAllShopperApiQuery();
    const allShopperData = getAllShoper?.data




    const [updateNewStatusOrderApi] = useUpdateNewStatusOrderApiMutation()

    // single order details 
    const singleNewOrderData = allOrderData?.find((item) => item?.id === newDetailsId);
    const singlePendingOrderData = allOrderData?.find((item) => item?.id === pendingDetailsId);
    const singleCompleteOrderData = allOrderData?.find((item) => item?.id === completeDetailsId);


    const handleChange = async (e) => {
        const formData = new FormData();
        formData.append("shopper_id", parseInt(e.target.value));
        formData.append("order_id", values?.order_id);



        try {
            const res = await addTermsApi(formData).unwrap();
            if (res?.status === true) {
                toast.success(res?.message);
                addForm.resetFields()
                setIsModalAddOpen(false);
            }
        } catch (error) {
            toast.error(error.data?.message)
        }

    };




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
            render: (order_number) => <p className='text-primary text-lg font-semibold'>{order_number}</p>,
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
            render: (status, record) => <p className='text-primary text-xl font-medium'>{status}</p>,
            // render: (status, record) => <p className='text-primary text-xl font-medium'>{status} ========== {record?.id}</p>,
        },
        {
            title: 'Shopper Name',
            dataIndex: 'shopper_name',
            key: 'shopper_name',
            render: (shopper_name, record) => <p className='text-primary text-xl font-medium'>{shopper_name}</p>,
            // render: (status, record) => <p className='text-primary text-xl font-medium'>{status} ========== {record?.id}</p>,
        },
        {
            title: 'Order_Id',
            dataIndex: 'id',
            key: 'id',
            render: (id, record) => <p className='text-primary text-xl font-medium'>{id}</p>,
        },
        {
            title: 'Assign shopper',
            dataIndex: 'shopper_name',
            key: 'shopper_name',
            align: "center",
            render: () => <button className='border rounded px-2 py-[3px] cursor-pointer'>
                <select
                    onChange={handleChange}
                    name="cars" id="cars" className='cursor-pointer'>
                    {
                        allShopperData?.map((item) => {
                            // console.log(item)
                            return (
                                <option value={item.id}>{item.name}</option>
                            )
                        })
                    }
                </select>
            </button>,
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
                            onClick={() => showNewDetailsModal(record?.id)}>
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

                        <div>
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
                            onClick={() => showPendingDetailsModal(record?.id)}
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
                                onConfirm={() => handleCancelPending(record.id)}
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
                        <button
                            onClick={() => showCompleteDetailsModal(record?.id)}
                            className='cursor-pointer bg-green-100 text-green-600 font-bold px-4 py-2 rounded-md'>Delivered</button>
                    </div>
                ) : activeFilter === 'cancel' ? (
                    <div>


                    </div>
                ) : null
        },
    ];



    const showNewDetailsModal = (id) => {
        setNewDetailsId(id)
        setIsOpenNewDetails(true)
    }


    const handleOkNewModal = () => {
        setIsOpenNewDetails(false)
    }

    const handleCancelNewModal = () => {
        setIsOpenNewDetails(false)
    }





    // =============== New order confirm status add ====================
    const handleStatusChangeNew = async (id) => {
        const formData = new FormData();
        formData.append("status", "order_confirmed");

        try {
            const res = await updateNewStatusOrderApi({ updateNewStatusInfo: formData, id }).unwrap();
            console.log(res)
            if (res?.success === true) {
                toast.success(res?.message);
                refetch();
            }
        } catch (error) {
            toast.error(error.data?.message)
        }
    }



    //================== New cancel order ================
    const handleCancelNew = async (id) => {
        const formData = new FormData();
        formData.append("status", "order_cancelled");

        try {
            const res = await updateNewStatusOrderApi({ updateNewStatusInfo: formData, id }).unwrap();
            console.log(res)
            if (res?.success === true) {
                toast.success(res?.message);
                refetch();
            }
        } catch (error) {
            toast.error(error.data?.message)
        }
    }









    // =============== Pending order Modal Details ====================
    const showPendingDetailsModal = (id) => {
        setPendingDetailsId(id)
        setIsOpenPendingDetails(true)
    }

    const handleOkPendingModal = () => {
        setIsOpenPendingDetails(false)
    }

    const handleCancelPendingModal = () => {
        setIsOpenPendingDetails(false)
    }



    // status changes
    const handleCancelPending = async (id) => {
        const formData = new FormData();
        formData.append("status", "order_cancelled");

        try {
            const res = await updateNewStatusOrderApi({ updateNewStatusInfo: formData, id }).unwrap();
            console.log(res)
            if (res?.success === true) {
                toast.success(res?.message);
                refetch();
            }
        } catch (error) {
            toast.error(error.data?.message)
        }
    }

    //================== Pending cancel order ================




    // =============== Complete order Modal Details ====================
    const showCompleteDetailsModal = (id) => {
        setCompleteDetailsId(id)
        setIsOpenCompleteDetails(true)
    }

    const handleOkCompleteModal = () => {
        setIsOpenCompleteDetails(false)
    }

    const handleCancelCompleteModal = () => {
        setIsOpenCompleteDetails(false)
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




            {/* NEW ORDER DETAILS */}
            <Modal
                centered
                title={
                    <div className="text-center bg-primary text-[#ffffff] py-4 font-degular text-[18px]  font-semibold rounded-t-lg">
                        Order Details Information
                    </div>
                }
                open={isOpenNewDetails}
                onOk={handleOkNewModal}
                onCancel={handleCancelNewModal}
                footer={null}
                width={800}
                className='custom-service-modal'>


                <div className="pb-4">
                    <div className='px-4 pt-8'>
                        <div className="space-y-6">
                            {/* Customer Information */}
                            <Card
                                title={
                                    <div className="flex items-center gap-2">
                                        <UserOutlined />
                                        Customer Information
                                    </div>
                                }
                            >
                                <div className="flex items-center gap-4">
                                    <Avatar
                                        size={48}
                                        src={singleNewOrderData?.user?.photo}
                                        alt='photo'
                                    >
                                    </Avatar>
                                    <div>
                                        <p className="font-medium">{singleNewOrderData?.user?.name}</p>
                                        <p className="text-sm text-gray-500">Customer ID : {singleNewOrderData?.user?.id}</p>
                                    </div>
                                </div>
                            </Card>


                            {/* Order Header */}
                            <Card
                                title={
                                    <div className="flex items-center gap-2">
                                        <DollarOutlined />
                                        Order Summary
                                    </div>
                                }
                                extra={
                                    <div className='bg-green-100 px-2 py-1 rounded-md text-green-600 font-semibold uppercase'>

                                        {singleNewOrderData?.status}
                                    </div>
                                }
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Order ID : {singleNewOrderData?.id}</span>

                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Order Number : {singleNewOrderData?.order_number}</span>

                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-500">
                                                Created: {singleNewOrderData?.created_at
                                                    ? moment(singleNewOrderData.created_at).format('ll')
                                                    : ''}
                                            </span>

                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Tax : </span>
                                            <span className="font-medium">$ {singleNewOrderData?.tax}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Delivery : </span>
                                            <span className="font-medium">$ {singleNewOrderData?.delivery_charges}</span>
                                        </div>

                                    </div>
                                </div>
                            </Card>


                            {/* Order Items */}
                            <Card
                                title={
                                    <div className="flex items-center gap-2">
                                        <ShoppingOutlined />
                                        Total Order ({singleNewOrderData?.order_items?.length})
                                    </div>
                                }>




                                <div className="space-y-4 h-[130px] overflow-y-auto"
                                    style={{
                                        scrollbarWidth: "thin",
                                        msOverflowStyle: "auto",
                                    }}>
                                    {singleNewOrderData?.order_items?.map((item) => (

                                        <div key={item.id}>
                                            <div className="flex items-start gap-4">
                                                <div className=" rounded-lg flex items-center  justify-center">
                                                    <img src={item.images} alt=""
                                                        className='w-[50px] h-[50px]  rounded-full'
                                                    />
                                                </div>
                                                <div className="flex-1 space-y-1">
                                                    <h4 className="font-medium leading-tight">{item.product_name}</h4>
                                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                                        <span>Product ID: {item.product_id}</span>
                                                        <span>Qty: {item.quantity}</span>
                                                        <span>Unit Price: ${item.unit_price.toFixed(2)}</span>
                                                    </div>
                                                </div>
                                                <div className="text-right mr-3">
                                                    <p className="font-medium">${item.total_price.toFixed(2)}</p>
                                                </div>
                                            </div>

                                        </div>
                                    ))}

                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </Modal>



            {/* PENDING ORDER DETAILS */}
            <Modal
                centered
                title={
                    <div className="text-center bg-primary text-[#ffffff] py-4 font-degular text-[18px]  font-semibold rounded-t-lg">
                        Pending Details Information
                    </div>
                }
                open={isOpenPendingDetails}
                onOk={handleOkPendingModal}
                onCancel={handleCancelPendingModal}
                footer={null}
                width={800}
                className='custom-service-modal'>


                <div className="pb-4">
                    <div className='px-4 pt-8'>
                        <div className="space-y-6">
                            {/* Customer Information */}
                            <Card
                                title={
                                    <div className="flex items-center gap-2">
                                        <UserOutlined />
                                        Customer Information
                                    </div>
                                }
                            >
                                <div className="flex items-center gap-4">
                                    <Avatar
                                        size={48}
                                        src={singlePendingOrderData?.user?.photo}
                                        alt='photo'
                                    >
                                    </Avatar>
                                    <div>
                                        <p className="font-medium">{singlePendingOrderData?.user?.name}</p>
                                        <p className="text-sm text-gray-500">Customer ID : {singlePendingOrderData?.user?.id}</p>
                                    </div>
                                </div>
                            </Card>


                            {/* Order Header */}
                            <Card
                                title={
                                    <div className="flex items-center gap-2">
                                        <DollarOutlined />
                                        Order Summary
                                    </div>
                                }
                                extra={
                                    <div className='bg-green-100 px-2 py-1 rounded-md text-green-600 font-semibold uppercase'>

                                        {singlePendingOrderData?.status}
                                    </div>
                                }
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Order ID : {singlePendingOrderData?.id}</span>

                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Order Number : {singlePendingOrderData?.order_number}</span>

                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-500">
                                                Created: {singlePendingOrderData?.created_at
                                                    ? moment(singlePendingOrderData.created_at).format('ll')
                                                    : ''}
                                            </span>

                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Tax : </span>
                                            <span className="font-medium">$ {singlePendingOrderData?.tax}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Delivery : </span>
                                            <span className="font-medium">$ {singlePendingOrderData?.delivery_charges}</span>
                                        </div>

                                    </div>
                                </div>
                            </Card>


                            {/* Order Items */}
                            <Card
                                title={
                                    <div className="flex items-center gap-2">
                                        <ShoppingOutlined />
                                        Total Order ({singlePendingOrderData?.order_items?.length})
                                    </div>
                                }>




                                <div className="space-y-4 h-[130px] overflow-y-auto"
                                    style={{
                                        scrollbarWidth: "thin",
                                        msOverflowStyle: "auto",
                                    }}>
                                    {singlePendingOrderData?.order_items?.map((item) => (

                                        <div key={item.id}>
                                            <div className="flex items-start gap-4">
                                                <div className=" rounded-lg flex items-center  justify-center">
                                                    <img src={item.images} alt=""
                                                        className='w-[50px] h-[50px]  rounded-full'
                                                    />
                                                </div>
                                                <div className="flex-1 space-y-1">
                                                    <h4 className="font-medium leading-tight">{item.product_name}</h4>
                                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                                        <span>Product ID: {item.product_id}</span>
                                                        <span>Qty: {item.quantity}</span>
                                                        <span>Unit Price: ${item.unit_price.toFixed(2)}</span>
                                                    </div>
                                                </div>
                                                <div className="text-right mr-3">
                                                    <p className="font-medium">${item.total_price.toFixed(2)}</p>
                                                </div>
                                            </div>

                                        </div>
                                    ))}

                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </Modal>



            {/* COMPLETE ORDER DETAILS */}
            <Modal
                centered
                title={
                    <div className="text-center bg-primary text-[#ffffff] py-4 font-degular text-[18px]  font-semibold rounded-t-lg">
                        Complete Details Information
                    </div>
                }
                open={isOpenCompleteDetails}
                onOk={handleOkCompleteModal}
                onCancel={handleCancelCompleteModal}
                footer={null}
                width={800}
                className='custom-service-modal'>


                <div className="pb-4">
                    <div className='px-4 pt-8'>
                        <div className="space-y-6">
                            {/* Customer Information */}
                            <Card
                                title={
                                    <div className="flex items-center gap-2">
                                        <UserOutlined />
                                        Customer Information
                                    </div>
                                }
                            >
                                <div className="flex items-center gap-4">
                                    <Avatar
                                        size={48}
                                        src={singleCompleteOrderData?.user?.photo}
                                        alt='photo'
                                    >
                                    </Avatar>
                                    <div>
                                        <p className="font-medium">{singleCompleteOrderData?.user?.name}</p>
                                        <p className="text-sm text-gray-500">Customer ID : {singleCompleteOrderData?.user?.id}</p>
                                    </div>
                                </div>
                            </Card>


                            {/* Order Header */}
                            <Card
                                title={
                                    <div className="flex items-center gap-2">
                                        <DollarOutlined />
                                        Order Summary
                                    </div>
                                }
                                extra={
                                    <div className='bg-green-100 px-2 py-1 rounded-md text-green-600 font-semibold uppercase'>

                                        {singleCompleteOrderData?.status}
                                    </div>
                                }
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Order ID : {singleCompleteOrderData?.id}</span>

                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Order Number : {singleCompleteOrderData?.order_number}</span>

                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-500">
                                                Created: {singleCompleteOrderData?.created_at
                                                    ? moment(singleCompleteOrderData.created_at).format('ll')
                                                    : ''}
                                            </span>

                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Tax : </span>
                                            <span className="font-medium">$ {singleCompleteOrderData?.tax}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Delivery : </span>
                                            <span className="font-medium">$ {singleCompleteOrderData?.delivery_charges}</span>
                                        </div>

                                    </div>
                                </div>
                            </Card>


                            {/* Order Items */}
                            <Card
                                title={
                                    <div className="flex items-center gap-2">
                                        <ShoppingOutlined />
                                        Total Order ({singleCompleteOrderData?.order_items?.length})
                                    </div>
                                }>




                                <div className="space-y-4 h-[130px] overflow-y-auto"
                                    style={{
                                        scrollbarWidth: "thin",
                                        msOverflowStyle: "auto",
                                    }}>
                                    {singleCompleteOrderData?.order_items?.map((item) => (

                                        <div key={item.id}>
                                            <div className="flex items-start gap-4">
                                                <div className=" rounded-lg flex items-center  justify-center">
                                                    <img src={item.images} alt=""
                                                        className='w-[50px] h-[50px]  rounded-full'
                                                    />
                                                </div>
                                                <div className="flex-1 space-y-1">
                                                    <h4 className="font-medium leading-tight">{item.product_name}</h4>
                                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                                        <span>Product ID: {item.product_id}</span>
                                                        <span>Qty: {item.quantity}</span>
                                                        <span>Unit Price: ${item.unit_price.toFixed(2)}</span>
                                                    </div>
                                                </div>
                                                <div className="text-right mr-3">
                                                    <p className="font-medium">${item.total_price.toFixed(2)}</p>
                                                </div>
                                            </div>

                                        </div>
                                    ))}

                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </Modal>

        </div>
    );
};

export default OrderManagement;