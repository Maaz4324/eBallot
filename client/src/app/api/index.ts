const apiIndex = {
  auth: {
    login: '/api/auth/login',
    register: '/api/auth/register',
    forgotPassword: '/api/auth/forgot-password',
    resetPassword: '/api/auth/reset-password',
    verifyEmail: '/api/auth/verify-email',
    resendVerificationEmail: '/api/auth/resend-verification-email',
    verifyEmailToken: '/api/auth/verify-email/:token',
    resetPasswordToken: '/api/auth/reset-password/:token',
  },
  ballot: {
    feed: '/api/ballot/feed',
    getBallot: '/api/ballot/:id',
    createBallot: '/api/ballot',
    updateBallot: '/api/ballot/:id',
    deleteBallot: '/api/ballot/:id',
    vote: '/api/ballot/:id/vote',
    unvote: '/api/ballot/:id/unvote',
    comment: '/api/ballot/:id/comment',
    uncomment: '/api/ballot/:id/uncomment',
    share: '/api/ballot/:id/share',
  },
  chat: {
    getChats: '/api/chat',
    getChat: '/api/chat/:id',
    createChat: '/api/chat',
    sendMessage: '/api/chat/:id',
    deleteMessage: '/api/chat/:id',
    leaveChat: '/api/chat/:id/leave',
    joinChat: '/api/chat/:id/join',
    inviteUser: '/api/chat/:id/invite',
    kickUser: '/api/chat/:id/kick',
  },
  comment: {
    getComment: '/api/comment/:id',
    updateComment: '/api/comment/:id',
    createComment: '/api/comment/:id',
    deleteComment: '/api/comment/:id',
  },
  friend: {
    getFriends: '/api/friend',
    addFriend: '/api/friend/add/:id',
    removeFriend: '/api/friend/remove/:id',
    acceptFriend: '/api/friend/accept/:id',
    declineFriend: '/api/friend/decline/:id',
    cancelFriend: '/api/friend/cancel/:id',
    getFriend: '/api/friend/:id',
  },
  message: {
    getMessages: '/api/message',
    getMessage: '/api/message/:id',
    sendMessage: '/api/message',
    deleteMessage: '/api/message/:id',
  },
  user: {
    getUser: '/api/user/:id',
    updateUser: '/api/user/:id',
    deleteUser: '/api/user/:id',
  },
}

export const { auth, ballot, chat, comment, friend, message, user } = apiIndex
