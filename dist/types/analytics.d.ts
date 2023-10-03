import { LoginProvider } from '@prisma/client';
export type UserAnalyticsResponse = {
    id: number;
    name: string | null;
    email: string;
    is_verified: boolean;
    provider: LoginProvider;
    login_count: number;
    signup_timestamp: Date;
    last_session_timestamp: Date;
};
