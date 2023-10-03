import {LoginProvider} from '@prisma/client';

export type UserAnalyticsResponse = {
  id: number
  name: string | null
  email: string
  is_verified: boolean
  provider: LoginProvider
  login_count: number
  signup_timestamp: Date
  last_session_timestamp: Date
}

export type UserOnlineAnalyticsResponse = {
  user_count: number
  user_active_session_count: number
  average_active_user: number
}
