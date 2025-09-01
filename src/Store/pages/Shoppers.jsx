import { Modal, Pagination, } from "antd";
import { IconLocation, IconSearch } from "../../assets/icon";

import { useEffect, useState } from "react";
import successGif from "../../assets/images/successGIF.gif";
import { useGetShopperApiQuery } from "../../redux/dashboardFeatures/shoppers/dashboardShoppers";



const Shoppers = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [searchText, setSearchText] = useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(10);





    const { data: getShopper, refetch, isLoading } = useGetShopperApiQuery({ search: searchText, per_page: perPage, page: currentPage })

    const shopperData = getShopper?.data
    // const totalShopper = getShopper?.data.total_active_shoppers
    const totalPagination = getShopper?.total
    // console.log(shopperData)








    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };


    const handleChange = (e) => {
        setSearchText(e.target.value);
    }



    useEffect(() => {
        refetch();
    }, [searchText, currentPage, perPage, refetch]);



    return (
        <div className="p-4">
            <div className="flex gap-60 my-8 items-center">
                <div className="flex justify-center items-center px-4  h-16  gap-2">
                    <p className="w-3 h-3 rounded-full bg-primary"></p>
                    <p className="font-bold text-lg text-black">{getShopper?.total_active_shoppers} available shoppers</p>
                </div>

                <div className="flex items-center">
                    <input
                        type="search"
                        value={searchText}
                        onChange={handleChange}
                        className="w-[534px] p-4 border rounded-l-full border-[#D9D9D9] focus:outline-none"
                        placeholder="Search shopper name"
                        name=""
                        id=""
                    />
                    <button className="bg-primary p-2.5 -ml-1 border rounded-r-full">
                        {IconSearch}
                    </button>
                </div>
            </div>




            <div className="grid grid-cols-4 gap-3 space-y-2 mt-4">
                {
                    shopperData?.map((item, index) => (
                        <div key={index} className=" bg-white rounded-2xl shadow-sm px-8 py-4 flex items-center gap-4">

                            <div className="relative">
                                <img
                                    src={item.photo}
                                    alt="Theresa Webb"
                                    className="w-16 h-16 rounded-full object-cover"
                                />
                                <span className={`absolute bottom-1 right-1 w-3 h-3 ${item?.status === 'active' ? "bg-green-500" : "bg-red"} border-2 border-white rounded-full`}></span>
                            </div>


                            <div className="flex-1 space-y-1">
                                <h2 className="font-semibold text-black">{item?.name}</h2>
                                {
                                    item?.address && <div className="flex items-center text-gray-500 text-sm mt-0.5">
                                        <span className="mr-1">{IconLocation}</span>
                                        <span>{item?.address}</span>
                                    </div>
                                }

                                {
                                    item?.phone && <p className="text-black mt-0.5">{item?.phone}</p>
                                }


                                <div className="flex justify-between items-center gap-4">
                                    <p className="text-green-600 font-medium mt-2">{item?.total_delivery} total deliveries</p>



                                    {/* <button onClick={() => setIsModalOpen(true)} className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition">
                                        Assign
                                    </button> */}
                                </div>
                            </div>


                        </div>
                    ))
                }
            </div>



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



            {/* ================ shoppers successful modal =============== */}
            {/* <Modal
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

            </Modal> */}

        </div>
    );
};

export default Shoppers;



