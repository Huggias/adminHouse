import { Request, Response } from "express";

export function pruebaController(req: Request, res:Response):Response {
    return res.json("welcome to my api");
}