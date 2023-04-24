import { Layout, Menu } from 'antd';
import {Link} from 'react-router-dom';
import styled from 'styled-components'

const TextLink = styled.p`
padding: 1rem 0 1rem 1rem;
font-size: 1rem;
font-weight: bold;
color: rgb(62, 80, 85);`

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;



const Sidebar = () => {
    return (
        <Sider
            style={{
                width: '15%',
                backgroundColor: '#ebeeee',
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
                top: 80,
                bottom: 0,
            }}
        >
         <Menu mode="inline" style={{backgroundColor: '#ebeeee',paddingTop:'1rem'}}> 
         <Link to={"/home"}><TextLink>Página Inicial</TextLink></Link>  
         <Link to={"/config"}><TextLink>Configurações</TextLink></Link>
         </Menu>
        </Sider>
    );
};


export default Sidebar