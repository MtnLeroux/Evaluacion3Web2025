import {Request,Response} from 'express'
import Usuario from '../models/Usuario'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const login = async(request:Request, response:Response)=>{
    const {email,password}=request.body
    const SECRET=process.env.SECRET_KEY 

    try {
        //buscar el usuario
        const usuario= await Usuario.findByPk(email)

        if(!usuario || !bcrypt.compareSync(password,usuario.password)){
            response.status(401).json({error:'credenciales incorrectas'})
        }

        //si llegamos aca las credenciales son correctas
        const token=jwt.sign({email:usuario.email},SECRET,{expiresIn:'1h'})
        response.json({token})
    } catch (error) {
        console.error('Error de login',error)
        response.status(500).json({error:'Error interno del servidor'})
    }
}

export const crearUsuario= async (request:Request,response:Response)=>{
    const {email,password}=request.body
    if(!email || !password){
        response.status(400).json({error:'Email y contraseña son obligatorios'})
    }
    //si llegamos a este punto es por que hay Email y password
    try {
        const existente =await Usuario.findByPk(email)
        if(existente){
            response.status(409).json({error:'Ese Email ya esta registrado en el sistema'})
        }
        const nuevoUsuario = await Usuario.create({email,password})
        response.status(201).json({message:'Usuario creado correctamente'})
    } catch (error) {
        console.error('Error al registrar usuario',error)
        response.status(500).json({error:'Error interno del servidor'})
    }
}