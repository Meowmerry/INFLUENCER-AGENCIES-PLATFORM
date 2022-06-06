import { object, string } from "zod";

export const createRoleSchema = object({
    body: object({
        name: string({
            required_error: 'Name of role is required'
        })
    })
})