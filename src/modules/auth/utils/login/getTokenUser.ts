import { Resolver } from "../../../../interfaces/graphql"
import { TokenManager } from "../tokenManager"
import { UserReader } from "../../../user/utils/userReader"

export const GetTokenUser = async (resolver: Resolver, parent: any, args: any, context: any, info: any) => {
    const token = context.req.headers.authorization
    if (token) {
        const ns = TokenManager.Verify(token)
        const userReader = new UserReader()
        if (!ns.id) return resolver(parent, args, context, info)
        const user = await userReader.GetUserById(ns.id as string)
        if (user) {
            delete user.password
            context.req.user = user
        }
    }
    return resolver(parent, args, context, info)
}
