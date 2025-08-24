

const CommonModal = () => {

    const showModalAdd = () => {
        setIsModalAddOpen(true);
    };

    const onFinishOne = (values) => {
        console.log(values)

        //  setIsModalAddOpen(false);
    }

    const handleOkAdd = () => {
        addForm.submit()

    };

    const handleCancelAddModal = () => {
        setIsModalAddOpen(false);
    };


    return (
        <div>


            {/* modal components */}
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
                                <Form.Item name="term" className="mb-0"
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
        </div>
    )
}

export default CommonModal


