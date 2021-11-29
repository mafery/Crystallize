import { RouteProps }  from 'react-router-dom';

import ExcelImportLyt from '../layouts/ExcelImportLyt';
import CropPictureLyt from '../layouts/CropPictureLyt';
import DashboardLyt from '../layouts/DashboardLyt';

export function getMainRoutes(pUrl: string): IRouteProps[] {
    const routes: IRouteProps[] = [
        {
            path: `${pUrl}/dashboard`,
            name: 'Dashboard',
            title: 'Dashboard',
            component: DashboardLyt
        },
        {
            path: `${pUrl}/tool`,
            name: '工具箱',
            title: '工具箱',
            // icon: "ImportOutlined",
            children: [
                {
                    path: `${pUrl}/tool/excel`,
                    name: 'Excel 导入',
                    title: 'Excel 导入',
                    component: ExcelImportLyt,
                    // icon: "ImportOutlined"
                },
                {
                    path: `${pUrl}/tool/crop`,
                    name: '图片裁剪',
                    title: '图片裁剪',
                    component: CropPictureLyt,
                    // icon: "FileImageOutlined"
                }
            ]
        }
    ]
    return routes;
}

export interface IRouteProps extends RouteProps {
    name: string;
    title: string;
    path: string;
    children?: Array<IRouteProps>;
    icon?: any;
}
