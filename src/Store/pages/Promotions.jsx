import React, { useState } from 'react'
import { IconCross } from '../../assets/icon'
import { Button, Modal } from 'antd'
import { InboxOutlined } from '@ant-design/icons';
import Dragger from 'antd/es/upload/Dragger';

const Promotions = () => {

    const [fileList, setFileList] = useState([]);
    const [preview, setPreview] = useState(null);

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
            setFileList([file]); // prevent default upload
            return false;
        },
    };

    // view modal
    const [isModalOpen, setIsModalOpen] = useState(false);




    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const handleDelete = () => {
       console.log('click---------')
    };


    const promotionsCard = [
        {
            id: 1,
            image: "https://i.ibb.co/q3fMtdgR/Group-8759.png"
        },
        {
            id: 2,
            image: "https://i.ibb.co/zH4YSzLq/Group-290337.png"
        },
        {
            id: 3,
            image: "https://i.ibb.co/4ZBQwDw3/Mask-group.png"
        },
        {
            id: 4,
            image: "https://i.ibb.co/q3fMtdgR/Group-8759.png"
        },
    ]

    return (
        <div>
            <p className='font-PoppinsMedium text-xl text-black mb-6'>Promotional banners</p>

            <div className='grid grid-cols-4 gap-3'>
                {
                    promotionsCard.map((item) => (
                        <div key={item?.id} className='relative '>
                            <img className='rounded-2xl ' src={item?.image} alt="card image" />
                            <span 
                            onClick={handleDelete}
                            className='cursor-pointer absolute top-1 right-3  p-1.5 bg-white rounded-full flex items-center '
                            >{IconCross}</span>
                        </div>
                    ))
                }
            </div>
            <button onClick={() => setIsModalOpen(true)} className='font-PoppinsMedium text-lg text-white bg-primary py-3 px-28 rounded-lg mt-10  '>Add More</button>

            {/* ================ shoppers successful modal =============== */}
            <Modal
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
                closable={true}
                centered
                className="rounded-lg"
            >
                <div className="text-center space-y-4">
                    <h2 className="text-xl font-semibold pb-6">Upload banner</h2>

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
                        className='bg-green-600  hover:bg-green-700 w-full h-10 text-base rounded-xl text-white font-semibold mt-8'
                    >
                        Upload
                    </button>
                </div>
            </Modal>

        </div>
    )
}

export default Promotions