import { ResolverMap } from "../../interfaces/graphql";
import { getConnection } from "typeorm";
import { User } from "../../entity/User";

export const resolvers: ResolverMap = {
    Query: {
        users: async () => await getConnection().manager.find(User)
    },
    Mutation: {
        createUser: async (_, { username }) => {
            const user = new User()
            user.username = username
            await getConnection().manager.save(user)
            return user.id
        }
    }
}