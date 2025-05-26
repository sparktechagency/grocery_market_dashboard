import React, { useState } from "react";
import { Form, Input, Modal, Tabs, Upload } from "antd";
import { IconDollar, IconEdit } from "../../assets/icon";
import { ImgProfile } from "../../assets/images";


// tabs 1
const onFinish = (values) => {
    console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
};

const onFinishTabs2 = (values) => {
    console.log("Success:", values);
};

const onFinishFailedTabs2 = (
    errorInfo
) => {
    console.log("Failed:", errorInfo);
};


// profile img1 img

const ChangePassword = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onChange = (key) => {
        console.log(key);
    };

    const items = [
        {
            key: "1",
            label: "Edit profile",
            children: (
                <div className="flex gap-10 justify-between items-center">
                    <div className=" w-full  " >
                        <Form
                            name="edit-profile"
                            // style={{ maxWidth: 600 }}
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            {/*Edit profile  title input*/}
                            <Form.Item
                                name="title"
                                rules={[{ required: true, message: "Please input your title!" }]}
                                className="mb-7"
                                colon={false}
                                label=""
                            >
                                <span className="font-semibold font-roboto text-lg block mb-2">
                                    Name
                                </span>
                                <Input
                                    placeholder="John Doe"
                                    className="p-4 border-none bg-[#ffffff]"
                                />
                            </Form.Item>

                            <Form.Item
                                label=""
                                name="email"
                                rules={[{ required: true, message: "Please input your email!" }]}
                                colon={false}
                            >
                                <span className="font-semibold font-roboto text-lg block mb-2">
                                    Email
                                </span>
                                <Input
                                    placeholder="example@gmail.com"
                                    className="p-4 border-none  bg-[#ffffff]"
                                />
                            </Form.Item>

                            <div className="text-center mt-5 ">
                                <button className="text-white bg-primary  hover:bg-green-600 font-semibold font-popping text-xl py-2 px-10 rounded-md ">
                                    Save
                                </button>
                            </div>
                        </Form>
                    </div>

                    <div className="w-[420px] flex flex-col justify-center  items-center">
                        <div className="bg-white rounded-lg w-full flex flex-col justify-center items-center h-44 shadow-md ">
                            <span>{IconDollar}</span>
                            <h5 className="font-semibold text-xl text-black">Balance</h5>
                            <h2 className="font-bold text-3xl text-black">$500.30</h2>
                        </div>
                        <button onClick={() => setIsModalOpen(true)} className="bg-primary w-full py-3 mt-5 text-white rounded-lg">Withdraw</button>
                    </div>
                </div>
            ),
        },
        {
            key: "2",
            label: "Change Password",
            children: (
                <Form
                    name="change-password"
                    // style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinishTabs2}
                    onFinishFailed={onFinishFailedTabs2}
                    autoComplete="off"
                >
                    {/*Edit profile  title input*/}
                    <Form.Item
                        name="currentPassword"
                        label=""
                        rules={[
                            { required: true, message: "Please input your Current Password" },
                        ]}
                        className="mb-7"
                        colon={false}
                    >
                        <span className="font-semibold font-roboto text-lg block mb-2">
                            Current password
                        </span>
                        <Input.Password
                            placeholder="**********"
                            className="p-4 border-none w-[1112px] bg-[#ffffff]"
                        />
                    </Form.Item>
                    {/*Edit profile email input */}
                    <Form.Item
                        label=""
                        name="newPassword"
                        rules={[{ required: true, message: "Please Input New Password" }]}
                        colon={false}
                    >
                        <span className="font-semibold font-roboto text-lg block mb-2">
                            New password
                        </span>
                        <Input.Password
                            placeholder="**********"
                            className="p-4 border-none w-[1112px] bg-[#ffffff]"
                        />
                    </Form.Item>
                    {/*Edit profile email input */}
                    <Form.Item
                        name="ConfirmNewPassword"
                        label=""
                        dependencies={["newPassword"]}
                        rules={[
                            { required: true, message: "Please input Confirm new password" },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue("newPassword") === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(
                                        new Error(
                                            "The two passwords that you entered do not match!"
                                        )
                                    );
                                },
                            }),
                        ]}
                        colon={false}
                    >
                        <span className="font-semibold font-roboto text-lg block mb-2">
                            Confirm new password
                        </span>
                        <Input.Password
                            placeholder="**********"
                            className="p-4 border-none w-[1112px] bg-[#ffffff]"
                        />
                    </Form.Item>
                    {/*Edit profile save button */}
                    <div className="text-center mt-5 ">
                        <button className="text-white bg-primary  font-semibold font-popping text-xl py-2 px-10 rounded-md ">
                            Save
                        </button>
                    </div>
                </Form>
            ),
        },
    ];
    // tabs end

    // profile img change functionality
    const [previewImage, setPreviewImage] = useState(null);

    // Called before upload
    const handleBeforeUpload = (file) => {
        const isImage = file.type.startsWith("image/");
        if (!isImage) {
            alert("Please upload an image file.");
            return false;
        }

        // Create a preview URL and save to state
        setPreviewImage(URL.createObjectURL(file));
        return false; // prevents auto upload
    };

    return (
        <div>
            {/* profile section  */}
            <div className="bg-white  mx-52 mt-5 rounded-lg flex flex-col justify-center items-center py-8">
                <div className="relative">
                    {previewImage ? <img src={previewImage} alt="" className="w-24 rounded-full h-24 object-cover" /> : <img className="w-24 h-24 rounded-full" src={ImgProfile} alt="" />}
                    <Upload
                        showUploadList={false}
                        beforeUpload={handleBeforeUpload}
                        accept="image/*"
                    >
                        <button className="w-8 bg-white flex justify-center items-center p-2 shadow-lg rounded-full absolute right-0 bottom-5">
                            <span className="w-5">{IconEdit}</span>
                        </button>
                    </Upload>
                </div>
                <h3 className="font-roboto font-medium text-[30px]">Jhon Doe</h3>
                <p className="text-[#B1A8A8] font-roboto font-medium text-xl">
                    example@gmail.com
                </p>
            </div>

            {/* and tabs */}
            <div className="mx-52">
                <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
            </div>

            {/*  ============= withdraw modal ================ */}

            <Modal
                title={null}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
            >

                <div className=" w-full ">
                    <h2 className="text-center text-lg font-semibold text-green-600 mb-6">
                        Withdraw your money with Stripe
                    </h2>

                    {/* Card Tab */}
                    <div className="border border-blue-500 rounded p-2 flex items-center gap-2 mb-4">
                        <span className="text-blue-600">💳</span>
                        <span className="font-semibold text-blue-600">Card</span>
                    </div>

                    {/* Card Number */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Card number</label>
                        <input
                            type="text"
                            className="w-full border rounded px-3 py-2"
                            placeholder="1234 1234 1234 1234"
                        />
                    </div>

                    {/* Expiration & CVC */}
                    <div className="flex gap-4 mb-4">
                        <div className="flex-1">
                            <label className="block text-sm font-medium mb-1">Expiration</label>
                            <input
                                type="text"
                                className="w-full border rounded px-3 py-2"
                                placeholder="MM / YY"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm font-medium mb-1">CVC</label>
                            <input
                                type="text"
                                className="w-full border rounded px-3 py-2"
                                placeholder="CVC"
                            />
                        </div>
                    </div>

                    {/* Country */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-1">Country</label>
                        <select className="w-full border rounded px-3 py-2">
                            <option>Select</option>
                            <option>United States</option>
                            <option>Canada</option>
                            <option>India</option>
                        </select>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-between">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="border border-gray-500 px-4 py-2 rounded"
                        >
                            Cancel
                        </button>
                        <button onClick={() => setIsModalOpen(false)} className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
                            Withdraw
                        </button>
                    </div>
                </div>

            </Modal>
        </div>
    );
};

export default ChangePassword;
