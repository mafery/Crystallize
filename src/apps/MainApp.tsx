import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { Layout, Menu, Breadcrumb, Input, Avatar, Row, Col, Dropdown  } from 'antd';
const { Content, Header, Sider, Footer } = Layout;
const { Search } = Input;
const { SubMenu } = Menu;
import { 
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined
} from '@ant-design/icons'

import '../styles/main.scss';
const SYSTEM_WEB_TITLE = '数据查询服务';

function MainApp(props: IProps) {
    // const pathName = useLocation().pathname;
    // const menuList: Array<any> = props.menuList || [];
    document.title = SYSTEM_WEB_TITLE;
    let [ collapsed, setCollapsed ] = useState(false);

    const menu = (
        <Menu >
            <Menu.Item key="1" icon={<UserOutlined />}>
                1st menu item
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
                2nd menu item
            </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined />}>
                3rd menu item
            </Menu.Item>
        </Menu>
      );

    return (
        <Layout>
            <Sider 
                style={{ overflow: 'auto', height: '100vh',  position: 'fixed', left: 0, }} 
                collapsed={collapsed} collapsible 
                onCollapse={() => setCollapsed(!collapsed)} 
            >
                <div className="system-logo"></div>
                <Menu theme="dark" mode="inline" >
                    <Menu.Item key="1" icon={<PieChartOutlined />} > option 1</Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined  />} > option 2</Menu.Item>
                    <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                        <Menu.Item key="3">Tom</Menu.Item>
                        <Menu.Item key="4">Bill</Menu.Item>
                        <Menu.Item key="5">Alex</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                        <Menu.Item key="6">Team 1</Menu.Item>
                        <Menu.Item key="8">Team 2</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9" icon={<FileOutlined />}> Files </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout" style={{marginLeft: 200}} >
                <Header className="bg-white" style={{ padding: 0 }} >
                    <Row>
                        <Col span="12">
                            <Breadcrumb style={{ margin: 22 }}>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>List</Breadcrumb.Item>
                                <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb>
                        </Col>
                        <Col span="12" style={{ display: 'flex', flexDirection: 'row-reverse', }}>
                            <Dropdown overlay={menu}>
                                <Avatar src="https://joeschmoe.io/api/v1/random" 
                                    style={{ marginRight: 20, marginTop: 16, cursor: 'pointer' }} />
                            </Dropdown>
                            
                        </Col>
                    </Row>
                    
                </Header>
                <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                    <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
                        ...
                        <br />
                        long
                        ...
                        <br />
                        content
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
}

interface IProps {
    menuList: Array<any>;
    children?: Array<any>;
}
{/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[ pathName ]} selectedKeys={[ pathName ]} >
{menuList.map(o => (<Menu.Item key={o.path} ><NavLink to={ o.path }>{ o.title }</NavLink></Menu.Item>))}
</Menu> */}

export default MainApp;