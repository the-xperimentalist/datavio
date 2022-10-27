
import React from 'react';
import { Button, Checkbox, Form, Input, Tag } from 'antd';
import { signUpApi } from '../utils/api'


const Signup = (props) => {
  const onFinish = (values) => {
    console.log('Success:', values);
    signUpApi(values.username, values.email, values.password, values.password1, values.name)
      .then(({data}) => {
        console.log(data.token)
        chrome.storage.local.set({
          "datavioToken": data.token,
          "isAnonymous": false }, function () {
          console.log("Token set in signup")
          props.setUserLoggedIn()
        })
        console.log(data)
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
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please input your name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
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
      <Form.Item
        label="Password1"
        name="password1"
        rules={[{
          required: true,
          message: 'Please repeat your password!'
        },({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Tag color="lime" onClick={props.toggleAccountForm} style={{ cursor: 'pointer' }}>Login instead</Tag>
        <Tag color="volcano" onClick={props.setAnonymousUserLoggedIn} style={{ cursor: 'pointer' }}>Skip</Tag>
      </Form.Item>
    </Form>
  );
};

export default Signup;