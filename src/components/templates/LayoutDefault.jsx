import { Layout } from 'antd';
import Sidebar from '../molecules/Sidebar/Sidebar';
const { Header, Content } = Layout;
import styled from 'styled-components'

const ButtonPrimary = styled.button`
font-family: "SF Pro", "Roboto", "Arial", "Helvetica", sans-serif;
font-weight: 500;
background: #00a335;
color: #ffffff;
border: 0;
border-radius: 3px;
padding: 15px 45px;
font-size: 16px;
}
	
:hover {
background: #00863F;
}
	
`

const ButtonSecundary = styled.button`
font-family: "SF Pro", "Roboto", "Arial", "Helvetica", sans-serif;
font-weight: 500;
background: #fff;
color: #3e5055;
border: 1px solid #8b979f;
border-radius: 3px;
padding: 15px 45px;
font-size: 16px;
}
	
:hover {
background: #Ebeeee;
}
	
`

const LayoutDefault = () => {
  return (
    <>
      <Layout >
        <Header style={{
          position: 'fixed', width: '100%', height: '5rem', backgroundColor: '#00A335',
          margin: 0,
          left: '0px',
          top: '0px',
          padding: '1rem',
        }} >
          <img
            className="logo react"
            src="https://backend.intelbras.com/sites/default/files/download/guias/guia-estilo/images/intelbras2.png"
          />
          <ButtonSecundary style={{ float: 'right'}}>Sair</ButtonSecundary>
        </Header>
        <Sidebar />
        </Layout>
    </>
  );
};


export default LayoutDefault;