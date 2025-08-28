
import React, { useState } from 'react'
import { Button, Form, Input, Modal } from 'antd'
import { useForm } from 'antd/es/form/Form';



const DeliveryCharge = () => {
    const [addForm] = useForm()
    const [isModalOpen, setIsModalOpen] = useState(false);


    const showModal = () => {
        setIsModalOpen(true);
    }

  const onFinishOne = async (values) => {



        const formData = new FormData();
        formData.append("name", values?.name);
        // try {
        //     const res = await addTermsApi(formData).unwrap();

        //     if (res?.status === true) {
        //         toast.success(res?.message);
        //         addForm.resetFields()
        //         setIsModalAddOpen(false);
        //     }
        // } catch (error) {
        //     toast.error(error.data?.message)
        // }

    }


    const handleok = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };








    return (
        <div>

            <button
                onClick={showModal}
                className='font-PoppinsMedium text-lg text-white bg-primary py-3 px-28 rounded-lg mt-4  '>Add More</button>



            {/* ================ shoppers successful modal =============== */}
            <Modal
                centered
                title={
                    <div className="text-center bg-primary text-[#ffffff] py-4 font-degular text-[18px]  font-semibold rounded-t-lg">
                 Add delivery charge
                    </div>
                }
                open={isModalOpen}
                onOk={handleok}
                onCancel={handleCancel}
                footer={null}
                closable={true}
                className='custom-service-modal'
            >
                <div className=" space-y-4">
                    <div className='px-4 py-4'>

                        <Form form={addForm} onFinish={onFinishOne}>
                            <div className="">
                                <p className="text-[20px] font-medium font-degular">Title</p>
                                <Form.Item name="name" className="mb-0"
                                    rules={[{ required: true, message: "Term is required" }]}
                                >
                                    <Input placeholder="Add a Term" style={{ height: "40px", borderRadius: "8px" }} />
                                </Form.Item>
                            </div>




                            <Button
                                htmlType="submit"
                                block
                                // loading={loading}
                                style={{
                                    backgroundColor: "#23AA49",
                                    color: "#ffffff",
                                    fontSize: "20px",
                                    fontWeight: "600",
                                    height: "60px",
                                    borderRadius: "20px",
                                    paddingInline: "20px",
                                    marginTop: "20px"
                                }}
                            >
                                Add
                            </Button>
                        </Form>


                      

                    </div>
                </div>
            </Modal>

        </div>
    )
}

export default DeliveryCharge