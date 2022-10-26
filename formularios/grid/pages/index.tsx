import React from 'react';
import 'antd/dist/antd.css';
// import './index.css';
import { Col, Row, Form, Input } from 'antd';

const FormItem = Form.Item;

const App: React.FC = () => (

  <div>
    <Form>
      <Row gutter={[24, 16]} >
        <Col span={20} xs={24} sm={12} md={6} lg={6} xl={6}>
          <Form.Item>
            <Input placeholder='First Name' />
          </ Form.Item>
        </Col>
        <Col span={20} xs={24} sm={12} md={6} lg={6} xl={6}>
          <Form.Item>
            <Input placeholder='Last Name' />
          </ Form.Item>
        </Col>
        <Col span={20} xs={24} sm={24} md={12} lg={12} xl={12}>
          <Form.Item>
            <Input placeholder='Email' />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[24, 16]} >
        <Col span={20} xs={24} sm={12} md={6} lg={6} xl={6}>
          <Form.Item>
            <Input placeholder='Country' />
          </ Form.Item>
        </Col>
        <Col span={20} xs={24} sm={12} md={6} lg={6} xl={6}>
          <Form.Item>
            <Input placeholder='Phone' />
          </ Form.Item>
        </Col>
        <Col span={20} xs={24} sm={24} md={12} lg={12} xl={12}>
          <Form.Item>
            <Input placeholder='Organization' />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  </div >
);

export default App;