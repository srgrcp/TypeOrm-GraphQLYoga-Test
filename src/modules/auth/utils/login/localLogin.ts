import { ILogin, ILoginResponse } from "./iLogin"
import { UserReader } from "../../../user/utils/userReader"
import { Crypt } from "../../../../utils.ts/crypt"
import { IUser } from "../../../../entity/IUser"

export class LocalLogin implements ILogin {
    private username: string
    private password: string
    private user: IUser

    constructor(username: string, password: string) {
        this.username = username
        this.password = password
    }

    get User(): IUser { return { ...this.user } }

    public Login = async (): Promise<ILoginResponse> => {
        const userReader = new UserReader()
        const _user = await userReader.FindUsername(this.username)
        if (!_user)
            return { success: false, path: 'username' }
        if (await Crypt.Verify(_user.password, this.password)) {
            this.user = _user as IUser
            return { success: true }
        } else return { success: false, path: 'password' }
    }
}
