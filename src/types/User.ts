export interface User {
    id: string,
    username: string,
    password?: string,
    email: string,
    avatar?: string,
    createdAt: Date,
    updatedAt: Date,
}

export type UserStatus = "INACTIVE" | "ACTIVE" | "BLOCKED";