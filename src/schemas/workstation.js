import { z } from 'zod'

export const createWorkstationSchema = z.object({
    user_lqc_id: z
        .string({
            required_error: 'User ID is required.',
        })
        .uuid({
            message: 'User ID must be a valid UUID.',
        }),
    station_type: z.enum(
        [
            'APPEARANCE',
            'CONNECTION',
            'DISCONNECTION',
            'MICROWAVE_LEAK_TEST',
            'FUNCTIONAL_TEST_1',
            'FUNCTIONAL_TEST_2',
            'LEAK_TEST',
            'PANEL_TEST',
            'MEMBRANE_TEST',
        ],
        {
            errorMap: () => ({
                message:
                    'Type must be APPEARANCE, CONNECTION, DISCONNECTION, MICROWAVE_LEAK_TEST, FUNCTIONAL_TEST_1, FUNCTIONAL_TEST_2, LEAK_TEST, PANEL_TEST or MEMBRANE_TEST.',
            }),
        },
    ),
    line_type: z.enum(['AA1', 'AC1', 'AC2', 'AC3', 'AM1'], {
        errorMap: () => ({
            message: 'Type must be AA1, AC1, AC2, AC3 or AM1.',
        }),
    }),
    Able: z
        .boolean({
            required_error: 'Select True or False.',
        })
        .trim(),
})

export const updateWorkstationSchema = createWorkstationSchema
    .omit({
        user_id: true,
    })
    .partial()
    .strict({
        message: 'Some provided field is not allowed.',
    })
