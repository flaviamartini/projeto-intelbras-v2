import { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col } from 'antd';
import styled from 'styled-components';

const Container = styled.div`
  padding-top: 3rem;
  padding-left: 2rem;
  text-align: left;
  line-height: 1.5;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  margin-bottom: 1rem;
`;

const Label = styled.strong`
  font-weight: bold;
  margin-right: 0.5rem;
`;

const Value = styled.span`
  font-weight: normal;
`;

const DeviceDetails = () => {
  const [deviceDetails, setDeviceDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://private-anon-f2a3c880e3-izeusv3.apiary-mock.com/cgi-bin/api/v3/system/device');
        setDeviceDetails(response.data.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Row justify="start">
        <Col span={12}>
          <Title>Detalhes do Dispositivo</Title>
          <List>
            <ListItem>
              <Label>Modelo:</Label>
              <Value>{deviceDetails.model || 'N/A'}</Value>
            </ListItem>
            <ListItem>
              <Label>Hostname:</Label>
              <Value>{deviceDetails.alias || 'N/A'}</Value>
            </ListItem>
            <ListItem>
              <Label>Versão de Firmware:</Label>
              <Value>{deviceDetails.version || 'N/A'}</Value>
            </ListItem>
            <ListItem>
              <Label>Versão de Software:</Label>
              <Value>{deviceDetails.api_version || 'N/A'}</Value>
            </ListItem>
            <ListItem>
              <Label>Uptime:</Label>
              <Value>{deviceDetails.uptime || 'N/A'}</Value>
            </ListItem>
          </List>
        </Col>
      </Row>
    </Container>
  );
};

export default DeviceDetails;
