
import { RouteProps }  from 'react-router-dom';

import SQLQueryLyt from '../layouts/SQLQueryLyt';
import ExcelImportLyt from '../layouts/ExcelImportLyt';
import CropPictureLyt from '../layouts/CropPictureLyt';

export function getMainRoutes(pUrl: string): IRouteProps[] {
    const routes: IRouteProps[] = [
        {
            path: `${pUrl}/sql`,
            name: 'SQL查询',
            title: 'SQL查询',
            component: SQLQueryLyt
        },
        {
            path: `${pUrl}/excel`,
            name: 'Excel导入',
            title: 'Excel导入',
            component: ExcelImportLyt
        },
        {
            path: `${pUrl}/crop`,
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
}
