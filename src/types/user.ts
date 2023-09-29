import {LoginProvider} from '@prisma/client';
import {z} from 'zod';

const passwordSchema = z.string().min(8, 'Password must have at least 8 characters')
    .refine((value) => /[a-z]/.test(value), {
      message: 'Password must contain at least one lowercase character',
    })
    .refine((value) => /[A-Z]/.test(value), {
      message: 'Password must contain at least one uppercase character',
    })
    .refine((value) => /[0-9]/.test(value), {
      message: 'Password must contain at least one digit character',
    })
    .refine((value) => /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(value), {
      message: 'Password must contain at least one special character',
    });

export const LoginRequestSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: passwordSchema,
  }),
});

export const SignUpRequestSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: passwordSchema,
    repassword: passwordSchema,
  }).refine((value) => {
    return value.password === value.repassword;
  }, {
    message: 'Passwords do not match',
  }),
});

export type ValidateUserResponse = {
  id: number
  name: string
  email: string
  is_verified: boolean
  provider: LoginProvider
  provider_id: string
}

export const EmailVerificationRequestSchema = z.object({
  body: z.object({
    session_id: z.string(),
    session_token: z.string(),
  }),
});

export const ResetPasswordRequestSchema = z.object({
  body: z.object({
    old_password: passwordSchema,
    new_password: passwordSchema,
    renew_password: passwordSchema,
  }).refine((value) => {
    return value.new_password === value.renew_password;
  }, {
    message: 'Passwords do not match',
  }),
});
