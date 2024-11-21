// @ts-ignore
/* eslint-disable */
import request from 'utils/request';

/** 此处后端没有提供注释 GET /role */
export async function roleControllerGetRoles(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.RoleControllerGetRolesParams,
  options?: { [key: string]: any },
) {
  return request<any>('/role', {
    method: 'GET',
    params: {
      ...params,
      where: undefined,
      ...params['where'],
      orderBy: undefined,
      ...params['orderBy'],
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /role */
export async function roleControllerCreateRole(body: API.CreateRoleDto, options?: { [key: string]: any }) {
  return request<any>('/role', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /role */
export async function roleControllerDeleteRoles(options?: { [key: string]: any }) {
  return request<any>('/role', {
    method: 'DELETE',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /role/${param0} */
export async function roleControllerGetRoleById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.RoleControllerGetRoleByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/role/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /role/${param0} */
export async function roleControllerDeleteRole(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.RoleControllerDeleteRoleParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/role/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PATCH /role/${param0} */
export async function roleControllerUpdateRole(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.RoleControllerUpdateRoleParams,
  body: API.UpdateRoleDto,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/role/${param0}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}
