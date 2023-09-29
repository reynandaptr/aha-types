import { LoginProvider } from '@prisma/client';
import { z } from 'zod';
export declare const LoginRequestSchema: z.ZodObject<{
    body: z.ZodObject<{
        email: z.ZodString;
        password: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>, string, string>, string, string>;
    }, "strip", z.ZodTypeAny, {
        email: string;
        password: string;
    }, {
        email: string;
        password: string;
    }>;
}, "strip", z.ZodTypeAny, {
    body: {
        email: string;
        password: string;
    };
}, {
    body: {
        email: string;
        password: string;
    };
}>;
export declare const SignUpRequestSchema: z.ZodObject<{
    body: z.ZodEffects<z.ZodObject<{
        email: z.ZodString;
        password: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>, string, string>, string, string>;
        repassword: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>, string, string>, string, string>;
    }, "strip", z.ZodTypeAny, {
        email: string;
        password: string;
        repassword: string;
    }, {
        email: string;
        password: string;
        repassword: string;
    }>, {
        email: string;
        password: string;
        repassword: string;
    }, {
        email: string;
        password: string;
        repassword: string;
    }>;
}, "strip", z.ZodTypeAny, {
    body: {
        email: string;
        password: string;
        repassword: string;
    };
}, {
    body: {
        email: string;
        password: string;
        repassword: string;
    };
}>;
export type ValidateUserResponse = {
    id: number;
    name: string;
    email: string;
    is_verified: boolean;
    provider: LoginProvider;
    provider_id: string;
};
export declare const EmailVerificationRequestSchema: z.ZodObject<{
    body: z.ZodObject<{
        session_id: z.ZodString;
        session_token: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        session_id: string;
        session_token: string;
    }, {
        session_id: string;
        session_token: string;
    }>;
}, "strip", z.ZodTypeAny, {
    body: {
        session_id: string;
        session_token: string;
    };
}, {
    body: {
        session_id: string;
        session_token: string;
    };
}>;
