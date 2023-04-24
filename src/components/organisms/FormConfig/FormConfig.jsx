import React from 'react';
import { Row, Col } from 'antd';
import { Button, Form, Input, Select,Slider } from 'antd';
import styled from 'styled-components'

const ButtonPrimary = styled(Button)`
font-family: "SF Pro", "Roboto", "Arial", "Helvetica", sans-serif;
font-weight: 500;
background: #00a335;
color: #ffffff;
border: 0;
border-radius: 3px;
padding: 15px 45px;
font-size: 16px;
height: 3.5rem;
}
	
:hover {
background: #00863F;
}
	
`

const ButtonSecundary = styled(Button)`
font-family: "SF Pro", "Roboto", "Arial", "Helvetica", sans-serif;
font-weight: 500;
background: #fff;
color: #3e5055;
border: 1px solid #8b979f;
border-radius: 3px;
padding: 15px 45px;
font-size: 16px;
height: 3.5rem;
}
	
&:hover {
background: #Ebeeee;
}
	`

const { Option } = Select;

const layout = {
  labelCol: { span: 12 },
  wrapperCol: { span: 12 },
};


const FormConfig = () => {
  const [form] = Form.useForm();
  const onGenderChange = () => {
    switch (value) {
      case 'male':
        form.setFieldsValue({ note: 'Hi, man!' });
        break;
      case 'female':
        form.setFieldsValue({ note: 'Hi, lady!' });
        break;
      case 'other':
        form.setFieldsValue({ note: 'Hi there!' });
        break;
      default:
    }
  };

  const onFinish = () => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };


  return (
    <Form
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      style={{ maxWidth: 600, textAlign: 'initial' }}
    >
      <Form.Item name="hostname" label="Hostname" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <h1 style={{ color: '#3e5055', fontSize: '25px', marginTop: '1rem' }}>Wifi</h1>
      <Form.Item name="operation" label="Modo de Operação" rules={[{ required: true }]}>
        <Select
          placeholder="Select a option and change input text above"
          onChange={onGenderChange}
          allowClear
        >
          <Option value="male">male</Option>
          <Option value="female">female</Option>
          <Option value="other">other</Option>
        </Select>
      </Form.Item>
      <Form.Item name="name" label="Nome da Rede" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="potence" label="Potência de RF" rules={[{ required: true }]}>
      <Slider defaultValue={30} />
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
      >
        {({ getFieldValue }) =>
          getFieldValue('gender') === 'other' ? (
            <Form.Item name="customizeGender" label="Customize Gender" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          ) : null
        }
      </Form.Item>
      <Form.Item >
        <Row style={{justifyContent: 'flex-end'}}>
          <Col span={12}>
        <ButtonPrimary htmlType="submit">
          Aplicar
        </ButtonPrimary>
        </Col>
        <Col span={12}>
        <ButtonSecundary htmlType="button" onClick={onReset}>
          Descartar
        </ButtonSecundary>
        </Col>
        </Row>
      </Form.Item>
    </Form>
  )
}

export default FormConfig

