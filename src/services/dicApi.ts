
import { axiosGet, axiosPost } from './axiosInstance';

/**
 * 获取 业务域 字典
 * @returns string[]
 */
export const getBuzDomainDicApi = () => {
    return axiosGet('/metadata/ad/getDemandDomain');
}
/**
 * 获取 来源系统 字典
 * @returns string[]
 */
export const getSourceSysDicApi = () => {
    return axiosGet('/metadata/ad/getDemandSourceSys');
}

export const getMetadataDicApi = () => {
    return axiosGet('/metadata/ga/getMetadata')
}
export interface IMetadata {
    interiorTag: string;
    category: string;
    nameCn: string;
    nameEn: string;
    spellCn: string;
    tag: string;
    context: string;
    version: string;
    synonymName: string;
    explain: string;
    typeWord: string;
    featureWord: string;
    appConstraint: string;
    classifyScheme: string;
    classifySchemeId: string;
    relation: string;
    expression: string;
    dataType: string;
    dataFormat: string;
    measureUnit: string;
    state: string;
    submitOrg: string;
    registerOrg: string;
    drafter: string;
    approvalDate: Date;
    mergeOrg: string;
    mergeOrgMetadataCode: string;
    remark: string;
    doaminType: string;
    domainDesc: string;
    riverInteriorTag: string;
    modiryRecord: string;
}