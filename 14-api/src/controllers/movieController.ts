import {Request, Response} from "express"

// model
import { MovieModel } from "../models/Movie"

//logger
import Logger from "../../config/logger"

export async function createMovie(req: Request, res: Response) {
    try {
        const data = req.body
        const movie = await MovieModel.create(data)
        return res.status(201).json(movie)
    } catch (err: any) {
        Logger.error(`Erro no sistema: ${err.message}`)
    }
}

export async function findMovieById(req: Request, res: Response){
    try {
        const id = req.params.id
        const movie = await MovieModel.findById(id);

        if (!movie) {
            return res.status(404).json({error: "O filme não existe"});
        }

        return res.status(200).json(movie);
    } catch (err: any) {
        Logger.error(`Erro no sistema: ${err.message}`)
    }
}

export async function getAllMovies(req: Request, res: Response) {

    try {
        const movies = await MovieModel.find()
        return res.status(200).json(movies)

    }catch (err: any) {
        Logger.error(`Erro no sistema: ${err.message}`)
        return res.status(500).json({eror: "por favor tente mais tarde"})
    }
}

export async function removeMovie(req: Request, res: Response) {
    try {
        
        const id = req.params.id
        const movie = await MovieModel.findById(id)

        if(!movie){
            return res.status(404).json({eror: "filme não encontrado"})
        }

        await movie.deleteOne();
        return res.status(200).json({error: "filme removido"});


    } catch (err: any) {
        Logger.error(`Erro no sistema: ${err.message}`)
        return res.status(500).json({eror: "por favor tente mais tarde"})
    }
}

export async function updateMovie(req: Request, res:Response){
    try {

        const id = req.params.id;
        const data = req.body;

        const movie = await MovieModel.findById(id);

        if(!movie){
            return res.status(404).json({eror: "filme não encontrado"})
        }

        await MovieModel.updateOne({_id: id}, data)
        return res.status(200).json(data)

    } catch (err: any) {
        Logger.error(`Erro no sistema: ${err.message}`)
        return res.status(500).json({eror: "por favor tente mais tarde"})
    }
}