import express from "express";
import type { Express } from "express";
import cors from "cors";
import routes from "./routes.js";

class App {
    
    public server: Express;

    constructor(){
        this.server = express();
        this.middlewares();
        this.routes();
    }

    private middlewares(): void{
        this.server.use(cors());//biblioteca para filtrar de onde vêm as requests
        this.server.use(express.json());
        this.server.use(express.urlencoded({ extended: true }));//converter dados de json
    }

    private routes(): void {
        this.server.use("/api/v1", routes);
    }

}

export default new App().server;