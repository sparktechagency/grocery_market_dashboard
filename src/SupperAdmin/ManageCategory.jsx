import { Modal, Popconfirm, Select, Space } from 'antd'
import React, { useState } from 'react'
import { IconSearch } from '../assets/icon'
import { Option } from 'lucide-react'

const ManageCategory = () => {
    const [isDetailsModalOpen, setIsModalDetailsOpen] = useState(false);

    const manageData = [
        {
            id: 1,
            title: "Bakery"
        },
        {
            id: 2,
            title: "Fruits & vegetables"
        },
        {
            id: 3,
            title: "Drinks"
        },
        {
            id: 4,
            title: "Beverage"
        },
        {
            id: 5,
            title: "Households"
        },
        {
            id: 6,
            title: "Meats"
        },
        {
            id: 7,
            title: "Cleaning product"
        },
        {
            id: 8,
            title: "Cleaning product"
        },
        {
            id: 9,
            title: "Cleaning product"
        },
        {
            id: 10,
            title: "Cleaning product"
        },
    ]
    return (
        <div>

            <div className="flex justify-between my-8  items-center">

                <div className="flex items-center">
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
                <div>

                </div>
            </div>
            <div className='grid grid-cols-5 gap-3'>

                {
                    manageData.map((item, index) => (
                        <div className='flex justify-between items-center rounded-lg px-4 py-2 bg-white shadow-md'>

                            <p className='font-semibold text-base text-blacks'>{index + 1}. {" "}{item.title}</p>
                            <Space size="middle">
                                {/* view icon */}
                                <div onClick={() => setIsModalDetailsOpen(true)}>
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
                        </div>
                    ))
                }
            </div>

            <Modal
                open={isDetailsModalOpen}
                onCancel={() => setIsModalDetailsOpen(false)}
                footer={null}
                closable={true}
                className="rounded-lg "
            >
                {/* Modal Header */}
                <div className="flex justify-between items-center bg-primary text-white px-6 py-4 rounded-t-lg mt-6">
                    <h2 className="text-lg font-semibold mx-auto">Edit</h2>

                </div>
                <div class="my-6">
                    <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                    <input placeholder='Add a Category' type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
                </div>

                <button type="button" className="text-white w-full bg-primary hover:bg-primary focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none ">Add</button>
            </Modal>

        </div>
    )
}

export default ManageCategory