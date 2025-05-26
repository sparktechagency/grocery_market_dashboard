import { Button, Form, Input } from 'antd';
import Title from 'antd/es/skeleton/Title';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const OTPCode = () => {

    const navigation = useNavigate();

    const handleSubmit = () => {
        navigation("/")
    }


    const onChange = text => {
        console.log('onChange:', text);
    };
    const onInput = value => {
        console.log('onInput:', value);
    };
    const sharedProps = {
        onChange,
        onInput,
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-lg p-12 bg-white rounded-xl shadow-lg">
                <div className="text-center mb-6">
                    <h4 className="font-semibold text-lowBlack text-2xl mb-1">
                        Forgot password ?
                    </h4>
                    <p className="text-sm text-secondaryText px-4 my-3 ">We sent a reset link to contact@dscode...com
                        enter 5 digit code that is mentioned in the email</p>
                </div>

                <Form
                    layout="vertical"
                    name="basic"
                    initialValues={{ remember: true }}
                    // onFinish={onFinish}
                    // onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <div className='text-center'>
                        <Title level={5}>With Length (6)</Title>
                        <Input.OTP length={6} {...sharedProps} />
                    </div>

                    <Form.Item className='mt-12'>
                        <Button onClick={() => handleSubmit()} type="primary" htmlType="submit" className="w-full text-white bg-primary hover:!bg-[#38bd5e]">
                            Send Code
                        </Button>
                    </Form.Item>
                </Form>

                <p className='font-PoppinsRegular text-sm text-secondaryText text-center'>You have not received the email?  <button className=' text-primary underline'>Resend</button></p>
            </div>
        </div>
    )
}

export default OTPCode