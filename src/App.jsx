
import React from 'react';
import { Col, Row } from 'antd';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Layout, Space } from 'antd';
import LayoutDefault from './components/templates/LayoutDefault';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components'

const { Header, Footer, Sider, Content } = Layout;

const ColCustom = styled(Col)`
margin-top:2rem;
`
const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <Row>
        <ColCustom offset={4} span={24}>
          <Outlet />
        </ColCustom>
      </Row>
      <LayoutDefault />
    </>
  )
}

export default App

