import { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col, Form, Input, Button, Modal } from 'antd';
import styled from 'styled-components';

const Container = styled.div`
  padding-top: 3rem;
`;

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

const primaryButtonStyle = {
  backgroundColor: '#00A335',
  borderColor: '#00A335',
  margin:'1rem',
  padding:'1rem',
  width:'10rem',
  height:'3rem',
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  borderRadius:'5px',
};

const secondaryButtonStyle = {
  backgroundColor: 'white',
  borderColor: '#00A335',
  margin:'1rem',
  padding:'1rem',
  width:'10rem',
  height:'3rem',
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  borderRadius:'5px',
};

const DeviceDetails = () => {
  const [deviceDetails, setDeviceDetails] = useState({});
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://private-anon-f2a3c880e3-izeusv3.apiary-mock.com/cgi-bin/api/v3/system/device');
        setDeviceDetails(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const onFinish = (values) => {
    setIsModalVisible(true);
  };

  const onModalOk = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const onModalCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Container>
      <h1>Detalhes do Dispositivo</h1>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={12}>
          <Form form={form} {...layout} onFinish={onFinish}>
            <Form.Item label="Modelo" name="model">
              <Input defaultValue={deviceDetails.model || 'N/A'} />
            </Form.Item>
            <Form.Item label="Hostname" name="alias">
              <Input defaultValue={deviceDetails.alias || 'N/A'} />
            </Form.Item>
            <Form.Item label="Versão de Firmware" name="version">
              <Input defaultValue={deviceDetails.version || 'N/A'} />
            </Form.Item>
            <Form.Item label="Versão de Software" name="api_version">
              <Input defaultValue={deviceDetails.api_version || 'N/A'} />
            </Form.Item>
            <Form.Item label="Uptime" name="uptime">
              <Input defaultValue={deviceDetails.uptime || 'N/A'} />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 6 }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Button type="primary" htmlType="submit" style={primaryButtonStyle}>Salvar</Button>
              <Button type="default" onClick={onModalCancel} style={secondaryButtonStyle}>Cancelar</Button>
              </div>
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <Modal
        title="Confirmação"
        visible={isModalVisible}
        onOk={onModalOk}
        onCancel={onModalCancel}
      >
        <p>Deseja realmente salvar as alterações?</p>
      </Modal>
    </Container>
  );
};

export default DeviceDetails;
