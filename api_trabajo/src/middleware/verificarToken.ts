import { Request,Response,NextFunction } from "express";
import jwt from 'jsonwebtoken'
export function verificarToken(request:Request,response:Response,next:NextFunction){
    const authHeader = request.headers.authorization

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        response.status(401).json({error:'Token no proporcionado'})
    }
    //si se llega aqui es por que hay Token
    const token = authHeader.split(' ')[1]
    const SECRET = process.env.SECRET_KEY!

    try {
        const decoded=jwt.verify(token,SECRET)
        ;(request as any).usuario=decoded
        next()
    } catch (error) {
        response.status(403).json({error:'token invalido o expirado'})
    }
}