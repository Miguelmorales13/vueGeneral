export interface StateUsers {
    users:User[]
    loader: true,
    selectedUser: User|any
}

export interface User {
    _id:string
    user:string
    password:string
    email:string
    active:boolean
    createdAt:Date
    updatedAt:Date
}