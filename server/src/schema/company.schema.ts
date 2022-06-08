import {  object, string, TypeOf } from "zod";

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
export const createCompanySchema = object({
    body: object({
        companyName: string({
            required_error: "Company Name is required",
        }),
        webSite: string({
            required_error: "Website is required",
        }),
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
        address: addressType,
        role: string({
            required_error: "Role is required",
        }),
    })
})

export const loginCompanySchema = object({
    body: object({
        email: string({ required_error: 'Email is required' }).email(
            'Invalid email or password'
        ),
        password: string({
            required_error: "Password is required",
        }).min(6, "Password too short - should be 6 chars minimum"),
        role: string({ required_error: 'Email is required' })
    }),
});


export type CreateCompanyInput = TypeOf<typeof createCompanySchema>
export type LoginCompanyInput = TypeOf<typeof loginCompanySchema>