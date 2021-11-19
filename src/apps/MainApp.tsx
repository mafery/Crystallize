import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { Layout, Menu } from 'antd';
const { Content, Header } = Layout;

import '../styles/main.scss';
const SYSTEM_WEB_TITLE = '数据查询服务';

function MainApp(props: IProps) {
    const pathName = useLocation().pathname;
    const menuList: Array<any> = props.menuList || [];
    document.title = SYSTEM_WEB_TITLE;

    return (
        <Layout>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <div className="system-logo" style={{ fontSize: 24, color: '#fff', width: 200, backgroundColor: '#001529', lineHeight: '31px' }} >{SYSTEM_WEB_TITLE}</div>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[ pathName ]} selectedKeys={[ pathName ]} >
                    {menuList.map(o => (<Menu.Item key={o.path} ><NavLink to={ o.path }>{ o.title }</NavLink></Menu.Item>))}
                </Menu>
            </Header>
            <Content className="site-layout" >
                <Layout className="site-content bg-white" >
                    { props.children }
                </Layout>
            </Content>
        </Layout>
    );
}

interface IProps {
    menuList: Array<any>;
    children?: Array<any>;
}

export default MainApp;