import { z } from 'zod'
import validator from 'validator'

export const createAvaliationSchema = z.object({
    user_lqc_id: z
        .string({
            required_error: 'User ID is required.',
        })
        .uuid({
            message: 'User ID must be a valid UUID.',
        }),
    type: z.enum(
        [
            'CLEANING_5S',
            'DISCIPLINE',
            'COMMITMENT',
            'IMPROVEMENTS',
            'AUDITS',
            'DETECTION',
            'DEFECT_LEVEL',
            'OQC_DETECTION',
            'WARNINGS',
            'OTHERS',
        ],
        {
            errorMap: () => ({
                message:
                    'Type must be CLEANING_5S, DISCIPLINE, COMMITMENT, IMPROVEMENTS, AUDITS, DETECTION, DEFECT_LEVEL, OQC_DETECTION, WARNINGS or OTHERS.',
            }),
        },
    ),
    score: z
        .number({
            required_error: 'Score is required.',
            invalid_type_error: 'Score must be a number.',
        })
        .min(1, {
            message: 'Score must be greater than 0.',
        })
        .max(10, {
            message: 'Score must be less than or equal to 10.',
        })
        .refine((value) =>
            validator.isCurrency(value.toFixed(2), {
                digits_after_decimal: [2],
                allow_negatives: false,
                decimal_separator: '.',
            }),
        ),
    date: z
        .string({
            required_error: 'Date is required.',
        })
        .datetime({
            message: 'Date must be a valid date.',
        }),
    comment: z
        .string({
            required_error: 'Comment is required.',
        })
        .trim(),
})

export const updateAvaliationSchema = createAvaliationSchema
    .omit({
        user_id: true,
    })
    .partial()
    .strict({
        message: 'Some provided field is not allowed.',
    })
