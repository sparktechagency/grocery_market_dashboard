import React, { useState } from 'react'
import { IconSearch } from '../assets/icon'
import img1 from "../assets/images/shopper.jpg";
import img2 from "../assets/images/shopper.jpg";
import img3 from "../assets/images/shopper.jpg";
import img4 from "../assets/images/shopper.jpg";
import img5 from "../assets/images/shopper.jpg";
import img6 from "../assets/images/shopper.jpg";
import img7 from "../assets/images/shopper.jpg";
import shopperImage from "../assets/images/shopperImg.jpg";
import { Image, Modal, Popconfirm, Space, Table } from 'antd';


const ShopperAdmin = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const columns = [
        {
            title: "Store Name",
            dataIndex: "store_name",
            key: "store_name",
            render: (store) => (
                <Space className='gap-2'>
                    <img className='!rounded-full h-14 w-14 ' src={store?.image} alt="image" />
                    <span >{store.title}</span>
                </Space>
            ),
        },
        {
            title: "Address",
            dataIndex: "address",
            key: "address",
            align: "center",
            className: "custom-availability-inStock-cell"

        },

        {
            title: "QuantTotal deliveriesity",
            dataIndex: "total_delivery",
            key: "total_delivery",
            align: "center",
            className: "custom-available-cell",
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            align: "center",
            className: "custom-available-cell",
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
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
                    <div onClick={() => setIsModalOpen(true)}>
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
                    <div>
                        <Popconfirm
                            title="Are you sure to delete this product?"
                            onConfirm={confirm}
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
            store_name: {
                image: img1,
                title: "Starbucks",
            },
            address: "4517 Washington Ave. Manchester, Kentucky 39495",
            total_delivery: "5KG",
            status: <div className='flex justify-center items-center  gap-2 px-2  pt-2 rounded-lg bg-lowGreen'>
                <div className='w-3 h-3 rounded-full bg-primary mb-3'></div>
                <p className='text-primary font-medium text-base'>online</p>
            </div>,
            price: "$250",
        },
        {
            key: "2",
            store_name: {
                image: img2,
                title: "Starbucks",
            },
            address: "6391 Elgin St. Celina, Delaware 10299",
            total_delivery: "5KG",
            status: <div className='flex justify-center items-center  gap-2 px-2  pt-2 rounded-lg bg-lowGreen'>
                <div className='w-3 h-3 rounded-full bg-primary mb-3'></div>
                <p className='text-primary font-medium text-base'>online</p>
            </div>,
            price: "$250",
        },
        {
            key: "3",
            store_name: {
                image: img3,
                title: "Starbucks",
            },
            address: "6391 Elgin St. Celina, Delaware 10299",

            total_delivery: "5KG",
            status: <div className='flex justify-center items-center  gap-2 px-2  pt-2 rounded-lg bg-lowGray'>
                <div className='w-3 h-3 rounded-full bg-lowBlack mb-3'></div>
                <p className='text-lowBlack font-medium text-base'>Offline</p>
            </div>,
            price: "$250",
        },
        {
            key: "4",
            store_name: {
                image: img4,
                title: "Starbucks",
            },
            address: "6391 Elgin St. Celina, Delaware 10299",

            total_delivery: "5KG",
            status: <div className='flex justify-center items-center  gap-2 px-2  pt-2 rounded-lg bg-lowGreen'>
                <div className='w-3 h-3 rounded-full bg-primary mb-3'></div>
                <p className='text-primary font-medium text-base'>online</p>
            </div>,
            price: "$250",
        },
        {
            key: "5",
            store_name: {
                image: img5,
                title: "Starbucks",
            },
            address: "4517 Washington Ave. Manchester, Kentucky 39495",

            total_delivery: "5KG",
            status: <div className='flex justify-center items-center  gap-2 px-2  pt-2 rounded-lg bg-lowGreen'>
                <div className='w-3 h-3 rounded-full bg-primary mb-3'></div>
                <p className='text-primary font-medium text-base'>online</p>
            </div>,
            price: "$250",
        },
        {
            key: "6",
            store_name: {
                image: img6,
                title: "Starbucks",
            },
            address: "8502 Preston Rd. Inglewood, Maine 98380",

            total_delivery: "5KG",
            status: <div className='flex justify-center items-center  gap-2 px-2  pt-2 rounded-lg bg-lowGreen'>
                <div className='w-3 h-3 rounded-full bg-primary mb-3'></div>
                <p className='text-primary font-medium text-base'>online</p>
            </div>,
            price: "$250",
        },
        {
            key: "7",
            store_name: {
                image: img7,
                title: "Starbucks",
            },
            address: "4517 Washington Ave. Manchester, Kentucky 39495",

            total_delivery: "5KG",
            status: <div className='flex justify-center items-center  gap-2 px-2  pt-2 rounded-lg bg-lowGreen'>
                <div className='w-3 h-3 rounded-full bg-primary mb-3'></div>
                <p className='text-primary font-medium text-base'>online</p>
            </div>,
            price: "$250",
        },
    ];

    return (
        <div>

            <div className="flex items-center my-6">
                <input
                    type="search"
                    className="w-[534px] p-4 border rounded-l-full border-[#D9D9D9]"
                    placeholder="Search products"
                    name=""
                    id=""
                />
                <button className="bg-primary p-2.5 -ml-1 border rounded-r-full">
                    {IconSearch}
                </button>
            </div>


            <Table
                columns={columns}
                rowClassName={() => "table-row-gap"}
                className="custom-ant-table"
                dataSource={data}
                pagination={true}
            />


            {/* =========== shopper details modal ============== */}

            <Modal
                open={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                footer={null}
                closeIcon={false}
                className="rounded-lg "
            >
                <div>
                    <img className='w-48 h-52 rounded-lg mx-auto' src={shopperImage} alt="Shopper profile image" />
                    <div className='mt-12 px-6'>
                        <div className='flex justify-between items-center'>
                            <p className='font-bold text-base text-black'>Name:</p>
                            <p className='font-bold text-base text-black'>Benjamin Wilkison</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <p className='font-bold text-base text-black'>Email:</p>
                            <p className='font-medium text-base text-black'>example@gmail.com</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <p className='font-bold text-base text-black'>Mobile:</p>
                            <p className='font-medium text-base text-black'>5646984846</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <p className='font-bold text-base text-black'>Address:</p>
                            <p className='font-medium text-base text-black'>Fairbanks North Star</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <p className='font-bold text-base text-black'>Deliveries:</p>
                            <p className='font-medium text-base text-black'>200</p>
                        </div>
                    </div>
                    <button onClick={() => setIsModalOpen(false)} type="button" className="text-white w-full bg-primary hover:bg-primary focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none ">Close</button>
                </div>
            </Modal>

        </div>
    )
}

export default ShopperAdmin