import React from 'react';
import { RouteProps }  from 'react-router-dom';
import { ImportOutlined, FileImageOutlined } from '@ant-design/icons';

import ExcelImportLyt from '../layouts/ExcelImportLyt';
import CropPictureLyt from '../layouts/CropPictureLyt';

export function getMainRoutes(pUrl: string): IRouteProps[] {
    const routes: IRouteProps[] = [
        {
            path: `${pUrl}/tool`,
            name: '工具箱',
            title: '工具箱',
            component: ExcelImportLyt,
            children: [
                {
                    path: `${pUrl}/tool/excel`,
                    name: 'Excel 导入',
                    title: 'Excel 导入',
                    component: ExcelImportLyt,
                    icon: ImportOutlined
                },
                {
                    path: `${pUrl}/crop`,
                    name: '图片裁剪',
                    title: '图片裁剪',
                    component: CropPictureLyt,
                    icon: FileImageOutlined
                }
            ]
        },
        {
            path: `${pUrl}/ `,
            name: '图片裁剪',
            title: '图片裁剪',
            component: CropPictureLyt
        }
    ]
    return routes;
}

export interface IRouteProps extends RouteProps {
    name: string;
    title: string;
    children?: IRouteProps[];
    icon?: React.ReactNode;
}
