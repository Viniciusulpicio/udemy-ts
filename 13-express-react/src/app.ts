// // 1 - iniciando projeto
// console.log("ts + express");

// 2 - inicialiando express

import express, { NextFunction, Request, Response } from "express";
import { request } from "http";

const app = express()

// 3 - rota com POST 
app.use(express.json())

app.get("/", (req, res) => {
    return res.send("hello express")
})

// 3 - rota com POST 
app.post("/api/product", (req, res) => {
    console.log(req.body)

    return res.send("Produto adicionado")
})

// 11 - middleware para todas as rotas
function showPath(req: Request, res: Response, next: NextFunction) {
    console.log(req.path)
    next();
}

app.use(showPath)

// 4 rota all
app.all("/api/product/check", (req, res) => {
    if (req.method === "POST") {
        return res.send("dado inserido")
    } else if (req.method === "GET") {
        return res.send("realizou leitura")
    } else {
        return res.send("Operação impossivel de ser realizada")
    }
})

// 5 interface
app.get("/api/interfaces", (req: Request, res: Response) => {
    return res.send("utilizando as interfacer")
})

// 6 enviando json
app.get("/api/json", (req: Request, res: Response) => {
    return res.json({
        name: "Shirt",
        price: 30.00,
        color: "Blue",
        sizes: ["P", "M", "G"],
    })
})

// 7 - parametros de rota
app.get("/api/product/:id", (req: Request, res: Response) => {
    console.log(req.params)

    const id = req.params.id

    if (id === "1") {
        const product = {
            id: 1,
            name: "Short",
            price: 20.00
        };

        return res.json(product)
    } else {
        return res.send("Produto não encontrado")
    }
})

// 8 - rotas complexas
app.get("/api/product/:id/reviw/:reviwId", (req: Request, res: Response) => {
    console.log(req.params);

    const productId = req.params.id
    const reviwId = req.params.reviwId

    return res.send(`Acessando a review ${reviwId} do produto ${productId}`);
})

// 9 router handler
function getUser(req: Request, res: Response) {
    console.log(`Resgatado o usúario com id: ${req.params.id}`);
    return res.send("O usuario foi encontrado")
}

app.get("/api/user/:id", getUser)

// 10 - middleware
function checkUser(req: Request, res: Response, next: NextFunction) {
    if (req.params.id === "1") {
        console.log("Acesso liberado");
        next();
    } else {
        console.log("Acesso restrito")
    }
}

app.get("/api/user/:id/acces", checkUser, (req: Request, res: Response) => {
    return res.json({ msg: "Bem vindo a área secreta" })
});

// 12 - req e res com generics
app.get("/api/user/:id/details/:name", (req: Request<{ id: string, name: string }>, res: Response<{ status: boolean }>) => {
    console.log(`ID: ${req.params.id}`)
    console.log(`Name: ${req.params.name}`)

    return res.json({ status: true });
})

// 13 - try catch
app.get("/api/error", (req: Request, res: Response) =>{
    try {
        throw new Error("algo deu errado")
    } catch (err: any) {
      
      res.status(500).json({msg: err.message})
    }
})

app.listen(3000, () => {
    console.log("Aplicação rodando em port 3000")
})