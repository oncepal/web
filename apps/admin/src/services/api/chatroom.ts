// @ts-ignore
/* eslint-disable */
import request from 'utils/request';

/** 此处后端没有提供注释 GET /chatroom */
export async function chatrooms(options?: { [key: string]: any }) {
  return request<any>('/chatroom', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /chatroom/${param0} */
export async function chatroom(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.chatroomParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/chatroom/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /chatroom/${param0} */
export async function deleteUsingDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUsingDELETEParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/chatroom/${param0}`, {
    method: 'DELETE',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PATCH /chatroom/join/${param0} */
export async function join(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.joinParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/chatroom/join/${param0}`, {
    method: 'PATCH',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PATCH /chatroom/quit/${param0} */
export async function quit(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.quitParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/chatroom/quit/${param0}`, {
    method: 'PATCH',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /chatroom/single */
export async function single(body: API.CreateChatroomDto, options?: { [key: string]: any }) {
  return request<any>('/chatroom/single', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
