import React, { useState } from "react";
import { Table, Button, Space, Image, Popconfirm, message, Modal } from "antd";
import profileImg from "../../assets/images/userPhoto.jpg"
import successGif from "../../assets/images/successGIF.gif";
import { Link } from "react-router-dom";


const NewOrderManagementTable = () => {

    const [isEditOpenModal, setIsEditOpenModal] = useState(false);
    // delete modal
    const confirm = (e) => {
        console.log(e);
        message.success("Click on Yes");
    };

    const showEditModal = () => {
        setIsEditOpenModal(true);
    };
    const cancel = (e) => {
        console.log(e);
        message.error("Click on No");
    };
    // delete modal end

    const columns = [
        {
            title: "Customer Name",
            dataIndex: "name",
            key: "Name",
            render: (name) => (
                <Space>
                    <img className='!rounded-full h-14 w-14 ' src={name?.image} alt="image" />
                    <span className="ml-3 font-semibold text-black hover:null">{name.title}</span>
                </Space>
            ),
        },
        {
            title: "Product",
            dataIndex: "product",
            key: "product",
            align: "center",
        },
        {
            title: "Quantity",
            dataIndex: "quantity",
            key: "quantity",
            align: "center",
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
            align: "center",
        },
        {
            title: "Action",
            key: "action",
            align: "center",
            render: (_, record) => (
                <Space size="middle">
                    {/* view icon */}
                    <div onClick={showModal}>
                        <svg
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

                    <div onClick={showEditModal}>
                        <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="37" height="37" rx="5" fill="#E4FFEB" />
                            <path d="M15.6933 27L8 19.4158L9.92331 17.5198L15.6933 23.2079L28.0767 11L30 12.8961L15.6933 27Z" fill="#23AA49" />
                        </svg>



                    </div>
                    <div>
                        <Popconfirm
                            title="Are you sure to delete this product?"
                            onConfirm={confirm}
                            onCancel={cancel}
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
            ),
        },
    ];

    const data = [
        {
            key: "1",

            name: {
                image: profileImg,
                title: "Benjamin Wilkison",
            },
            product: "Fresh apple",
            quantity: "50 kg",
            price: "$200",
        },
        {
            key: "2",

            name: {
                image: profileImg,
                title: "Benjamin Wilkison",
            },
            product: "Fresh apple",
            quantity: "50 kg",
            price: "$200",
        },
        {
            key: "3",
            name: {
                image: profileImg,
                title: "Benjamin Wilkison",
            },
            product: "Fresh apple",
            quantity: "50 kg",
            price: "$200",
        },
        {
            key: "4",
            name: {
                image: profileImg,
                title: "Benjamin Wilkison",
            },
            product: "Fresh apple",
            quantity: "50 kg",
            price: "$200",
        },
        {
            key: "5",
            name: {
                image: profileImg,
                title: "Training Video Part 5",
            },
            product: "Fresh apple",
            quantity: "50 kg",
            price: "$200",
        },
        {
            key: "6",
            name: {
                image: profileImg,
                title: "Training Video Part 6",
            },
            product: "Fresh apple",
            quantity: "50 kg",
            price: "$200",
        },
        {
            key: "7",
            name: {
                image: profileImg,
                title: "Training Video Part 7",
            },
            product: "Fresh apple",
            quantity: "50 kg",
            price: "$200",
        },
    ];
    // view modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setIsEditOpenModal(false)
    };
    // view modal end
    return (
        <>
            <Table
                columns={columns}
                rowClassName={() => "table-row-gap"}
                className="custom-ant-table"
                dataSource={data}
                pagination={true}


            />


            {/* ------------ details view modal ---------------------- */}
            <Modal
                title={null}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
            >
                <div>
                    <div className="bg-lowGray px-6 py-3 rounded-md mt-8 space-y-3">
                        <p className="w-full text-center mb-4 font-PoppinsMedium text-lg">Customer Details</p>
                        <div className="flex justify-between items-center">
                            <div className="space-y-1   ">
                                <p className="font-PoppinsSemiBold text-sm text-black">Name:</p>
                                <p className="font-PoppinsSemiBold text-sm text-black">Email:</p>
                                <p className="font-PoppinsSemiBold text-sm text-black">Phone</p>
                                <p className="font-PoppinsSemiBold text-sm text-black">Address:</p>
                            </div>
                            <div className="space-y-1">
                                <p className="font-PoppinsRegular text-sm text-black">Md. Rich </p>
                                <p className="font-PoppinsRegular text-sm text-black">example@gmail.com</p>
                                <p className="font-PoppinsRegular text-sm text-black">+93256854756</p>
                                <p className="font-PoppinsRegular text-sm text-black">Road no. 10, Block-D, Rampura, Dhaka.</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-lowGray px-6 py-3 rounded-md mt-4 space-y-3">
                        <p className="w-full text-center mb-4 font-PoppinsMedium text-lg ">Product details</p>
                        <div className="flex justify-between items-center">
                            <div className="space-y-1   ">
                                <p className="font-PoppinsSemiBold text-sm text-black">Name:</p>
                                <p className="font-PoppinsSemiBold text-sm text-black">Quantity:</p>
                                <p className="font-PoppinsSemiBold text-sm text-black">Price</p>
                                <p className="font-PoppinsSemiBold text-sm text-black">Shipping cost:</p>
                                <p className="font-PoppinsSemiBold text-sm text-black">Tax:</p>
                                <p className="font-PoppinsSemiBold text-sm text-black">Tax:</p>
                            </div>
                            <div className="space-y-1">
                                <p className="font-PoppinsRegular text-sm text-black">Fresh Apple </p>
                                <p className="font-PoppinsRegular text-sm text-black">50kg</p>
                                <p className="font-PoppinsRegular text-sm text-black">$200</p>
                                <p className="font-PoppinsRegular text-sm text-black">$0.05</p>
                            </div>
                        </div>
                        <hr />
                        <div className="flex justify-between mt-0 items-center">
                            <p className="font-PoppinsSemiBold text-sm text-black">Total: </p>
                            <p className="font-PoppinsRegular text-sm text-black">$235.05 </p>
                        </div>
                    </div>
                </div>
            </Modal>

            {/* ================ shoppers successful modal =============== */}
            <Modal
                title={null}
                open={isEditOpenModal}
                onOk={handleCancel}
                onCancel={handleCancel}
                centered
                footer={null}
            >

                <div className="bg-white">
                    <img className="w-52 h-52 mx-auto " src={successGif} alt="Success gif" />
                    <div className="w-full text-center">
                        <h6 className="font-PoppinsMedium text-xl text-primary">Order accepted</h6>
                   
                    </div>
                </div>

            </Modal>


        </>
    );
};

export default NewOrderManagementTable;



