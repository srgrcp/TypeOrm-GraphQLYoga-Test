import { EntityManager, getConnection, FindManyOptions, Repository, Like } from "typeorm";
import { User } from "../../../entity/User";

export class UserReader {
    private manager: EntityManager
    private repository: Repository<User>
    
    constructor() {
        this.manager = getConnection().manager
        this.repository = this.manager.getRepository(User)
    }

    public GetUsers = async (options?: FindManyOptions) => {
        if (options)
        return await this.repository.find(options)
        else
        return await this.repository.find()
    }

    public GetUserById = async (id: string) => {
        return await this.repository.findOne(id)
    }

    public FindUsername = async (username: string) => {
        return await this.repository.findOne({ username: Like(username) })
    }
}
