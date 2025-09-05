// // 1 - iniciando projeto
// console.log("ts + express");

// 2 - inicialiando express

import express = require("express");

const app = express()

app.get("/", (req, res) => {
    return res.send("hello express")
})

app.listen(3000, () => {
    console.log("Aplicação rodando em port 3000")
})