import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
    const navigation = useNavigate();

    // const onFinish = values => {
    //     console.log('Success:', values);
    // };

    // const onFinishFailed = errorInfo => {
    //     console.log('Failed:', errorInfo);
    // };

    const handleLogin = () => {
        navigation("/otp")
    }


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-lg p-12 bg-white rounded-xl shadow-lg">
                <div className="text-center mb-6">
                    <h4 className="font-semibold text-lowBlack text-2xl mb-1">
                        Log in to your account
                    </h4>
                    <p className="text-sm text-secondaryText">
                        Please enter your email and password to continue
                    </p>
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
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input placeholder='Rich@gmail.com' />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password placeholder='******' />
                    </Form.Item>

                    <div className='flex justify-between items-center my-4  '>
                        <Form.Item name="remember" valuePropName="" noStyle>
                            <Checkbox className="ant-checkbox-checked ant-checkbox-inner">Remember Password</Checkbox>
                        </Form.Item>
                        <Link to={"/forgotPassword"} className='login-form-forgot font-PoppinsMedium text-sm text-primary hover:!text-[#38bd5e]'>
                            Forgot Password?
                        </Link>
                    </div>

                    <Form.Item>
                        <Button onClick={() => handleLogin()} type="primary" htmlType="submit" className="w-full text-white bg-primary hover:!bg-[#38bd5e]">
                            Sign in
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Login;
