import React, { useEffect, useState } from 'react';

import { Layout } from 'antd';
import Dragger, { DraggerProps } from 'antd/lib/upload/Dragger';
const { Content } = Layout;
import { InboxOutlined } from '@ant-design/icons';

import { uploadUrl } from '../services/toolApi';

function ExcelImportLyt(props: any) {
    const uploadProps: DraggerProps = {
        name: 'file',
        multiple: true,
        action: uploadUrl,
        onChange: (info) => {
            console.log(info)
        },
        onDrop: (e) => {
            console.log(e)
        }
    }
    return (
        <Content>
            <div style={{ width: 800, height: 400 }}>
                <Dragger {...uploadProps}>
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    <p className="ant-upload-hint">
                        Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files
                    </p>
                </Dragger>
            </div>
        </Content>
    )
}

export default ExcelImportLyt;