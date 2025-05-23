import { Modal, Select } from "antd";
import { IconLocation, IconSearch } from "../../assets/icon";
import { Option } from "lucide-react";
import cardData from "../../assets/json/shopperCardData.json"
import { useState } from "react";
import successGif from "../../assets/images/successGIF.gif";
import { Link } from "react-router-dom";


const Shoppers = () => {

    // view modal
    const [isModalOpen, setIsModalOpen] = useState(false);


    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };


    return (
        <div className="p-4">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                    <p className="font-bold text-lg text-black">122 available shoppers</p>
                </div>
                <div className="flex items-center">
                    <input
                        type="search"
                        className="w-[534px] p-4 border rounded-l-full border-[#D9D9D9]"
                        placeholder="Search products"
                        name=""
                        id=""
                    />
                    <button className="bg-primary p-3 -ml-1 border rounded-r-full">
                        {IconSearch}
                    </button>
                </div>
                <div>
                    <Select defaultValue='filter' className="w-40" >
                        <Option value="today">Bhola</Option>
                        <Option value="this_week">Dhaka</Option>
                        <Option value="this_month">Narayangonj</Option>
                        <Option value="this_month">Savar</Option>
                    </Select>
                </div>
            </div>


            <div className="grid grid-cols-3 gap-3 space-y-2 mt-4">
                {
                    cardData.map((item, index) => (
                        <div key={index} className="max-w-md mx-auto bg-white rounded-2xl shadow-sm px-8 py-4 flex items-center gap-4">
                            {/* Profile Image + Status Dot */}
                            <div className="relative">
                                <img
                                    src={item.photo}
                                    alt="Theresa Webb"
                                    className="w-20 h-20 rounded-full object-cover"
                                />
                                <span className="absolute bottom-1 right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                            </div>

                            {/* Info Section */}
                            <div className="flex-1 space-y-1">
                                <h2 className="font-semibold text-black">Theresa Webb</h2>
                                <div className="flex items-center text-gray-500 text-sm mt-0.5">
                                    <span className="mr-1">{IconLocation}</span>
                                    <span>Road no. 10, Block C, Dhaka</span>
                                </div>
                                <p className="text-black mt-0.5">(505) 555-0125</p>

                                <div className="flex justify-between items-center gap-4">
                                    <p className="text-green-600 font-medium mt-2">200 total deliveries</p>
                                    {/* Assign Button */}
                                    <button onClick={() => setIsModalOpen(true)} className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition">
                                        Assign
                                    </button>
                                </div>
                            </div>


                        </div>
                    ))
                }
            </div>


            {/* ================ shoppers successful modal =============== */}
            <Modal
                title={null}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
            >

                <div className="bg-white">
                    <img className="w-52 h-52 mx-auto " src={successGif} alt="Success gif" />
                    <div className="w-full text-center">
                        <h6 className="font-PoppinsMedium text-xl text-primary">Shopper assigned successfully</h6>

                        <button onClick={() => setIsModalOpen(false)} className="px-16 py-3 bg-primary text-white font-PoppinsSemiBold mt-6 rounded-lg ">Close</button>

                    </div>
                </div>

            </Modal>

        </div>
    );
};

export default Shoppers;



