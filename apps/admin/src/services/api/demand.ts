// @ts-ignore
/* eslint-disable */
import request from 'utils/request';

/** 此处后端没有提供注释 POST /demand */
export async function createDemand(body: API.CreateDemandDto, options?: { [key: string]: any }) {
  return request<any>('/demand', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PATCH /demand */
export async function updateDemand(body: API.UpdateDemandDto, options?: { [key: string]: any }) {
  return request<any>('/demand', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /demand/${param0} */
export async function getDemand(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getDemandParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/demand/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /demand/${param0} */
export async function deleteDemand(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteDemandParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/demand/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /demands */
export async function demands(options?: { [key: string]: any }) {
  return request<any>('/demands', {
    method: 'GET',
    ...(options || {}),
  });
}
