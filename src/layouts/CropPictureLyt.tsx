import React, { useEffect, useState } from 'react';

import { Layout } from 'antd';
import Dragger, { DraggerProps } from 'antd/lib/upload/Dragger';
const { Content } = Layout;
import { InboxOutlined } from '@ant-design/icons';

import { uploadUrl } from '../services/toolApi';

function CropPictureLyt(props: any) {
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
            CropPictureLyt
        </Content>
    )
}

export default CropPictureLyt;