import { InputFloatLabel } from '../components/InputFloatLabel/InputFloatLabel'
import { Button, Col, Form, Input, Row } from 'antd';
import { useState } from 'react';

import 'antd/dist/antd.css';


export default function Home() {
  const onFinish = (values: string) => {
    console.log(values);
  }

  const [firstName, setFirstName] = useState('');
  return (
    <>
      <Form
        onFinish={onFinish}
      >
        <Row>
          <Col span={12}>
            <Form.Item name="firstName">
              <InputFloatLabel                
                placeholder='Name'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              >
              </InputFloatLabel>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="lastName">
              <Input
                placeholder='Last Name'
              >
              </Input>
            </Form.Item>
          </Col>
        </Row>
        <Row justify='end'>
          <Button 
            type='primary'
            htmlType='submit'
          >
            Enviar
          </Button>
        </Row>
        
        
        
      </Form>
    </>
  )
}
