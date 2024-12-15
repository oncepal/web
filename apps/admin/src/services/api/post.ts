// @ts-ignore
/* eslint-disable */
import request from 'utils/request';

/** 此处后端没有提供注释 POST /post */
export async function post(body: API.CreatePostDto, options?: { [key: string]: any }) {
  return request<any>('/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /post/${param0} */
export async function getPostById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPostByIdParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/post/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /post/${param0} */
export async function deletePost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deletePostParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/post/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PATCH /post/${param0} */
export async function updatePost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updatePostParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/post/${param0}`, {
    method: 'PATCH',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /posts */
export async function posts(options?: { [key: string]: any }) {
  return request<any>('/posts', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /posts */
export async function deletePosts(options?: { [key: string]: any }) {
  return request<any>('/posts', {
    method: 'DELETE',
    ...(options || {}),
  });
}
