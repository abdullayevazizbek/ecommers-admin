import React from 'react'
import { Button, Form, Input,message } from 'antd';
import { usePostRequest } from '../hooks/request';
import { loginUrl } from '../helpers/urls';
import { useNavigate } from 'react-router-dom';
// import message from 'antd/es/message/useMessage';
const LoginPage = () => {
    const {request, loading} = usePostRequest({ url: loginUrl })
    const navigate = useNavigate
    const hendelonFinish = async (e) => {
        console.log(e);
        const { response, success } = await request({ data:e })
        console.log(response);
        if (success) {
            if (response.isOk) {
                console.log(response);
                localStorage.setItem('accessToken',response.accessToken)
                localStorage.setItem('refreshToken',response.refreshToken)
                navigate('/')
            } else {
                message.warning(response.message)
            }
        }
    }

    return (
        <Form className='login'
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            autoComplete="off"
            onFinish={hendelonFinish}
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit" loading={loading}>
                    Submit
                </Button>
                
            </Form.Item>
        </Form>
    );
};

export default LoginPage