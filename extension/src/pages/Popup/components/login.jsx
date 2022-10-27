
import React from 'react';
import { Button, Checkbox, Form, Input, Tag } from 'antd';
import { loginApi } from '../utils/api'


const Login = (props) => {
  const onFinish = (values) => {
    console.log('Success:', values);
    loginApi(values.username, values.password)
      .then(({data}) => {
        console.log(data.token)
        chrome.storage.local.set({
          "datavioToken": data.token,
          "isAnonymous": false }, function () {
          console.log("Token set in login")
          props.setUserLoggedIn()
        })
        console.log("data")
      })
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
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
        <Tag color="lime" onClick={props.toggleAccountForm} style={{ cursor: 'pointer' }}>Sign up instead</Tag>
        <Tag color="volcano" onClick={props.setAnonymousUserLoggedIn} style={{ cursor: 'pointer' }}>Skip</Tag>
      </Form.Item>
    </Form>
  );
};

export default Login;