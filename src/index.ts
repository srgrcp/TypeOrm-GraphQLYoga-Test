import "reflect-metadata";
import "dotenv/config";
import { createConnection } from "typeorm";
import { ServerConnection } from "./serverConnection";

createConnection().then(async () => {

    const server = new ServerConnection()
    server.Connect()

}).catch(error => console.log(error));
