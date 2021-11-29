import React, { ReactNode, useState } from 'react';
import { NavLink, useLocation, Route, Switch } from 'react-router-dom';

import { Layout, Menu, Breadcrumb, Input, Avatar, Row, Col, Dropdown } from 'antd';
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
import * as Icon from '@ant-design/icons';

// // 导入 main 页面的路由
import { IRouteProps, getMainRoutes } from '../routes/mainRoutes';
const mainRoutes = getMainRoutes("main");

import '../styles/main.scss';
import { curry } from 'lodash';
const SYSTEM_WEB_TITLE = '前端学习记录';

function MainApp(props: IProps) {
    const pathName = useLocation().pathname;
    const { pMenu } = props;
    const mainRoutes = getMainRoutes(pMenu);
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

    const getMenuNode = (mList: Array<IRouteProps>) => {
        return mList.map(item => {
            const { path, name, icon, children, title } = item;
            if(children) {
                if(children.length > 0) {
                    return (<SubMenu key={path} icon={icon} title={name}>{getMenuNode(children)}</SubMenu>);
                }
            } else{
                return (<Menu.Item key={path} icon={icon} ><NavLink to={path} >{title}</NavLink></Menu.Item>);
            }
        });
    }

    const getRouteNodes = (rList: Array<IRouteProps>) => {
        return rList.map(item => {
            const { path, children, component } = item;
            if(children) {
                if(children.length > 0) {
                    return <Switch>{getRouteNodes(children)}</Switch>;
                }
            } else{
                return (<Route key={path} path={path} component={component} />);
            }
        });
    }

    return (
        <Layout>
            <Sider 
                style={{ overflow: 'auto', height: '100vh' }} 
                collapsed={collapsed} collapsible 
                onCollapse={() => setCollapsed(!collapsed)} 
            >
                <div className="system-logo"></div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={[ pathName ]} selectedKeys={[ pathName ]} >
                    { getMenuNode(mainRoutes) }
                </Menu>
            </Sider>
            <Layout className="site-layout" style={{ height: '100vh' }}  >
                <Header className="bg-white" style={{ padding: 0 }} >
                    <Row>
                        <Col span="12">
                            <Breadcrumb style={{ margin: 22 }}>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>List</Breadcrumb.Item>
                                <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb>
                        </Col>
                        <Col span="12" style={{ display: 'flex', flexDirection: 'row-reverse', alignSelf: 'center' }}>
                            <Dropdown overlay={menu}>
                                <Avatar size={36} icon={<UserOutlined />}
                                    style={{ cursor: 'pointer', marginRight: 20 }} />
                            </Dropdown>
                        </Col>
                    </Row>
                </Header>
                <Content style={{ margin: '24px 16px 0', overflow: 'auto' }}>
                    <div className="bg-white" style={{ padding: '12px 24px' }}>
                        <Switch>
                            { getRouteNodes(mainRoutes) }
                        </Switch>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
}

interface IProps {
    // menuList: Array<IRouteProps>;
    children?: Array<any>;
    pMenu: string;
}
{/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[ pathName ]} selectedKeys={[ pathName ]} >
{menuList.map(o => (<Menu.Item key={o.path} ><NavLink to={ o.path }>{ o.title }</NavLink></Menu.Item>))}
</Menu> */}

export default MainApp;