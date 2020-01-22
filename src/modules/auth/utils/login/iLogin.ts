export interface ILoginResponse {
    token?: string
    success: boolean
    path?: string
}

export interface ILogin {
    Login: () => Promise<ILoginResponse>
}