
import { Button, Input } from "antd";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import { useForgetPasswordApiMutation, useOtpSendApiMutation } from "../redux/authontication/authApi";
import AuthWrapper from "./AuthWrapper";

const OTPCode = () => {
    const navigate = useNavigate();
    const [otpCode, setOtpCode] = useState("");
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const queryEmail = queryParams.get('email');





    const [otpSendApi] = useOtpSendApiMutation()
    const [forgetPasswordApi] = useForgetPasswordApiMutation()

    // Define the `onChange` handler with the correct type
    const onChange = (value) => {
        setOtpCode(value);
    };

    const handleVerify = async () => {
        const formData = new FormData();
        formData.append("otp", otpCode);

        try {
            const res = await otpSendApi(formData).unwrap();
            const token = res?.token
            const role = res?.user?.role


            if (res?.status === true) {
                localStorage.setItem("token", token);
                localStorage.setItem("role", role);
                toast.success(res?.message);
                navigate(`/create-new-password?email=${queryEmail}`)
            }

        } catch (error) {
            toast.error(error.data?.message)
        }
    };


    const handleResentOtp = async () => {
        const formData = new FormData();
        formData.append("email", queryEmail);

        try {
            const res = await forgetPasswordApi(formData).unwrap();
            console.log(res)


            if (res?.status === true) {
                toast.success(res?.message);
            }
        } catch (error) {
           toast.error('The email field is required.');
        }
    }


    useEffect(() => {
        document.title = "Dashboard Otp Code";
    }, [location.pathname]);


    return (
        <>
            <Helmet>
                <title>Dashboard Otp Code</title>
            </Helmet>
            <AuthWrapper>
                <div className="text-center mb-12 font-degular">
                    <div className="flex py-8 justify-center ">
                        <h3 className="font-semibold text-2xl text-[#333333]">
                            Verification code
                        </h3>
                    </div>
                    <p className="text-[16px] font-normal mb-6 text-[#5C5C5C] ">
                        We sent a reset link to contact@dscode...com <br />
                        enter 5 digit code that is mentioned in the email
                    </p>
                </div>

                {/* Assuming `Input.OTP` is a custom component */}
                <Input.OTP
                    size="large"
                    className="otp-input"
                    style={{ width: "100%", height: "50px" }}
                    length={6}
                    formatter={(str) => str.toUpperCase()}
                    onChange={onChange}
                />

                <div className="flex justify-center pt-11">
                    <Button
                        className="bg-primary h-12 text-sm text-white font-bold  "
                        htmlType="submit"
                        onClick={handleVerify}
                    >
                        Verify Code
                    </Button>
                </div>

                <p className="text-center mt-10 text-sm font-normal mb-6 text-[#5C5C5C]">
                    I have not received the email.
                    <Button onClick={() => handleResentOtp()} className="pl-1 text-primary " type="link">
                        Resend
                    </Button>
                </p>
            </AuthWrapper>
        </>
    )
}

export default OTPCode