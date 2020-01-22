import { EntityManager, getConnection, FindManyOptions } from "typeorm";
import { User } from "../../../entity/User";

export class UserReader {
    private manager: EntityManager
    
    constructor() {
        this.manager = getConnection().manager
    }

    public GetUsers = async (options?: FindManyOptions) => {
        if (options)
        return await this.manager.find(User, options)
        else
        return await this.manager.find(User)
    }
}
