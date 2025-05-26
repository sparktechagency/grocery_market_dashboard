import React, { useState } from 'react';
import { Collapse, Modal, Popconfirm, Space } from 'antd';


const FAQ = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const handleCancel = () => {
        setIsModalOpen(false);
        setIsAddModalOpen(false)
    };
    const text = `
      A dog is a type of domesticated animal.
      Known for its loyalty and faithfulness,
      it can be found as a welcome guest in many households across the world.
    `;

    const genExtra = () => (
        <Space size="middle">
            {/* view icon */}
            <div onClick={(e) => {
                e.stopPropagation()
                setIsModalOpen(true)
            }}>
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


            <div onClick={(e) => e.stopPropagation()}>
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
    );
    const items = [
        {
            key: '1',
            label: 'Lorem ipsum dolor sit ?',
            children: <p>{text}</p>,
            extra: genExtra(),
        },
        {
            key: '2',
            label: 'This is panel header 2',
            children: <p>{text}</p>,
            extra: genExtra(),
        },
        {
            key: '3',
            label: 'This is panel header 3',
            children: <p>{text}</p>,
            extra: genExtra(),
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle save logic
        alert('Saved!');
    };

    return (
        <div className='mt-5'>
            <Collapse accordion items={items} />
            <button onClick={() => setIsAddModalOpen(true)} className='px-20 py-3 rounded-lg bg-primary hover:ring-primary text-white mt-8'>Add More</button>


            {/* ================ Edit modal =============== */}
            <Modal
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
                closable={true}
                centered
                className="rounded-lg"
            >
                <p className='font-PoppinsSemiBold text-2xl text-black  text-center'>Edit this question</p>

                <div className="text-center space-y-4 mt-6">
                    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md w-full max-w-3xl space-y-6 shadow">
                        <div>
                            <label className="block font-medium mb-2 text-start">Question</label>
                            <input
                                type="text"
                                placeholder='Add your question here'
                                // onChange={(e) => setShopName(e.target.value)}
                                className="w-full border border-gray-300 p-2 rounded-md outline-none"
                            />
                        </div>
                        <div>
                            <label className="block font-medium mb-2 text-start ">Answer</label>
                            <textarea
                                type="text"
                                placeholder='Add your ans here'
                                // onChange={(e) => setShopName(e.target.value)}
                                className="w-full h-48 border border-gray-300 p-2 rounded-md outline-none flex items-start justify-start"
                            ></textarea>
                        </div>
                    </form>

                    <button className='px-12 py-2 rounded-lg bg-primary hover:ring-primary text-white'>Update</button>
                </div>
            </Modal>

            {/* ================ Add modal =============== */}
            <Modal
                open={isAddModalOpen}
                onCancel={handleCancel}
                footer={null}
                closable={true}
                centered
                className="rounded-lg"
            >
                <p className='font-PoppinsSemiBold text-2xl text-black  text-center'>Add new question</p>

                <div className="text-center space-y-4 mt-6">
                    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md w-full max-w-3xl space-y-6 shadow">
                        <div>
                            <label className="block font-medium mb-2 text-start">Question</label>
                            <input
                                type="text"
                                placeholder='Add your question here'
                                // onChange={(e) => setShopName(e.target.value)}
                                className="w-full border border-gray-300 p-2 rounded-md outline-none"
                            />
                        </div>
                        <div>
                            <label className="block font-medium mb-2 text-start ">Answer</label>
                            <textarea
                                type="text"
                                placeholder='Add your ans here'
                                // onChange={(e) => setShopName(e.target.value)}
                                className="w-full h-48 border border-gray-300 p-2 rounded-md outline-none flex items-start justify-start"
                            ></textarea>
                        </div>
                    </form>

                    <button className='px-12 py-2 rounded-lg bg-primary hover:ring-primary text-white'>Add</button>
                </div>
            </Modal>


        </div>
    )
}

export default FAQ