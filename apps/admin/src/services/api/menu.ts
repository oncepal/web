// @ts-ignore
/* eslint-disable */
import request from 'utils/request';

/** 获取所有菜单 GET /menus */
export async function findAll(options?: { [key: string]: any }) {
  return request<any>('/menus', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 创建菜单 POST /menus */
export async function create(body: API.CreateMenuDto, options?: { [key: string]: any }) {
  return request<any>('/menus', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据ID获取菜单 GET /menus/${param0} */
export async function findOne(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findOneParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/menus/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 根据ID更新菜单 PUT /menus/${param0} */
export async function update(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateParams,
  body: API.UpdateMenuDto,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/menus/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 根据ID删除菜单 DELETE /menus/${param0} */
export async function deleteUsingDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUsingDELETEParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/menus/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}
