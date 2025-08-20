import { Button, Modal, Popconfirm, Select, Space, Switch } from 'antd';
import React, { useState } from 'react'
import { CheckCircleFilled } from '@ant-design/icons';
import { Option } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const SubscriptionsAdmin = () => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        Month: "",
        Year: "",
    });

    const handleChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const onChange = checked => {
        console.log(`switch to ${checked}`);
    };

    const pricingPlans = [
        {
            title: "Normal User",
            price: "$0.00",
            buttonText: "Current plan",
            active: false,
            features: [
                'Access to basic store management features',
                'Limited product listings',
                'Standard transaction fees',
                'Basic analytics and reports',
                'Standard customer support',
                'Limited promotional tools',
            ]
        },
        {
            title: "Plus User",
            price: "$10.00",
            buttonText: "Purchase",
            active: true,
            features: [
                'Unlimited product listings',
                'Lower transaction fees',
                'Advanced analytics and sales reports',
                'Priority customer support',
                'Custom store branding',
                'Featured store listing',
                'Exclusive promotional tools',
                'Automated inventory management',
                'Bulk product import/export',
                'Immediate cash-out with 1% fee',
            ]
        }
    ];

    return (
        <>


            <div className='mt-4 flex justify-between items-center'>
                <div></div>
                <button onClick={() => navigate("/supper_admin/admin_subscriptions/subscribe_shopper")} type="button" className="flex gap-3 text-white mr-6  bg-primary hover:bg-primary focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none "><svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 13.5V15.5H0V13.5C0 13.5 0 9.50004 7 9.50004C14 9.50004 14 13.5 14 13.5ZM10.5 4.00004C10.5 3.3078 10.2947 2.63111 9.91014 2.05554C9.52556 1.47997 8.97893 1.03137 8.33939 0.766459C7.69985 0.501552 6.99612 0.43224 6.31718 0.567288C5.63825 0.702337 5.01461 1.03568 4.52513 1.52516C4.03564 2.01465 3.7023 2.63829 3.56725 3.31722C3.4322 3.99615 3.50152 4.69989 3.76642 5.33943C4.03133 5.97897 4.47993 6.5256 5.0555 6.91018C5.63108 7.29477 6.30777 7.50004 7 7.50004C7.92826 7.50004 8.8185 7.13129 9.47487 6.47491C10.1313 5.81853 10.5 4.92829 10.5 4.00004ZM13.94 9.50004C14.5547 9.97578 15.0578 10.5805 15.4137 11.2715C15.7696 11.9626 15.9697 12.7233 16 13.5V15.5H20V13.5C20 13.5 20 9.87004 13.94 9.50004ZM13 0.500037C12.3118 0.496836 11.6388 0.702568 11.07 1.09004C11.6774 1.93877 12.0041 2.95632 12.0041 4.00004C12.0041 5.04375 11.6774 6.0613 11.07 6.91004C11.6388 7.29751 12.3118 7.50324 13 7.50004C13.9283 7.50004 14.8185 7.13129 15.4749 6.47491C16.1313 5.81853 16.5 4.92829 16.5 4.00004C16.5 3.07178 16.1313 2.18154 15.4749 1.52516C14.8185 0.868786 13.9283 0.500037 13 0.500037Z" fill="white" />
                </svg>
                    See Subscribers</button>

            </div>

            <div className="flex flex-col lg:flex-row justify-center gap-6 bg-gray-100 py-10">
                {pricingPlans.map((plan, index) => (
                    <div
                        key={index}
                        className={`flex flex-col justify-between rounded-lg p-6 w-full max-w-sm border ${plan.active
                            ? 'bg-green-600 text-white border-green-600'
                            : 'bg-white text-black border-gray-200'
                            }`}
                    >
                        <div>
                            <h2 className={`text-lg font-semibold mb-2 ${plan.active ? 'text-white' : 'text-gray-800'}`}>
                                {plan.title}
                            </h2>
                            <p className="text-3xl font-bold">
                                {plan.price}
                                <span className="text-base font-normal">/month</span>
                            </p>

                            <div className={`mt-4 mb-2 text-sm ${plan.active ? 'text-white' : 'text-gray-700'}`}>
                                Features are included
                            </div>
                            <hr className={`${plan.active ? 'border-white' : 'border-gray-300'} mb-4`} />

                            <ul className={`space-y-2 text-sm ${plan.active ? 'text-white' : 'text-gray-700'}`}>
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <CheckCircleFilled className="text-green-400 mt-1" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Button onClick={() => setIsEditModalOpen(true)} className='bg-white border rounded-lg flex items-center gap-2'>
                            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.208 4.04104C18.598 3.65104 18.598 3.00104 18.208 2.63104L15.868 0.291035C15.498 -0.0989648 14.848 -0.0989648 14.458 0.291035L12.618 2.12104L16.368 5.87104M0.498047 14.251V18.001H4.24805L15.308 6.93104L11.558 3.18104L0.498047 14.251Z" fill="black" />
                            </svg>
                            Edit
                        </Button>
                    </div>
                ))}

            </div>

            {/* -------------- edit normal plan -------------------------- */}
            <Modal
                open={isEditModalOpen}
                onCancel={() => setIsEditModalOpen(false)}
                footer={null}
                closable={true}
                width={700}
                className="rounded-lg "
            >
                {/* Modal Header */}
                <div className="flex justify-between items-center bg-primary text-white px-6 py-4 rounded-t-lg mt-6">
                    <h2 className="text-lg font-semibold mx-auto">Edit normal plan</h2>
                </div>
                <div class="my-6">
                    <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                    <input placeholder='Add a Category' type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
                </div>
                <div className='flex justify-between w-full gap-3 mb-3 '>
                    <div className='flex-1'>
                        <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                        <input placeholder='00 . 00 $' type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
                    </div>
                    <div className='flex-1'>
                        <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Per</label>
                        <Select
                            value={"Month"}
                            onChange={(value) => handleChange("per", value)}
                            className="w-full h-10"
                        >
                            <Option>Month</Option>
                            <Option>Year</Option>
                        </Select>
                    </div>
                </div>


                {/* ========== Features data =================== */}

                <div>
                    <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Features</label>

                    {
                        pricingPlans.map((item, index) => (
                            <div className='space-y-2 my-4' key={index}>
                                {
                                    item.features.map((feature) => (
                                        <div className='flex justify-between items-center px-3 py-2 bg-lowGray rounded-lg shadow-md'>
                                            <p>{feature}</p>
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
                                                        <rect width="37" height="37" rx="5" fill="#E4FFEB" />
                                                        <path
                                                            d="M21 13.1716L24 16.1716M19 27.1716H27M11 23.1716L10 27.1716L14 26.1716L25.586 14.5856C25.9609 14.2105 26.1716 13.7019 26.1716 13.1716C26.1716 12.6412 25.9609 12.1326 25.586 11.7576L25.414 11.5856C25.0389 11.2106 24.5303 11 24 11C23.4697 11 22.9611 11.2106 22.586 11.5856L11 23.1716Z"
                                                            stroke="#28A745"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round" />
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
                                                                fill="#FF0000" />
                                                        </svg>
                                                    </Popconfirm>
                                                </div>
                                            </Space>
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }

                    <Button onClick={() => setIsModalOpen(true)} type="button" className="text-white w-[30%] h-10 bg-primary hover:bg-primary focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none ">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 8H0V6H6V0H8V6H14V8H8V14H6V8Z" fill="white" />
                        </svg>

                        Add more
                    </Button>
                </div>

                <div className='w-full border flex justify-between items-center px-3 h-10 rounded-lg my-4'>
                    <p>Highlight</p>
                    <Switch defaultChecked onChange={onChange} />
                </div>

                <button onClick={() => setIsEditModalOpen(false)} type="button" className="text-white w-full bg-primary hover:bg-primary focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none ">Save & Change</button>
            </Modal>



            {/* =============================== Feature Edit Modal ============================ */}
            <Modal
                open={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
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
                    <input value={"Access to basic store management features"} type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
                </div>

                <button type="button" className="text-white w-full bg-primary hover:bg-primary focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none ">Add</button>
            </Modal>
        </>
    )
}

export default SubscriptionsAdmin