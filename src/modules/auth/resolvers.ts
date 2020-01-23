import { ResolverMap } from "../../interfaces/graphql";
import { LocalLogin } from "./utils/login/localLogin";
import { TokenManager } from "./utils/tokenManager";

export const resolvers: ResolverMap = {
    Mutation: {
        localLogin: async (_, { username, password }) => {
            const localLogin = new LocalLogin(username, password)
            const loginResponse = await localLogin.Login()
            if (!loginResponse.success)
                return loginResponse
            else {
                const tokenManager = new TokenManager(localLogin.User)
                loginResponse.token = tokenManager.Sign()
                return loginResponse
            }
        }
    }
}
