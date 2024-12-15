declare namespace API {
  type AchievementBenefitDto = {
    name: string;
    description: string;
  };

  type AchievementDto = {
    id: string;
    name: string;
    type: string;
    description: string;
    benefits: AchievementBenefitDto[];
    createdAt: string;
    updatedAt: string;
  };

  type ChatroomDto = {
    id: string;
    creatorId: string;
    description: string;
    type: 'SINGLE' | 'GROUP' | 'MULTIPLE';
    name: string;
    history: string[];
  };

  type CommentDto = {
    id: string;
    title: string;
    content: string;
  };

  type ConnectAchievementDto = {
    id?: string;
    type?: string;
  };

  type ConnectChatroomDto = {
    id: string;
  };

  type ConnectCommentDto = {
    id?: string;
    commentatorId?: string;
    postId?: string;
  };

  type ConnectDemandDto = {
    id: string;
  };

  type ConnectFollowDto = {
    id?: string;
    followingId?: string;
    followerId?: string;
  };

  type ConnectLikeDto = {
    id: string;
  };

  type ConnectMenuDto = {
    id?: string;
    name?: string;
  };

  type ConnectOrderDto = {
    id: string;
  };

  type ConnectPostDto = {
    id?: string;
    authorId?: string;
  };

  type ConnectProductDto = {
    id: string;
  };

  type ConnectRoleDto = {
    id?: string;
    name?: string;
  };

  type ConnectTopicDto = {
    id?: string;
    title?: string;
  };

  type ConnectUserDto = {
    id?: string;
    phoneNumber?: string;
  };

  type CreateAchievementBenefitDto = {
    name: string;
    description?: string;
  };

  type CreateAchievementDto = {
    name: string;
    type: string;
    description?: string;
    benefits: CreateAchievementBenefitDto[];
  };

  type CreateChatroomDto = {
    creatorId?: string;
    description?: string;
    type: 'SINGLE' | 'GROUP' | 'MULTIPLE';
    name?: string;
    history: string[];
  };

  type CreateCommentDto = {
    title: string;
    content: string;
  };

  type CreateDemandDto = {
    description?: string;
    images: string[];
    keywords?: string;
    location?: string;
    limits?: CreatePalLimitsDto;
    payment?: CreateDemandPaymentDto;
    time?: string;
  };

  type CreateDemandPaymentDto = {
    way: 'AA' | 'NONE' | 'FIXED';
    number?: number;
  };

  type CreateFollowDto = {};

  type CreateLikeDto = {};

  type CreateMenuDto = {
    name: string;
    url: string;
  };

  type CreateOrderDto = {
    amount: number;
    paymentstatus: 'EXPIRED' | 'COMPLETE' | 'UNCLEARED';
    orderStatus: 'CREATED' | 'CONFIRMED' | 'PENDING' | 'COMPLETE' | 'CANCELED' | 'REFUNDED';
  };

  type CreatePalLimitsDto = {
    minAge?: number;
    number?: number;
    sex?: number;
  };

  type CreatePostDto = {
    content: string;
    topicsId: string;
  };

  type CreateProductDto = {};

  type CreateProfileDto = {
    bio?: string;
    gender?: 'Male' | 'Female';
    weight?: number;
    age?: number;
    avatar?: string;
    birthday?: string;
    height?: number;
    introduction?: string;
  };

  type CreateRoleDto = {
    name: string;
  };

  type CreateTopicDto = {
    title: string;
    heat: number;
  };

  type CreateUserDto = {
    phoneNumber: string;
    profile?: CreateProfileDto;
    achievementIds: string[];
    chatroomIds: string[];
  };

  type deleteDemandParams = {
    id: string;
  };

  type deletePostParams = {
    id: string;
  };

  type deleteUserByIdParams = {
    id: string;
  };

  type deleteUsingDELETEParams = {
    id: string;
    quitUserId: string;
  };

  type deleteUsingDELETEParams = {
    id: string;
  };

  type DemandDto = {
    id: string;
    description: string;
    images: string[];
    keywords: string;
    location: string;
    limits: PalLimitsDto;
    payment: DemandPaymentDto;
    time: string;
  };

  type DemandPaymentDto = {
    way: 'AA' | 'NONE' | 'FIXED';
    number: number;
  };

  type findOneParams = {
    /** 角色ID */
    id: string;
  };

  type findOneParams = {
    id: string;
  };

  type FollowDto = {
    id: string;
  };

  type GetCaptchaDto = {
    /** 手机号 */
    phoneNumber: string;
  };

  type getDemandParams = {
    id: string;
  };

  type getPostByIdParams = {
    id: string;
  };

  type getUserByIdParams = {
    id: string;
  };

  type getUsersParams = {
    skip?: number;
    take?: number;
  };

  type joinParams = {
    id: string;
    joinUserId: string;
  };

  type LikeDto = {
    id: string;
  };

  type LogInDto = {
    /** 手机号 */
    phoneNumber: string;
  };

  type LogOutDto = {
    /** 手机号 */
    phoneNumber: string;
  };

  type MenuDto = {
    id: string;
    name: string;
    url: string;
    createdAt: string;
    updatedAt: string;
  };

  type OrderDto = {
    id: string;
    amount: number;
    paymentstatus: 'EXPIRED' | 'COMPLETE' | 'UNCLEARED';
    orderStatus: 'CREATED' | 'CONFIRMED' | 'PENDING' | 'COMPLETE' | 'CANCELED' | 'REFUNDED';
    createdAt: string;
    updatedAt: string;
  };

  type PalLimitsDto = {
    minAge: number;
    number: number;
    sex: number;
  };

  type PostDto = {
    id: string;
    content: string;
    topicsId: string;
    views: number;
    createdAt: string;
    updatedAt: string;
  };

  type ProductDto = {
    id: string;
    createdAt: string;
    updatedAt: string;
  };

  type ProfileDto = {
    bio: string;
    gender: 'Male' | 'Female';
    weight: number;
    age: number;
    avatar: string;
    birthday: string;
    height: number;
    introduction: string;
  };

  type quitParams = {
    id: string;
    quitUserId: string;
  };

  type RefreshDto = {
    /** 刷新 token */
    refreshToken: string;
  };

  type refreshParams = {
    refreshToken: string;
  };

  type RegisterDto = {
    /** 手机号 */
    phoneNumber: string;
  };

  type removeParams = {
    /** 角色ID */
    id: string;
  };

  type RoleDto = {
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  };

  type TopicDto = {
    id: string;
    title: string;
    heat: number;
    createdAt: string;
    updatedAt: string;
  };

  type UpdateAchievementBenefitDto = {
    name?: string;
    description?: string;
  };

  type UpdateAchievementDto = {
    name?: string;
    type?: string;
    description?: string;
    benefits?: UpdateAchievementBenefitDto[];
  };

  type UpdateChatroomDto = {
    creatorId?: string;
    description?: string;
    type?: 'SINGLE' | 'GROUP' | 'MULTIPLE';
    name?: string;
    history?: string[];
  };

  type UpdateCommentDto = {
    title?: string;
    content?: string;
  };

  type UpdateDemandDto = {
    description?: string;
    images?: string[];
    keywords?: string;
    location?: string;
    limits?: UpdatePalLimitsDto;
    payment?: UpdateDemandPaymentDto;
    time?: string;
  };

  type UpdateDemandPaymentDto = {
    way?: 'AA' | 'NONE' | 'FIXED';
    number?: number;
  };

  type UpdateFollowDto = {};

  type UpdateLikeDto = {};

  type UpdateMenuDto = {
    name?: string;
    url?: string;
  };

  type UpdateOrderDto = {
    amount?: number;
    paymentstatus?: 'EXPIRED' | 'COMPLETE' | 'UNCLEARED';
    orderStatus?: 'CREATED' | 'CONFIRMED' | 'PENDING' | 'COMPLETE' | 'CANCELED' | 'REFUNDED';
  };

  type UpdatePalLimitsDto = {
    minAge?: number;
    number?: number;
    sex?: number;
  };

  type updateParams = {
    /** 角色ID */
    id: string;
  };

  type updateParams = {
    id: string;
  };

  type UpdatePostDto = {
    content?: string;
    topicsId?: string;
  };

  type UpdateProductDto = {};

  type UpdateProfileDto = {
    bio?: string;
    gender?: 'Male' | 'Female';
    weight?: number;
    age?: number;
    avatar?: string;
    birthday?: string;
    height?: number;
    introduction?: string;
  };

  type UpdateRoleDto = {
    name?: string;
  };

  type UpdateTopicDto = {
    title?: string;
    heat?: number;
  };

  type UpdateUserDto = {
    phoneNumber?: string;
    profile?: UpdateProfileDto;
    achievementIds?: string[];
    chatroomIds?: string[];
  };

  type updateUserParams = {
    id: string;
  };

  type UserDto = {
    id: string;
    phoneNumber: string;
    profile: ProfileDto;
    status: 'OPEN' | 'CLOSING' | 'CLOSED' | 'VIOLATION' | 'BLOCKED' | 'EXPIRED';
    isSuperPal: boolean;
    roles: string[];
    views: number;
    createdAt: string;
    updatedAt: string;
    achievementIds: string[];
    chatroomIds: string[];
  };
}
