import { InputFloatLabel } from '../InputFloatLabel/index';
import React, { useState } from "react";
import { Button, Checkbox, Col, Divider, Form, Input, Row, Select} from 'antd';

import 'antd/dist/antd.css';
import styles from './Demo.module.css';

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
  const [organization, setOrganization] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [jobTitle, setJobTitle] = useState<string>();

  const { Option } = Select;

  return (
    <section className={styles.container}>
      <Form name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>       

          <Row gutter={24}>
            <Col xs={24} sm={12} md={6}>
              <Form.Item name={'firstName'} rules={[{ required: true }]}>
                <InputFloatLabel
                  placeholder='Nome*'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                >
                </InputFloatLabel>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Form.Item name={'lastName'} rules={[{ required: true }]}>
                <InputFloatLabel
                  placeholder="Sobrenome*"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                >
                </InputFloatLabel>
            </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12}>
              <Form.Item name={'email'} rules={[{ required: true, type: 'email' }]}>
                <InputFloatLabel
                  placeholder='E-mail*'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                >
                </InputFloatLabel>
              </Form.Item>
            </Col>
          </Row>
        <Row gutter={24}>
          <Col xs={24} sm={12} md={6}>
            <Form.Item>
              <InputFloatLabel placeholder='+55'></InputFloatLabel>
            </Form.Item>          
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Form.Item>
              <InputFloatLabel placeholder='Phone'></InputFloatLabel>
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12}>
            <Form.Item name={'organization*'} rules={[{ required: true }]}>
              <InputFloatLabel
                placeholder='Empresa*'
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
              >
              </InputFloatLabel>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col xs={24} sm={24} md={12}>
            <Form.Item name={'jobTitle'}>
              <InputFloatLabel
                placeholder='Cargo'
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}            
              >            
              </InputFloatLabel>
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12}>
            <Form.Item name={'team'}>
              <Select
                placeholder="De qual time você faz parte?"
              >
                <Option value="businessIntelligence">Inteligência Empresarial</Option>
                <Option value="dataScience">Ciência de Dados</Option>            
                <Option value="engineering">Engenheiro</Option>            
                <Option value="gis">SIG</Option>            
                <Option value="it">ISTO</Option>            
                <Option value="other">Outro</Option>            
              </Select>
          </Form.Item>
          </Col>
        </Row>

      </Form> 
    </section>    
  )
}