"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailVerificationRequestSchema = exports.SignUpRequestSchema = exports.LoginRequestSchema = void 0;
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
//# sourceMappingURL=user.js.map