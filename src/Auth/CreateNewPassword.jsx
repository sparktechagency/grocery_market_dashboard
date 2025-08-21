
import AuthWrapper from "./AuthWrapper"
import { Button, Form, Input } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useResetPasswordApiMutation } from "../redux/authontication/authApi";

const CreateNewPassword = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const queryEmail = queryParams.get('email');

    const [resetPasswordApi] = useResetPasswordApiMutation()



    const onFinish = async (values) => {
        const formData = new FormData();
        formData.append("email", queryEmail);
        formData.append("new_password", values?.new_password);
        formData.append("confirmed_password", values?.confirmed_password);



        try {
            const res = await resetPasswordApi(formData).unwrap();
            console.log('response---------->', res) 

            if (res?.status === true) {
                toast.success(res?.message);
                navigate('/')

            }
        } catch (error) {
            toast.error(error.data?.message)
        }
    };



    useEffect(() => {
        document.title = "Dashboard Create New Password";
    }, [location.pathname]);


    return (
        <>
            <Helmet>
                <title>Dashboard Create New Password</title>
            </Helmet>
            <AuthWrapper>
                <div className="text-center mb-12 font-degular">
                    <div className="flex py-6 justify-center">
                        <h3 className="font-semibold text-2xl text-[#333333]">
                            Set a new password
                        </h3>
                    </div>
                    <p className="text-[16px] font-normal mb-6 text-[#5C5C5C]">
                        Create a new password. Ensure it differs from <br /> previous ones for security
                    </p>
                </div>

                <Form layout="vertical" onFinish={onFinish} className="font-degular">
                    {/* New Password Field */}
                    <div>
                        <p className="text-[24px] font-degular">New password</p>
                        <Form.Item
                            name="new_password"
                            rules={[{ required: true, message: "Please Input New Password" }]}
                            colon={false}
                        >
                            <Input.Password
                                placeholder="Write new password"
                                iconRender={(visible) => (visible ? <FaEye /> : <FaEyeSlash />)}
                                style={{ height: "50px", width: "481px", cursor: "pointer", }}
                            />
                        </Form.Item>
                    </div>

                    {/* Confirm Password Field */}
                    <div>
                        <p className="text-[24px] font-degular">Confirm Password</p>
                        <Form.Item
                            name="confirmed_password"
                            label=""
                            dependencies={["new_password"]}
                            rules={[
                                { required: true, message: "Please input Confirm new new_password" },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue("new_password") === value) {
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
                            <Input.Password
                                placeholder="Write confirm password"
                                iconRender={(visible) => (visible ? <FaEye /> : <FaEyeSlash />)}
                                style={{ height: "50px", width: "481px", cursor: "pointer", }}
                            />
                        </Form.Item>
                    </div>

                    {/* Submit Button */}
                    <Form.Item>
                        <div className="flex justify-center">

                            <Button
                                className="bg-primary h-12 text-sm text-white font-bold mt-6 px-10"
                                htmlType="submit"
                            >
                                Update Password
                            </Button>

                        </div>
                    </Form.Item>
                </Form>
            </AuthWrapper>
        </>
    )
}

export default CreateNewPassword