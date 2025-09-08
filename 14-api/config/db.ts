import mongoose from "mongoose";
import config from "config"

// logger
import Logger from "../config/logger";

async function connect(){
    const dbUri = config.get<string>("dbUri")

    try {
        await mongoose.connect(dbUri)
        Logger.info("Banco de dados conectado")
    } catch (err) {
        Logger.error("Não foi possivel conectar ao banco de dados")
        Logger.error(`Error: ${err}`);
        process.exit(1);
    }
}

export default connect;