import { InputFloatLabel } from '../InputFloatLabel/index';
import React, { useState } from "react";
import { Button, Form, Input} from 'antd';


const validateMessages = {
  required: 'Esse ítem é obrigatório',
  types: {
    email: 'Digite um e-mail válido!'
  }
}

export const Demo = () => {
  const onFinish = (values: any) => {
    console.log(values);
  };
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [email, setEmail] = useState<string>();

  return (
    <>
    <Form name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item name={'firstName'} rules={[{ required: true }]}>
        <InputFloatLabel      
          placeholder='Primeiro nome'
          value={firstName}  
          onChange={(e) => setFirstName(e.target.value)}   
        >
        </InputFloatLabel>  
      </Form.Item>

      <Form.Item name={'lastName'} rules={[{ required: true }]}>
        <InputFloatLabel
          placeholder="Último nome"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        >
        </InputFloatLabel>
      </Form.Item>
        
      <Form.Item name={'email'} rules={[{ required: true, type: 'email' }]}>
        <InputFloatLabel      
          placeholder='E-mail'
          value={email}  
          onChange={(e) => setEmail(e.target.value)}   
        >
        </InputFloatLabel>  
      </Form.Item>   

      <Form.Item name={'description'} label="Descrição">
        <Input.TextArea />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Solicitar Demo
        </Button>
      </Form.Item>
    </Form> 
    </>    
  )
}