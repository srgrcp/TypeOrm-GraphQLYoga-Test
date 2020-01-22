import { EntityManager, getConnection, InsertResult } from "typeorm";
import { User } from "../../../entity/User";
import { IUser } from "../../../entity/IUser";
import { Crypt } from "../../../utils.ts/crypt";
import { GeneratedMap } from "../../../interfaces/db";

export class UserCreator {
    private manager: EntityManager
    private insertResult: InsertResult
    
    constructor() {
        this.manager = getConnection().manager
    }

    get InsertedId(): string { return this.insertResult.generatedMaps[0].id }
    get GeneratedMap(): GeneratedMap { return this.insertResult.generatedMaps[0] as GeneratedMap }

    public Create = async (user: IUser) => {
        user.password = await Crypt.Hash(user.password)
        this.insertResult = await this.manager.insert(User, { ...user })
    }
}