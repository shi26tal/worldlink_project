import "express"

declare global {
    namespace Express {
        interface Request {
            user?: {
                id:number,
                userName:string
            }
        }
    }
}


export {}