
import { axiosGet, axiosPost } from './axiosInstance';

/**
 * 通过 输入 SQL 语句 查询数据
 * @param params sql 语句
 * @returns 多种对象 
 */
export const getMetedataSQLQueryApi = (params: any) => {
    return axiosPost('/metadata/ods/select', params);
}

export const getPGTableListApi = () => {
    return axiosPost('/metadata/ods/select', 'select tablename from pg_tables where tablename Not like \'pg%\' and tablename not like \'sql%\' ORDER BY tablename;');
}