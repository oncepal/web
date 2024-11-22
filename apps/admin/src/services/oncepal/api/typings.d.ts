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

  type CreateRoleDto = {};

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

  type RolesControllerFindOneParams = {
    /** 角色ID */
    id: string;
  };

  type RolesControllerRemoveParams = {
    /** 角色ID */
    id: string;
  };

  type RolesControllerUpdateParams = {
    /** 角色ID */
    id: string;
  };

  type UpdateDemandDto = {};

  type UpdateRoleDto = {};

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
