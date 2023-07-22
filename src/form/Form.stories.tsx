import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Form from './index';
import Input from '../input';
import Button from '../button';
import Checkbox from '../checkbox';
const { Item, Reset } = Form;

export default {
  title: 'Example/Form',
  component: Form,
} as ComponentMeta<typeof Form>;

export const App: React.FC = () => {
  const [input, setInput] = useState('');
  const [input2, setInput2] = useState('');
  const [checked, setChecked] = useState(false);

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(input, input2, checked);
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
        <Input value={input} onChange={(e: any) => setInput(e.target.value)} />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.TextArea value={input2} onChange={(e: any) => setInput2(e.target.value)} />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox
          checked={checked}
          value="checkvalue"
          onChange={(e) => setChecked(e.target.checked)}
        >Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary"
          onClick={handleClick}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export const Basic: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true, username: 'Jack' }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          { required: true, message: 'Please input your username!' },
          { max: 10, message: 'Must be shorter than 10' }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" >
          Submit
        </Button>
        <Reset style={{ marginLeft: 8 }}>Reset</Reset>

        <Reset style={{ marginLeft: 8 }} resetValue={{ password: '123456' }}>fill Value</Reset>
      </Form.Item>
    </Form>
  );
};