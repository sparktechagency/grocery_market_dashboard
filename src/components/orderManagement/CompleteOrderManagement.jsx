import React, { useState } from "react";
import { Table, Button, Space, Image, Popconfirm, message, Modal } from "antd";
import profileImg from "../../assets/images/userPhoto.jpg"


const CompleteOrderManagement = () => {
    // delete modal
    const confirm = (e) => {
        console.log(e);
        message.success("Click on Yes");
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
                    <Image style={{ borderRadius: "20px" }} width={40} src={name.image} alt="user Image" />
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

                    <div onClick={setIsModalOpen}>
                        <p className="px-4 py-2 bg-lowGreen text-primary rounded-lg">Delivered</p>
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
        </>
    );
};

export default CompleteOrderManagement;
