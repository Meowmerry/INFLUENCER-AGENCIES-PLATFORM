import { Response } from 'express';

export interface ApiResponse<T> {
    status: 'success' | 'error'
    data: T
}

export const response = <T = any>(res: Response, code: number, data: T) => {
    return res.status(code).json({
        data
    })
}