import { Button, Form, Input } from 'antd';
import { InputFloatLabel } from '../InputFloatLabel/index'

import "antd/dist/antd.css";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 5 },
};

const validateMessages = {
  required: '${label} é obrigatório!.',
  types: {
    email: '${label} deve ser válido.',
  }

}

export const Demo: React.FC = () => {
  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <>
    <InputFloatLabel placeholder="First Name*" />

    
    <Form {...layout} name="nest-messages" onFinish={onFinish}
    validateMessages={validateMessages}>

      <Form.Item name={'FirstName'} label="Primeiro nome" rules={[{  required:true }]}>
        <Input />      
      </Form.Item>
      <Form.Item name={'LastName'} label="Último nome" rules={[{  required: true }]}>
          <Input />
      </Form.Item>
      <Form.Item name={'email'} label="Email" rules={[{ required: true, type: 'email' }]}>
        <Input />  
      </Form.Item>
      <Form.Item name={'introduction'} label="Descrição">
        <Input.TextArea />
      </Form.Item>
      
      <Button type="primary" htmlType="submit">
          Solicitar Demo
        </Button>
    </Form>
    </>
    
  )
}