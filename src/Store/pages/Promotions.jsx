import React, { useState } from 'react'
import { IconCross } from '../../assets/icon'
import { Button, Modal } from 'antd'
import { InboxOutlined } from '@ant-design/icons';
import Dragger from 'antd/es/upload/Dragger';
import { useAddPromotionApiMutation, useDeletePromotionApiMutation, useGetAllPromotionApiQuery } from '../../redux/dashboardFeatures/promotions/dashboardPromotionApi';
import toast from 'react-hot-toast';

const Promotions = () => {

    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);



    const { data: getPromoton, refetch } = useGetAllPromotionApiQuery()
    const promotionData = getPromoton?.banners

    const [addPromotionApi] = useAddPromotionApiMutation()
    const [deletePromotionApi] = useDeletePromotionApiMutation()



    const props = {
        name: 'file',
        multiple: false,
        maxCount: 1,
        showUploadList: false,
        beforeUpload: (file) => {
            const reader = new FileReader();
            reader.onload = e => {
                setPreview(e.target.result);
            };
            reader.readAsDataURL(file);
            setFile(file); // Store the file directly
            return false;
        },
    };

    // view modal
    const [isModalOpen, setIsModalOpen] = useState(false);




    const handleCancel = () => {
        setIsModalOpen(false);
    };


    const handleDelete = async (id) => {
        try {
            const res = await deletePromotionApi(id).unwrap();
            console.log(res)
            if (res?.status === true) {
                toast.success(res?.message);
                refetch();
            }
        } catch (error) {
            toast.error(error.data?.message)
        }
    };



    // single image upload function
    const handleUpload = async () => {
        const formData = new FormData();
        formData.append("banner_image", file);
        try {
            const res = await addPromotionApi(formData).unwrap();
            if (res?.status === true) {
                toast.success(res?.message);
                setFile(null);
                setPreview(null);
                setIsModalOpen(false);
                refetch()
            }
        } catch (error) {
            toast.error(error?.data?.message);
        }
    }


    return (
        <div>
            <p className='font-PoppinsMedium text-xl text-black mb-6'>Promotional banners</p>

            <div className='grid grid-cols-4 gap-3'>
                {
                    promotionData?.map((item) => (
                        <div key={item?.id} className='relative '>
                            <img className='rounded-2xl ' src={item?.banner_image} alt="card image" />
                            <span
                                onClick={() => handleDelete(item?.id)}
                                className='cursor-pointer absolute top-1 right-3  p-1.5 bg-white rounded-full flex items-center '
                            >{IconCross}</span>
                        </div>
                    ))
                }
            </div>
            <button onClick={() => setIsModalOpen(true)} className='font-PoppinsMedium text-lg text-white bg-primary py-3 px-28 rounded-lg mt-10  '>Add More</button>



            {/* ================ shoppers successful modal =============== */}
            <Modal
                centered
                title={
                    <div className="text-center bg-primary text-[#ffffff] py-4 font-degular text-[18px]  font-semibold rounded-t-lg">
                        Upload banner
                    </div>
                }
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
                closable={true}
                className='custom-service-modal'
            >
                <div className="text-center space-y-4">
                <div className='px-4 pt-8'>

                    <Dragger {...props} className="!bg-white !border-gray-200 rounded-md py-6">
                        {preview ? (
                            <img src={preview} alt="preview" className="mx-auto h-40 object-contain" />
                        ) : (
                            <>
                                <InboxOutlined className="text-4xl text-blue-500 mb-2" />
                                <p className="text-gray-500">Click or drag file to this area to upload</p>
                                <p className="text-sm text-gray-400">366x158 px · Max size 10MB</p>
                            </>
                        )}
                    </Dragger>


                    <button
                        onClick={handleUpload}
                        className='bg-green-600  hover:bg-green-700 w-full h-10 text-base rounded-xl text-white font-semibold mt-8'
                         style={{
                                    backgroundColor: "#23AA49",
                                    color: "#ffffff",
                                    fontSize: "20px",
                                    fontWeight: "600",
                                    height: "60px",
                                    borderRadius: "20px",
                                    paddingInline: "20px",
                                    marginTop: "20px",
                                    marginBottom: "20px"
                                }}
                        >
                        Upload
                    </button>

                </div>
                </div>
            </Modal>

        </div>
    )
}

export default Promotions