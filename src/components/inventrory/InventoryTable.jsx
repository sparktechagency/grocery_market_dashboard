import React, { useState } from 'react'
import {
    Table,
    Space,
    Image,
    Popconfirm,
    message,
} from "antd";
import img1 from "../../assets/images/productOne.png"
import img2 from "../../assets/images/productTwo.png"
import img3 from "../../assets/images/productThree.png"
import img4 from "../../assets/images/productFour.png"
import img5 from "../../assets/images/productTwo.png"
import img6 from "../../assets/images/productThree.png"
import img7 from "../../assets/images/productFour.png"
import ViewProductModal from './ViewProductModal';
import EditProductModal from './EditProductModal';

const InventoryTable = () => {
    // show view modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditOpenModal, setIsEditOpenModal] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };
    // edit modal

    const showEditModal = () => {
        setIsEditOpenModal(true);
    };

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
            title: "Product",
            dataIndex: "product",
            key: "product",
            render: (product) => (
                <Space className='gap-2'>
                    <img className='!rounded-full h-14 w-14 ' src={product?.image} alt="image" />
                    <span >{product.title}</span>
                </Space>
            ),
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
            align: "center",
            className: "custom-price-cell"
        },
        {
            title: "Availability",
            dataIndex: "availability",
            key: "availability",
            align: "center",
            className: "custom-availability-inStock-cell"

        },
        {
            title: "Available",
            dataIndex: "available",
            key: "available",
            align: "center",
            className: "custom-available-cell",
        },
        {
            title: "Action",
            key: "action",
            align: "center",
            render: (record) => (
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
                        <svg
                            width="37"
                            height="37"
                            viewBox="0 0 37 37"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect width="37" height="37" rx="5" fill="#E4FFEB" />
                            <path
                                d="M21 13.1716L24 16.1716M19 27.1716H27M11 23.1716L10 27.1716L14 26.1716L25.586 14.5856C25.9609 14.2105 26.1716 13.7019 26.1716 13.1716C26.1716 12.6412 25.9609 12.1326 25.586 11.7576L25.414 11.5856C25.0389 11.2106 24.5303 11 24 11C23.4697 11 22.9611 11.2106 22.586 11.5856L11 23.1716Z"
                                stroke="#28A745"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
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
            product: {
                image: img1,
                title: "Fresh apple",
            },
            price: "$20.00",
            availability: "Out of stock",
            available: "2 kg",
        },
        {
            key: "2",
            product: {
                image: img2,
                title: "Fresh apple",
            },
            price: "$10.00",
            availability: "Out of stock",
            available: "2 kg",
        },
        {
            key: "3",
            product: {
                image: img3,
                title: "Fresh apple",
            },
            price: "$200.00",
            availability: "In-stock",
            available: "2 kg",
        },
        {
            key: "4",
            product: {
                image: img4,
                title: "Fresh apple",
            },
            price: "$150.00",
            availability: "In-stock",
            available: "2 kg",
        },
        {
            key: "5",
            product: {
                image: img5,
                title: "Fresh apple",
            },
            price: "$320.00",
            availability: "Out of stock",
            available: "2 kg",
        },
        {
            key: "6",
            product: {
                image: img6,
                title: "Fresh apple",
            },
            price: "$620.00",
            availability: "Out of stock",
            available: "2 kg",
        },
        {
            key: "7",
            product: {
                image: img7,
                title: "Fresh apple",
            },
            price: "$652.00",
            availability: "In-stock",
            available: "2 kg",
        },
    ];

    return (
        <>
            <Table
                columns={columns}
                rowClassName={() => "table-row-gap"}
                className="custom-ant-table"
                dataSource={data}
                pagination={true}
            />

            {/*  ============== product details ============= modal  */}
            <ViewProductModal isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen} />

            {/* =============== new product add modal =================  */}
            <EditProductModal isModalOpen={isEditOpenModal}
                setIsModalOpen={setIsEditOpenModal} />
        </>
    )
}

export default InventoryTable