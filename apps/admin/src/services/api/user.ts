// @ts-ignore
/* eslint-disable */
import request from 'utils/request';

/** 创建用户 POST /user */
export async function createUser(body: API.CreateUserDto, options?: { [key: string]: any }) {
  return request<API.UserDto>('/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询用户详情 GET /user/${param0} */
export async function getUserById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.UserDto>(`/user/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除用户 DELETE /user/${param0} */
export async function deleteUserById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUserByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/user/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 修改用户信息 PATCH /user/${param0} */
export async function updateUser(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateUserParams,
  body: API.UpdateUserDto,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.UserDto>(`/user/${param0}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 查询用户列表 GET /users */
export async function getUsers(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUsersParams,
  options?: { [key: string]: any },
) {
  return request<API.UserDto[]>('/users', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 清空用户 DELETE /users */
export async function deleteUsers(options?: { [key: string]: any }) {
  return request<any>('/users', {
    method: 'DELETE',
    ...(options || {}),
  });
}
