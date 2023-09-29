"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Oauth2RedirectRequest = exports.ResetPasswordRequestSchema = exports.EmailVerificationRequestSchema = exports.SignUpRequestSchema = exports.LoginRequestSchema = void 0;
const zod_1 = require("zod");
const passwordSchema = zod_1.z.string().min(8, 'Password must have at least 8 characters')
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
exports.LoginRequestSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string().email(),
        password: passwordSchema,
    }),
});
exports.SignUpRequestSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string().email(),
        password: passwordSchema,
        repassword: passwordSchema,
    }).refine((value) => {
        return value.password === value.repassword;
    }, {
        message: 'Passwords do not match',
    }),
});
exports.EmailVerificationRequestSchema = zod_1.z.object({
    body: zod_1.z.object({
        session_id: zod_1.z.string(),
        session_token: zod_1.z.string(),
    }),
});
exports.ResetPasswordRequestSchema = zod_1.z.object({
    body: zod_1.z.object({
        old_password: passwordSchema,
        new_password: passwordSchema,
        renew_password: passwordSchema,
    }).refine((value) => {
        return value.new_password === value.renew_password;
    }, {
        message: 'Passwords do not match',
    }),
});
exports.Oauth2RedirectRequest = zod_1.z.object({
    query: zod_1.z.object({
        code: zod_1.z.string(),
    }),
});
//# sourceMappingURL=auth.js.map