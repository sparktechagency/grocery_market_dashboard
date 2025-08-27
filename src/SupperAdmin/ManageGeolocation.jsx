
import React, { useEffect, useState } from "react";
import { Table, Button, Space, Image, Popconfirm, message, Modal, Form, Input, Pagination } from "antd";
import { IconSearch } from "../assets/icon";
import { useForm } from "antd/es/form/Form";
import { useAddGeoLocationApiMutation, useDeleteGeoLocationApiMutation, useGetGeoLocationApiQuery, useSingleGeoLocationApiQuery, useUpdateGeoLocationApiMutation } from "../redux/dashboardFeatures/geoLocation/dashboardGeoLocation";
import toast from "react-hot-toast";




const ManageGeolocation = () => {
  const [addForm] = useForm()
  const [editForm] = useForm()
  const [isAddModalOpen, setIsModalAddOpen] = useState(false);
  const [isEditModalOpen, setIsModalEditOpen] = useState(false);
  const [viewDetailsModalOpen, setViewDetailsModalOpen] = useState(false);
  const [editId, setEditId] = useState('')
  const [searchText, setSearchText] = useState('')
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(8);


  const [AddGeoLocationApi] = useAddGeoLocationApiMutation()
  const [updateGeoLocationApi] = useUpdateGeoLocationApiMutation()
  const [deleteGeoLocationApi] = useDeleteGeoLocationApiMutation()

  const { data: getSingleGeoLocation } = useSingleGeoLocationApiQuery(editId)
  const singleGLocationData = getSingleGeoLocation?.geolocation

  const { data: Geolocation, refetch } = useGetGeoLocationApiQuery({ search: searchText, per_page: perPage, page: currentPage, });
  const geoLocationData = Geolocation?.data?.data
  const totalPagination = Geolocation?.data?.total



  console.log(singleGLocationData)




  // DEFAULT DATA SHOW IN UPDATE MODAL
  useEffect(() => {
    if (singleGLocationData) {
      editForm.setFieldsValue({
        ...singleGLocationData,
        address: singleGLocationData?.address,
        city: singleGLocationData?.city,
        zipCode: singleGLocationData?.zipCode,
        latitude: singleGLocationData?.latitude,
        longitude: singleGLocationData?.longitude,
      });
    }
  }, [singleGLocationData, editForm]);






  // ======= add term start ===============
  const showModalAdd = () => {
    setIsModalAddOpen(true);
  };

  const onFinishOne = async (values) => {
    const formData = new FormData();
    formData.append("address", values?.address);
    formData.append("city", values?.city);
    formData.append("zipCode", values?.zipCode);
    formData.append("latitude", values?.latitude);
    formData.append("longitude", values?.longitude);

    try {
      const res = await AddGeoLocationApi(formData).unwrap();

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
    formData.append("address", values?.address);
    formData.append("city", values?.city);
    formData.append("zipCode", values?.zipCode);
    formData.append("latitude", values?.latitude);
    formData.append("longitude", values?.longitude);


    try {
      const res = await updateGeoLocationApi({ editGLocationInfo: formData, id: editId }).unwrap();
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


  // VIEW DETAILS
  const handleViewDetails = async (id) => {
    setEditId(id)
    setViewDetailsModalOpen(true)
  }

  const handleOkViewDetails = () => {
    setViewDetailsModalOpen(false)
  }


  const handleCancelViewDetailsModal = () => {
    setViewDetailsModalOpen(false)
  }



  // DELETE
  const handleDelete = async (id) => {
    try {
      const res = await deleteGeoLocationApi(id).unwrap();
      if (res?.status === true) {
        toast.success(res?.message);
        refetch();
      }
    } catch (error) {
      toast.error(error.data?.message)
    }
  }





  const handleChange = (e) => {
    setSearchText(e.target.value);
  }





  const columns = [
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      align: "center",
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
      align: "center",
    },
    {
      title: "Zip Code",
      dataIndex: "zipCode",
      key: "zipCode",
      align: "center",
    },
    {
      title: "Latitude",
      dataIndex: "latitude",
      key: "latitude",
      align: "center",
    },
    {
      title: "Longitude",
      dataIndex: "longitude",
      key: "longitude",
      align: "center",
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: (_, record) => (
        <Space size="middle">
          {/* view icon */}
          <div className="cursor-pointer"
            onClick={() => handleViewDetails(record.id)}
          >
            <svg
              className="cursor-pointer"
              width="37"
              height="37"
              viewBox="0 0 37 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="37" height="37" rx="5" fill="#FFF3EB" />
              <path
                d="M18 15.8C17.132 15.8 16.2996 16.1371 15.6858 16.7373C15.0721 17.3374 14.7273 18.1513 14.7273 19C14.7273 19.8487 15.0721 20.6626 15.6858 21.2627C16.2996 21.8629 17.132 22.2 18 22.2C18.868 22.2 19.7004 21.8629 20.3142 21.2627C20.9279 20.6626 21.2727 19.8487 21.2727 19C21.2727 18.1513 20.9279 17.3374 20.3142 16.7373C19.7004 16.1371 18.868 15.8 18 15.8ZM18 24.3333C16.5534 24.3333 15.166 23.7714 14.1431 22.7712C13.1201 21.771 12.5455 20.4145 12.5455 19C12.5455 17.5855 13.1201 16.229 14.1431 15.2288C15.166 14.2286 16.5534 13.6667 18 13.6667C19.4466 13.6667 20.834 14.2286 21.8569 15.2288C22.8799 16.229 23.4545 17.5855 23.4545 19C23.4545 20.4145 22.8799 21.771 21.8569 22.7712C20.834 23.7714 19.4466 24.3333 18 24.3333ZM18 11C12.5455 11 7.88727 14.3173 6 19C7.88727 23.6827 12.5455 27 18 27C23.4545 27 28.1127 23.6827 30 19C28.1127 14.3173 23.4545 11 18 11Z"
                fill="#F96D10"
              />
            </svg>
          </div>

          <div onClick={() => showModalEdit(record.id)}>
            <svg className="cursor-pointer"
              width="37" height="37" viewBox="0 0 62 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="62" height="60" rx="5" fill="#E4FFEB" />
              <path d="M34.5938 21.5885L38.9062 25.8553M31.7188 41.5H43.2188M20.2188 35.811L18.7812 41.5L24.5312 40.0777L41.1861 23.5996C41.7251 23.0662 42.0279 22.3428 42.0279 21.5885C42.0279 20.8343 41.7251 20.1109 41.1861 19.5775L40.9389 19.3328C40.3997 18.7996 39.6686 18.5 38.9062 18.5C38.1439 18.5 37.4128 18.7996 36.8736 19.3328L20.2188 35.811Z" stroke="#28A745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>


          <div className="cursor-pointer">
            <Popconfirm
              title="Are you sure to delete this geolocation?"

              onConfirm={() => handleDelete(record.id)}
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
      ),
    },
  ];




  useEffect(() => {
    refetch();
  }, [searchText, currentPage, perPage, refetch]);



  // view modal end
  return (
    <>



      <div className='flex justify-between w-full my-8'>
        <div className='flex items-center'>
          <input
            type="search"
            value={searchText}
            onChange={handleChange}
            className="w-[534px] p-4 border rounded-l-full border-[#D9D9D9] focus:outline-none"
            placeholder="Search geolocation address or city"
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





      <Table
        columns={columns}
        rowClassName={() => "table-row-gap"}
        className="custom-ant-table"
        dataSource={geoLocationData}
        pagination={false}
      />



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

      {/* add modal */}
      <Modal
        centered
        title={
          <div className="text-center bg-primary text-[#ffffff] py-4 font-degular text-[18px]  font-semibold rounded-t-lg">
            Add geolocation
          </div>
        }
        open={isAddModalOpen}
        onOk={handleOkAdd}
        onCancel={handleCancelAddModal}
        footer={null}
        width={700}
        className='custom-service-modal'>


        <div className="pb-4">
          <div className='px-4 pt-8'>
            <Form form={addForm} onFinish={onFinishOne}>

              <div className="space-y-4">
                {/* Address */}
                <div>
                  <label className="text-[20px] font-medium font-degular">Address</label>
                  <Form.Item
                    name="address"
                    className="mb-0"
                    rules={[{ required: true, message: "Address is required" }]}
                  >
                    <Input placeholder="Add an address" style={{ height: "50px", borderRadius: "20px" }} />
                  </Form.Item>
                </div>

                {/* City */}
                <div>
                  <label className="text-[20px] font-medium font-degular">City</label>
                  <Form.Item
                    name="city"
                    className="mb-0"
                    rules={[{ required: true, message: "City is required" }]}
                  >
                    <Input placeholder="Enter city" style={{ height: "50px", borderRadius: "20px" }} />
                  </Form.Item>
                </div>

                {/* Zip Code */}
                <div>
                  <label className="text-[20px] font-medium font-degular">Zip Code</label>
                  <Form.Item
                    name="zipCode"
                    className="mb-0"
                    rules={[{ required: true, message: "Zip code is required" }]}
                  >
                    <Input placeholder="Enter zip code" style={{ height: "50px", borderRadius: "20px" }} />
                  </Form.Item>
                </div>

                {/* Latitude */}
                <div>
                  <label className="text-[20px] font-medium font-degular">Latitude</label>
                  <Form.Item
                    name="latitude"
                    className="mb-0"
                    rules={[{ required: true, message: "Latitude is required" }]}
                  >
                    <Input placeholder="Enter latitude" style={{ height: "50px", borderRadius: "20px" }} />
                  </Form.Item>
                </div>

                {/* Longitude */}
                <div>
                  <label className="text-[20px] font-medium font-degular">Longitude</label>
                  <Form.Item
                    name="longitude"
                    className="mb-0"
                    rules={[{ required: true, message: "Longitude is required" }]}
                  >
                    <Input placeholder="Enter longitude" style={{ height: "50px", borderRadius: "20px" }} />
                  </Form.Item>
                </div>
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


      {/* edit modal */}
      <Modal
        centered
        title={
          <div className="text-center bg-primary text-[#ffffff] py-4 font-degular text-[18px]  font-semibold rounded-t-lg">
            Edit geolocation
          </div>
        }
        open={isEditModalOpen}
        onOk={handleOkEdit}
        onCancel={handleCancelEditModal}
        footer={null}
        width={700}
        className='custom-service-modal'>


        <div className="pb-4">
          <div className='px-4 pt-8'>
            <Form form={editForm} onFinish={onFinishTwo}>

              <div className="space-y-4">
                {/* Address */}
                <div>
                  <label className="text-[20px] font-medium font-degular">Address</label>
                  <Form.Item
                    name="address"
                    className="mb-0"
                    rules={[{ required: true, message: "Address is required" }]}
                  >
                    <Input placeholder="Add an address" style={{ height: "50px", borderRadius: "20px" }} />
                  </Form.Item>
                </div>

                {/* City */}
                <div>
                  <label className="text-[20px] font-medium font-degular">City</label>
                  <Form.Item
                    name="city"
                    className="mb-0"
                    rules={[{ required: true, message: "City is required" }]}
                  >
                    <Input placeholder="Enter city" style={{ height: "50px", borderRadius: "20px" }} />
                  </Form.Item>
                </div>

                {/* Zip Code */}
                <div>
                  <label className="text-[20px] font-medium font-degular">Zip Code</label>
                  <Form.Item
                    name="zipCode"
                    className="mb-0"
                    rules={[{ required: true, message: "Zip code is required" }]}
                  >
                    <Input placeholder="Enter zip code" style={{ height: "50px", borderRadius: "20px" }} />
                  </Form.Item>
                </div>

                {/* Latitude */}
                <div>
                  <label className="text-[20px] font-medium font-degular">Latitude</label>
                  <Form.Item
                    name="latitude"
                    className="mb-0"
                    rules={[{ required: true, message: "Latitude is required" }]}
                  >
                    <Input placeholder="Enter latitude" style={{ height: "50px", borderRadius: "20px" }} />
                  </Form.Item>
                </div>

                {/* Longitude */}
                <div>
                  <label className="text-[20px] font-medium font-degular">Longitude</label>
                  <Form.Item
                    name="longitude"
                    className="mb-0"
                    rules={[{ required: true, message: "Longitude is required" }]}
                  >
                    <Input placeholder="Enter longitude" style={{ height: "50px", borderRadius: "20px" }} />
                  </Form.Item>
                </div>
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




      {/* view details modal */}
      <Modal
        centered
        title={
          <div className="text-center bg-primary text-[#ffffff] py-4 font-degular text-[18px]  font-semibold rounded-t-lg">
            Details geolocation
          </div>
        }
        open={viewDetailsModalOpen}
        onOk={handleOkViewDetails}
        onCancel={handleCancelViewDetailsModal}
        footer={null}
        width={700}
        className='custom-service-modal'>


        <div className="pb-4">
          <div className="px-4 pt-4">
            <div>
              <div className="bg-lowGray px-2 py-3 rounded-md mt-0 space-y-4">

                {/* Address */}
                <div className="flex items-center justify-between gap-4 border border-gray-300 px-3 py-2 rounded-md">
                  <p className="font-PoppinsSemiBold text-sm text-black  w-40">
                    Address:
                  </p>
                  <p className="font-PoppinsRegular text-xl font-medium text-black  flex-1 text-right">
                    {singleGLocationData?.address || "---"}
                  </p>
                </div>

                {/* City */}
                <div className="flex items-center justify-between gap-4 border border-gray-300 px-3 py-2 rounded-md">
                  <p className="font-PoppinsSemiBold text-sm text-black  w-40">
                    City:
                  </p>
                  <p className="font-PoppinsRegular text-xl font-medium text-black  flex-1 text-right">
                    {singleGLocationData?.city || "---"}
                  </p>
                </div>

                {/* ZipCode */}
                <div className="flex items-center justify-between gap-4 border border-gray-300 px-3 py-2 rounded-md">
                  <p className="font-PoppinsSemiBold text-sm text-black  w-40">
                    ZipCode:
                  </p>
                  <p className="font-PoppinsRegular text-xl font-medium text-black  flex-1 text-right">
                    {singleGLocationData?.zipCode || "---"}
                  </p>
                </div>

                {/* Latitude */}
                <div className="flex items-center justify-between gap-4 border border-gray-300 px-3 py-2 rounded-md">
                  <p className="font-PoppinsSemiBold text-sm text-black  w-40">
                    Latitude:
                  </p>
                  <p className="font-PoppinsRegular text-xl font-medium text-black  flex-1 text-right">
                    {singleGLocationData?.latitude || "---"}
                  </p>
                </div>

                {/* Longitude */}
                <div className="flex items-center justify-between gap-4 border border-gray-300 px-3 py-2 rounded-md">
                  <p className="font-PoppinsSemiBold text-sm text-black  w-40">
                    Longitude:
                  </p>
                  <p className="font-PoppinsRegular text-xl font-medium text-black  flex-1 text-right">
                    {singleGLocationData?.longitude || "---"}
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>




      </Modal>
    </>
  );
};

export default ManageGeolocation;



