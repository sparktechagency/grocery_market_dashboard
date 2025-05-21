import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';



const ForgetPass = () => {
    const navigation = useNavigate();
    // const onFinish = values => {
    //     console.log('Success:', values);
    // };

    // const onFinishFailed = errorInfo => {
    //     console.log('Failed:', errorInfo);
    // };
    const handleSubmit = () => {
        navigation("/otp")
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-lg p-12 bg-white rounded-xl shadow-lg">
                <div className="text-center mb-6">
                    <h4 className="font-semibold text-gray-800 text-2xl mb-1">
                        Forgot password ?
                    </h4>
                </div>

                <Form
                    layout="vertical"
                    name="basic"
                    initialValues={{ remember: true }}
                    // onFinish={onFinish}
                    // onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Email"
                        name="email"
                    // rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input placeholder='Rich@gmail.com' />
                    </Form.Item>

                    <Form.Item>
                        <Button onClick={() => handleSubmit()} type="primary" htmlType="submit" className="w-full text-white bg-primary hover:!bg-[#38bd5e]">
                            Send Code
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default ForgetPass