import { array, object, string, TypeOf } from "zod";

const channelsType = object({
    name: string(),
    url: string(),
    description: string(),
});

const addressType = object({
    address: string({
        required_error: "Address is required",
    }),
    city: string({
        required_error: "City is required",
    }),
    country: string({
        required_error: "Country is required",
    }),
    zipcode: string({
        required_error: "ZipCode is required",
    })
})


export const createUserSchema = object({
    body: object({
        firstName: string({
            required_error: "First Name is required",
        }),
        lastName: string({
            required_error: "First Name is required",
        }),
        email: string({
            required_error: "Email is required",
        }).email("Not a valid email"),
        password: string({
            required_error: "Password is required",
        }).min(6, "Password too short - should be 6 chars minimum"),
        channels: array(channelsType),
        address: addressType,
        role: string({
            required_error: "Role is required",
        }),
    })
});

export const loginUserSchema = object({
    body: object({
        email: string({ required_error: 'Email is required' }).email(
            'Invalid email or password'
        ),
        password: string({
            required_error: "Password is required",
        }).min(6, "Password too short - should be 6 chars minimum"),
    }),
});

export type CreateUserInput = TypeOf<typeof createUserSchema>
export type LoginUserInput = TypeOf<typeof loginUserSchema>
