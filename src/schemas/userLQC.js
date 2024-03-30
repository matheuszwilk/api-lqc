import { z } from 'zod'
// import validator from 'validator'

export const creeateUserLQCSchema = z.object({
    user_id: z
        .string({
            required_error: 'User id is required.',
        })
        .uuid({
            message: 'User ID must be a valid UUID format',
        }),
    first_name: z
        .string({
            required_error: 'User name is required.',
        })
        .trim()
        .min(1, {
            message: 'Name is required.',
        }),
    last_name: z
        .string({
            required_error: 'Last Name is required.',
        })
        .trim()
        .min(1, {
            message: 'Last Name is required.',
        }),
    registration: z
        .string({
            required_error: 'Registration is required.',
        })
        .trim()
        .min(1, {
            message: 'Registration is required.',
        }),
    position: z.enum(['Operator_A', 'Operator_B'], {
        errorMap: () => ({
            message: 'Type must be Operator_A, Operator_B.',
        }),
    }),
    admission_date: z
        .string({
            required_error: 'Date is required.',
        })
        .datetime({
            message: 'Date must be a valid date.',
        }),
    imageUrl: z
        .string({
            required_error: 'Imagem URL is required.',
        })
        .trim()
        .min(1, {
            message: 'Valid Imagem URL is required.',
        }),
})

export const updateUserLQCSchema = creeateUserLQCSchema.partial().strict({
    message: 'Some Provide field is not allowed.',
})
