import { IUser } from "../../../entity/IUser";
import * as JWT from 'jsonwebtoken'
import { PRIVATE_KEY } from "../../../envConsts";

export class TokenManager {
    private user: IUser

    constructor(user: IUser) {
        this.user = user
        delete this.user.password
    }

    public Sign = () => {
        return JWT.sign(this.user, PRIVATE_KEY)
    }

    static Verify = (token: string) => {
        return JWT.verify(token, PRIVATE_KEY)
    }
}
