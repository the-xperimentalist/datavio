import React, { useState, useEffect, Fragment } from 'react'
import { Button, Checkbox, Form, Input, PageHeader, Descriptions } from 'antd'


function Account (props) {
  const [signUp, setSignUp] = useState(false)

  return (
    <Descriptions
      ghost={false}
      title={signUp ? "SignUp" : "Login"}
    >
      {signUp ? (
        <Form
          name="basic"
          layout="horizontal"
          initialValues={{ remember: true }}
          autocomplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please enter the username"}]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please enter the email"}]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter the password"}]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Repeat Password"
            name="password1"
            rules={[{ required: true, message: "Please repeat the password"}]}
          >
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button type="primary" onClick={() => setSignUp(!signUp)}>
              Login
            </Button>
            <Button type="primary" onClick={() => props.setAnonymousUserLoggedIn()}>
              Skip
            </Button>
          </Form.Item>
        </Form>
      ) : (
      <Form
        name="basic"
        labelCol={{ span: 16 }}
        wrapperCol={{ span: 32 }}
        initialValues={{ remember: true }}
        autocomplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please enter the username"}]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter the password"}]}
        >
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button type="primary" onClick={() => setSignUp(!signUp)}>
            Sign Up
          </Button>
          <Button type="primary" onClick={() => props.setAnonymousUserLoggedIn()}>
            Skip
          </Button>
        </Form.Item>
      </Form>)}

    </Descriptions>)
}

export default Account
