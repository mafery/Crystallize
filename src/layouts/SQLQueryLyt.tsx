import React, { useEffect, useState } from 'react';
import * as _ from 'lodash';

import CodeMirror from '@uiw/react-codemirror';
import { PostgreSQL, sql } from '@codemirror/lang-sql'

import { Table, TableColumnType, TreeDataNode, Layout, Input, Row, Col, Button, Drawer, Tree, Spin, message } from 'antd';
const { Content } = Layout;
const { TextArea, Search } = Input;

import { getMetedataSQLQueryApi, getPGTableListApi } from '../services/api';
import '../styles/sqlquery.scss';

function SQLQueryLyt(props: any) {
    let [ sqlValue, setSqlValue ] = useState('');

    let [ tableData, setTableData ] = useState<any>([]);
    let [ tableColumns, setTableColumns ] = useState<TableColumnType<any>[]>([]);
    let [ tableLoading, setTableLoading ] = useState(false);
    const handleSearch = () => {
        if(!sqlValue) {
            return ;
        }
        setTableLoading(true);
        getMetedataSQLQueryApi(sqlValue).then((respData) => {
            if(_.isArray(respData) && respData.length > 0) {
                var obj = respData[0];
                let columns: TableColumnType<any>[] = [];
                for(let key in obj) {
                    columns.push({
                        title: key,
                        dataIndex: key
                    })
                }
                setTableColumns(columns);
                setTableData(respData);
                setTableLoading(false);
            }
        })
    }
    
    let [ openStatus, setOpenStatus ] = useState(false);
    let [ treeData, setTreeData ] = useState<TreeDataNode[]>([]);
    let [ selectTreeNode, setSelectTreeNode ] = useState('');
    let [ isLoading, setIsLoading ] = useState(false);
    let [ hasData, setHasData ] = useState(false);
    const handleOpenDrawer = () => {
        setOpenStatus(true);
        if(!hasData) {
            setIsLoading(true);
            getPGTableListApi().then((respData) => {
                if(_.isArray(respData) && respData.length > 0) {
                    let trees: TreeDataNode[] = [];
                    respData.map((obj, index) => {
                        trees.push({
                            title: obj.tablename,
                            key: obj.tablename,
                        })
                    });
                    setTreeData(trees);
                    setIsLoading(false);
                    setHasData(true)
                }
            })
        }
    }
    const handleCloseDrawer = () => {
        setOpenStatus(false);
    }
    const handleClickTreeNode = (selectedKeys: React.Key[], info: any) => {
        setSelectTreeNode(info.node.title);
    }
    const handleDrawerOk = () => {
        setSqlValue(` select * from ${selectTreeNode} `);
        handleCloseDrawer();
    }

    return (
        <Content>
            <div className="self-card">
                <div className="self-card-title" >
                    <span className="left" >SQL 语句</span>
                    <span className="right" >
                        <Button type="link" key="excute" style={{ padding: "none" }} onClick={ handleSearch } >执行</Button>
                        <Button type="link" key="select" style={{ marginLeft: 10 }} onClick={handleOpenDrawer} >选择</Button>
                    </span>
                </div>
                <CodeMirror
                    value={ sqlValue }
                    height="200px"
                    theme="light"
                    style={{ border: "1px solid #f0f0f0" }}
                    extensions={[sql({dialect: PostgreSQL})]}
                    onChange={(value, viewUpdate) => {
                        setSqlValue(value);
                    }}
                >
                </CodeMirror>
            </div>
            <div className="self-card" style={{ marginTop: 8 }}>
                <div className="self-card-title" >
                    <span className="left" >SQL 执行结果</span>
                    <span className="right" ></span>
                </div>
                <Spin tip="加载中..." spinning={ tableLoading } >
                    <Table 
                        size="middle"
                        bordered={ true }
                        columns={ tableColumns }
                        dataSource={ tableData } 
                        scroll={{ x: 1000, y: 'calc(100vh - 435px)' }} 
                        pagination={ false }
                        rowKey="id"
                    ></Table>

                </Spin>
            </div>
            
            <Drawer 
                title="快速选择需要查询的表" 
                placement="right" 
                width="500" 
                visible={ openStatus } 
                onClose={ handleCloseDrawer } 
            >
                <Search placeholder="请输入需要查询的表" allowClear enterButton ></Search>
                <Spin tip="加载中..." spinning={ isLoading } >
                    <Tree
                        showLine
                        showIcon
                        treeData={ treeData }
                        height={800}
                        style={{ marginTop: 8 }}
                        onSelect={ handleClickTreeNode }
                    >
                    </Tree>
                </Spin>
                <Content style={{ marginTop: 8 }}>
                    <Row>
                        <Col span={12}>{ selectTreeNode ? `已选择：${selectTreeNode} 表` : '未选择表' }</Col>
                        <Col span={12} style={{ textAlign: 'right' }}>
                            <Button key="cancel" onClick={ handleCloseDrawer } >取消</Button>
                            <Button key="submit" type="primary" style={{ marginLeft: 8 }} onClick={ handleDrawerOk } >选择</Button>
                        </Col>
                    </Row>
                </Content>
            </Drawer>
        </Content>
    )
}
export default SQLQueryLyt;

