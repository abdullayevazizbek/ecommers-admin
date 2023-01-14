import React from 'react'
import { Button, Form, Input } from 'antd';
import { usePostRequest } from '../hooks/request';
import { loginUrl } from '../helpers/urls';
const LoginPage = () => {
    const loginPostRequest = usePostRequest({url:loginUrl})
    const hendelonFinish = (e) => {
        console.log(e);
        const reponse = loginPostRequest.request({e})
    }


    return (
        <Form className='login'
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
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
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginPage