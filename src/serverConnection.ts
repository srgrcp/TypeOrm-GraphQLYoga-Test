import { GraphQLServer } from 'graphql-yoga'
import { PORT, PUBLICHOST, ENV } from './envConsts'
import { genSchema } from './utils.ts/genSchema'

export class ServerConnection {
    private graphqlServer: GraphQLServer

    constructor() {
        this.graphqlServer = new GraphQLServer({
            schema: genSchema(),
            context: ({ request }) => ({
                req: request
            })
        })
    }

    get GraphqlServer() { return this.graphqlServer }

    public Connect() {
        const cors = {
            credentials: true,
            origin: ENV? "*": PUBLICHOST
        }
        this.graphqlServer.start({
            cors,
            port: PORT
        })
        console.log('Server on port', PORT)
        return this.graphqlServer
    }
}