import { Button, Form, Input, Modal, Pagination, Popconfirm, Space } from 'antd'
import { useState } from 'react'
import { IconSearch } from '../assets/icon'

import { useForm } from 'antd/es/form/Form'
import { useAddTermsApiMutation, useDeleteTermApiMutation, useGetAllTermApiQuery, useGetSingleTermApiQuery, useUpdateTermApiMutation } from '../redux/dashboardFeatures/manageTerm/dashboardManageTerm'
import { useEffect } from 'react'
import toast from 'react-hot-toast'

const ManageCategory = () => {
    const [addForm] = useForm()
    const [editForm] = useForm()
    const [isAddModalOpen, setIsModalAddOpen] = useState(false);
    const [isEditModalOpen, setIsModalEditOpen] = useState(false);
    const [editId, setEditId] = useState()
    const [searchText, setSearchText] = useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(45);

    const [addTermsApi] = useAddTermsApiMutation()

    const { data: getAllTerm, refetch, isLoading } = useGetAllTermApiQuery({ search:searchText ,per_page: perPage, page: currentPage, })
    const allTermData = getAllTerm?.data?.data
    const totalPagination = getAllTerm?.data?.total

    






    const { data: getSingle } = useGetSingleTermApiQuery(editId)
    const singleData = getSingle?.term



    const [deleteTermApi] = useDeleteTermApiMutation()
    const [updateTermApi] = useUpdateTermApiMutation()




    useEffect(() => {
        if (singleData) {
            editForm.setFieldsValue({
                ...singleData,
                name: singleData?.name,
            });
        }
    }, [singleData, editForm]);




    // ======= add term start ===============
    const showModalAdd = () => {
        setIsModalAddOpen(true);
    };

    const onFinishOne = async (values) => {
        const formData = new FormData();
        formData.append("name", values?.name);
        try {
            const res = await addTermsApi(formData).unwrap();

            if (res?.status === true) {
                toast.success(res?.message);
                addForm.resetFields()
                setIsModalAddOpen(false);
            }
        } catch (error) {
            toast.error(error.data?.message)
        }
    }

    const handleOkAdd = () => {
        addForm.submit()

    };

    const handleCancelAddModal = () => {
        setIsModalAddOpen(false);
    };
    // ======= add term end =================







    // ======= edit term start ===============
    const showModalEdit = (id) => {
        setEditId(id)
        setIsModalEditOpen(true);
    };

    const onFinishTwo = async (values) => {
        const formData = new FormData();
        formData.append("name", values?.name);


        try {
            const res = await updateTermApi({ updateTermInfo: formData, id: editId }).unwrap();
            if (res?.status === true) {
                toast.success(res?.message);
                setIsModalEditOpen(false);
                refetch()
            }
        } catch (error) {
            toast.error(error.data?.message)
        }
    }


    const handleOkEdit = () => {
        editForm.submit()
    };

    const handleCancelEditModal = () => {
        setIsModalEditOpen(false);
    };
    // ======= edit term end =================

    const handleChange = (e) => {
        setSearchText(e.target.value);
    }

    // delete api
    const handleDelete = async (id) => {
        try {
            const res = await deleteTermApi(id).unwrap();
            if (res?.status === true) {
                toast.success(res?.message);
                refetch();
            }
        } catch (error) {
            toast.error(error.data?.message)
        }
    }






    useEffect(() => {
        refetch();
    }, [searchText, currentPage, perPage, refetch]);


    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <div>

            <div className="flex justify-between my-8  items-center">

                <div className='flex justify-between w-full'>
                    <div className='flex items-center'>
                        <input
                            type="search"
                            value={searchText}
                            onChange={handleChange}
                            className="w-[534px] p-4 border rounded-l-full border-[#D9D9D9] focus:outline-none"
                            placeholder="Search term"
                            name=""
                            id=""
                        />
                        <button className="bg-primary p-2.5 -ml-1 border rounded-r-full">
                            {IconSearch}
                        </button>
                    </div>


                    <div className="">
                        <button
                            onClick={showModalAdd}
                            type="button" className="p-2.5 bg-primary text-[#ffff] px-10  rounded-full text-xl">+ Add more</button>
                    </div>
                </div>
            </div>




            <div className='grid grid-cols-5 gap-3'>
                {
                    allTermData?.map((item, index) => {
                        const serialNumber = (currentPage - 1) * perPage + index + 1;

                        return (
                            <div key={index} className='flex justify-between items-center rounded-lg px-4 py-2 bg-white shadow-md'>

                                <p className='font-semibold text-base text-blacks'>  {serialNumber}. {item.name} </p>
                                <Space size="middle">

                                    <div onClick={() => showModalEdit(item?.id)} className='cursor-pointer'>
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
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>


                                    <div>
                                        <Popconfirm
                                            title="Are you sure to delete this categorie?"
                                            onConfirm={() => handleDelete(item.id)}
                                            okText="Yes"
                                            cancelText="No"
                                            className='cursor-pointer'
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
                        )
                    })
                }
            </div>


            {/* add modal */}
            <Modal
                centered
                title={
                    <div className="text-center bg-primary text-[#ffffff] py-4 font-degular text-[18px]  font-semibold rounded-t-lg">
                        Add term
                    </div>
                }
                open={isAddModalOpen}
                onOk={handleOkAdd}
                onCancel={handleCancelAddModal}
                footer={null}
                width={500}
                className='custom-service-modal'>


                <div className="pb-4">
                    <div className='px-4 pt-8'>
                        <Form form={addForm} onFinish={onFinishOne}>
                            <div className="">
                                <p className="text-[20px] font-medium font-degular">Title</p>
                                <Form.Item name="name" className="mb-0"
                                    rules={[{ required: true, message: "Term is required" }]}
                                >
                                    <Input placeholder="Add a Term" style={{ height: "50px", borderRadius: "20px" }} />
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




            {/* add modal */}
            <Modal
                centered
                title={
                    <div className="text-center bg-primary text-[#ffffff] py-4 font-degular text-[18px]  font-semibold rounded-t-lg">
                        Edit term
                    </div>
                }
                open={isEditModalOpen}
                onOk={handleOkEdit}
                onCancel={handleCancelEditModal}
                footer={null}
                width={500}
                className='custom-service-modal'>


                <div className="pb-4">
                    <div className='px-4 pt-8'>
                        <Form form={editForm} onFinish={onFinishTwo}>
                            <div className="">
                                <p className="text-[20px] font-medium font-degular">Title</p>
                                <Form.Item name="name" className="mb-0"
                                    rules={[{ required: true, message: "Term is required" }]}
                                >
                                    <Input placeholder="update a Term" style={{ height: "50px", borderRadius: "20px" }} />
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
                                Update
                            </Button>
                        </Form>
                    </div>
                </div>
            </Modal>




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
        </div>
    )
}

export default ManageCategory