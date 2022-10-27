import { Col, Form, Row } from 'antd';
import { InputFloatLabel } from './InputFloatLabel';

import 'antd/dist/antd.css'
import styles from './Demo.module.css';

export const Demo = () => {
  const onFinish = (values: any) => {
    console.log(values);
  }

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h1>Solicite uma Demo</h1>
        <h3>Nós te responderemos em até 12h!</h3>
      </header>

      <Form name='nest-messages' onFinish={onFinish}>
        <Row>
          <Col>
            <Form.Item name={'firstName'}>
              <InputFloatLabel 
                placeholder='Nome*'
              >
              </InputFloatLabel>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </section>
  )
}