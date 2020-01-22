import { ResolverMap } from "../../interfaces/graphql";
import { UserUpdater } from "./utils/userUpdater";
import { UserCreator } from "./utils/userCreator";
import { UserReader } from "./utils/userReader";

export const resolvers: ResolverMap = {
    Query: {
        users: async () => {
            const userReader = new UserReader()
            return await userReader.GetUsers()
        }
    },
    Mutation: {
        createUser: async (_, { user }) => {
            const userCreator = new UserCreator()
            await userCreator.Create(user)
            return userCreator.GeneratedMap
        },

        updateUser: async (_, { id, user }) => {
            const userUpdater = new UserUpdater(id, user)
            await userUpdater.update()
            return userUpdater.Changes
        }
    }
}