import React, { useEffect, useState } from 'react';
import { Button, Collapse, Form, Input, Modal, Popconfirm, Space } from 'antd';
import { useFaqAddApiMutation, useFaqDeleteApiMutation, useFaqEditApiMutation, useGetAllFaqApiQuery, useGetSingleFaqApiQuery } from '../../redux/dashboardFeatures/notification/dashboardFaqApi';
import { useForm } from 'antd/es/form/Form';
import toast from 'react-hot-toast';


const FAQ = () => {
    const [addForm] = useForm()
    const [editForm] = useForm()
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editId, setEditId] = useState('')



    const [faqAddApi] = useFaqAddApiMutation()
    const [faqEditApi] = useFaqEditApiMutation()
    const [faqDeleteApi] = useFaqDeleteApiMutation()
    const { data: getFaq, refetch } = useGetAllFaqApiQuery()
    const allFaqData = getFaq?.data
    const { data: singleGetFaq } = useGetSingleFaqApiQuery(editId)
    const singleData = singleGetFaq?.data

    useEffect(() => {
        if (singleData) {
            editForm.setFieldsValue({
                ...singleData,
                question: singleData?.question,
                answer: singleData?.answer,
            });
        }
    }, [singleData, editForm]);


    //=========== add faq function start ============================
    const onFinishAddModal = async (values) => {
        const formData = new FormData();
        formData.append("question", values?.question);
        formData.append("answer", values?.answer);




        // formData.forEach((value, key) => {
        //   console.log(key, value);
        // });

        try {
            const res = await faqAddApi(formData).unwrap();
            if (res?.status === true) {
                toast.success(res?.message);
                addForm.resetFields();
                setIsAddModalOpen(false);
                refetch();
            }
        } catch (error) {
            toast.error(error.data?.message)
        }
    }

    const handleCancelOne = () => {
        setIsAddModalOpen(false)
        addForm.resetfield()
    };
    //=========== add faq function  ==================================



    //=========== edit faq function start ============================
    const onFinishEditModal = async (values) => {
        const formData = new FormData();
        formData.append("question", values?.question);
        formData.append("answer", values?.answer);




        // formData.forEach((value, key) => {
        //   console.log(key, value);
        // });

        try {
            const res = await faqEditApi({editFaqInfo: formData, id: editId}).unwrap();
            console.log(res)

            if (res?.status === true) {
                toast.success(res?.message);
                setIsEditModalOpen(false);
                refetch();
            }
        } catch (error) {
            toast.error(error.data?.message)
        }
    }




    const handleCancelTwo = () => {
        setIsEditModalOpen(false)
        editForm.resetFields()
    };
    //=========== edit faq function  ==================================



    const handleDelete = async (id) => {
        try {
            const res = await faqDeleteApi(id).unwrap();
            if (res?.status === true) {
                toast.success(res?.message);
                refetch();
            }
        } catch (error) {
            toast.error(error.data?.message)
        }
    }
    const handleEdit = async (id) => {
        setEditId(id)
        setIsEditModalOpen(true)

        // try {
        //     const res = await faqDeleteApi(id).unwrap();
        //     if (res?.status === true) {
        //         toast.success(res?.message);
        //         refetch();
        //     }
        // } catch (error) {
        //     toast.error(error.data?.message)
        // }
    }


    // Generate extra content for each FAQ item
    const genExtra = (faq) => (
        <Space size="middle">
            {/* Edit icon */}
            <div onClick={(e) => {
                e.stopPropagation();
                handleEdit(faq.id);
            }}>
                <svg
                    width="37"
                    height="37"
                    viewBox="0 0 37 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ cursor: 'pointer' }}
                >
                    <rect width="37" height="37" rx="5" fill="#E4FFEB" />
                    <path
                        d="M21 13.1716L24 16.1716M19 27.1716H27M11 23.1716L10 27.1716L14 26.1716L25.586 14.5856C25.9609 14.2105 26.1716 13.7019 26.1716 13.1716C26.1716 12.6412 25.9609 12.1326 25.586 11.7576L25.414 11.5856C25.0389 11.2106 24.5303 11 24 11C23.4697 11 22.9611 11.2106 22.586 11.5856L11 23.1716Z"
                        stroke="#28A745"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>

            {/* Delete icon */}
            <div onClick={(e) => e.stopPropagation()}>
                <Popconfirm
                    title="Are you sure to delete this FAQ?"
                    onConfirm={() => handleDelete(faq.id)}
                    okText="Yes"
                    cancelText="No"
                >
                    <svg
                        width="37"
                        height="37"
                        viewBox="0 0 37 37"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ cursor: 'pointer' }}
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

    // Generate items for Collapse component from API data
    const items = allFaqData?.map((faq, index) => ({
        key: faq.id || index.toString(),
        label: faq.question,
        children: <p>{faq.answer}</p>,
        extra: genExtra(faq),
    }));





    return (
        <div className='mt-5'>
            <Collapse accordion items={items} />
            <button onClick={() => setIsAddModalOpen(true)} className='px-20 py-3 rounded-lg bg-primary hover:ring-primary text-white mt-8'>Add More</button>


            {/* ================ Edit modal =============== */}
            <Modal
                open={isEditModalOpen}
                onCancel={handleCancelTwo}
                footer={null}
                centered
                className="rounded-lg"
            >
                <p className='font-PoppinsSemiBold text-2xl text-black  text-center'>Update new question</p>

                <div className="form-container">
                    <Form
                        form={editForm}
                        layout="vertical"
                        onFinish={onFinishEditModal}
                        requiredMark={false}
                    >
                        <Form.Item
                            name="question"
                            label="Question"
                            rules={[{ required: true, message: 'Please input your question!' }]}
                        >
                            <Input placeholder="Add your question here" />
                        </Form.Item>

                        <Form.Item
                            name="answer"
                            label="Answer"
                            rules={[{ required: true, message: 'Please input your answer!' }]}
                        >
                            <Input.TextArea
                                placeholder="Add your answer here"
                                rows={6}
                                style={{ resize: 'none' }}
                            />
                        </Form.Item>

                        <Form.Item style={{ textAlign: 'center', marginBottom: 0 }}>
                            <Button type="primary" htmlType="submit" className="submit-button">
                                Update
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Modal>



            {/* ================ Add modal =============== */}
            <Modal
                open={isAddModalOpen}
                onCancel={handleCancelOne}
                footer={null}
                centered
                className="rounded-lg"
            >
                <p className='font-PoppinsSemiBold text-2xl text-black  text-center'>Add new question</p>

                <div className="form-container">
                    <Form
                        form={addForm}
                        layout="vertical"
                        onFinish={onFinishAddModal}
                        requiredMark={false}
                    >
                        <Form.Item
                            name="question"
                            label="Question"
                            rules={[{ required: true, message: 'Please input your question!' }]}
                        >
                            <Input placeholder="Add your question here" />
                        </Form.Item>

                        <Form.Item
                            name="answer"
                            label="Answer"
                            rules={[{ required: true, message: 'Please input your answer!' }]}
                        >
                            <Input.TextArea
                                placeholder="Add your answer here"
                                rows={6}
                                style={{ resize: 'none' }}
                            />
                        </Form.Item>

                        <Form.Item style={{ textAlign: 'center', marginBottom: 0 }}>
                            <Button type="primary" htmlType="submit" className="submit-button">
                                Add
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Modal>


        </div>
    )
}

export default FAQ