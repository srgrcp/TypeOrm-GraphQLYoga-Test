import { UpdateResult, getConnection, EntityManager } from "typeorm";
import { User } from "../../../entity/User";
import { IUser } from "../../../entity/IUser";

export class UserUpdater {
    private updateResult: UpdateResult
    private user: IUser
    private id: Number

    private manager: EntityManager

    constructor(id: Number, user: IUser) {
        this.id = id
        this.user = user
        this.manager = getConnection().manager
    }

    get Changes(): Number { return this.updateResult.raw.changedRows }

    public update = async () => {
        this.updateResult = await this.manager.update(User, this.id, { ...this.user })
    }
}