declare namespace API {
  type AuthControllerRefreshParams = {
    refreshToken: string;
  };

  type ChatroomControllerDeleteParams = {
    id: string;
    quitUserId: string;
  };

  type ChatroomControllerJoinParams = {
    id: string;
    joinUserId: string;
  };

  type ChatroomControllerQuitParams = {
    id: string;
    quitUserId: string;
  };

  type CreateChatroomDto = {};

  type CreateDemandDto = {};

  type CreatePostDto = {};

  type CreateRoleDto = {
    /** 角色名称 */
    name: string;
  };

  type CreateUserDto = {};

  type DemandControllerDeleteDemandParams = {
    id: string;
  };

  type DemandControllerGetDemandParams = {
    id: string;
  };

  type GetCaptchaDto = {
    /** 手机号 */
    phoneNumber: string;
  };

  type LogInDto = {
    /** 手机号 */
    phoneNumber: string;
  };

  type LogOutDto = {
    /** 手机号 */
    phoneNumber: string;
  };

  type Object = {};

  type PostControllerDeletePostParams = {
    id: string;
  };

  type PostControllerGetPostByIdParams = {
    id: string;
  };

  type RefreshDto = {
    /** 刷新 token */
    refreshToken: string;
  };

  type RegisterDto = {
    /** 手机号 */
    phoneNumber: string;
  };

  type RoleControllerDeleteRoleParams = {
    id: string;
  };

  type RoleControllerGetRoleByIdParams = {
    id: string;
  };

  type RoleControllerGetRolesParams = {
    /** 跳过记录数 */
    skip?: number;
    /** 获取记录数 */
    take?: number;
    /** 游标 */
    cursor?: string;
    /** 查询条件 */
    where?: Object;
    /** 排序条件 */
    orderBy?: Object;
  };

  type RoleControllerUpdateRoleParams = {
    id: string;
  };

  type UpdateDemandDto = {};

  type UpdateRoleDto = {
    /** 角色名称 */
    name?: string;
  };

  type UpdateUserDto = {};

  type UserControllerDeleteUserParams = {
    id: string;
  };

  type UserControllerGetUserByIdParams = {
    id: string;
  };

  type UserControllerUpdateUserParams = {
    id: string;
  };
}
