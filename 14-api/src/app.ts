// env
require("dotenv").config();

import express from "express"
import config from "config"

const app = express()

// JSON middleware
app.use(express.json())

// db
import db from "../config/db"

// Rotas
import router from "./router"

//logger
import Logger from "../config/logger";

// Middlewars
import morganMiddleware from "./middleware/morganMiddleware";

//app port
const port = config.get<number>("port");

app.use(morganMiddleware)

app.use("/api/", router)

app.listen(port, async() => {
    await db();

    Logger.info(`Aplicação rodando em ${port}`)
})