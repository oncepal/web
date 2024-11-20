// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 POST /demand */
export async function demandControllerCreateDemand(
  body: API.CreateDemandDto,
  options?: { [key: string]: any },
) {
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
export async function demandControllerUpdateDemand(
  body: API.UpdateDemandDto,
  options?: { [key: string]: any },
) {
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
export async function demandControllerGetDemand(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.DemandControllerGetDemandParams,
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
export async function demandControllerDeleteDemand(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.DemandControllerDeleteDemandParams,
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
export async function demandControllerDemands(options?: { [key: string]: any }) {
  return request<any>('/demands', {
    method: 'GET',
    ...(options || {}),
  });
}
