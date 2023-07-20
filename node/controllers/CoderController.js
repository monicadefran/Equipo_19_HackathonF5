//importamos el Modelo
import CoderModel from "../models/CoderModel.js";

//** Métodos para el CRUD **/

//Mostrar todos los coders
export const getAllCoder = async (req, res) => {
    try {
        const coders = await CoderModel.find()
        res.status(200).json(coders)

    } catch (error) {
        res.json( {message: error.message} )
    }
}


//Mostrar un coder
export const getCoder= async (req, res) => {
        try {
            const id = req.params.id
            await CoderModel.findById( {_id:id} ).then( (coder) => {
                res.status(200).json(coder)
            })        
        } catch (error) {
            res.json( {message: error.message} )
        }
}


//Crear un blog
export const createCoder = async (req, res) => {
    try {
       await CoderModel.create(req.body)
       res.status(200).json({
           "message":"¡Coder creado correctamente!"
       })
    } catch (error) {
        res.json( {message: error.message} )
    }
}


//Actualizar un blog
export const updateCoder = async (req, res) => {
    try {
        const id = req.params.id
        await CoderModel.updateOne({_id: id}, req.body).then( res => {
            console.log(res)
        })
        res.status(200).json({
            "message":"¡CoderModel actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}


//Eliminar un coder
export const deleteCoder = async (req, res) => {
    try {
        const id = req.params.id
        await CoderModel.deleteOne({ _id : id }).then( res => {
            console.log(res)
        })
        res.status(200).json({
            "message":"¡CoderModel eliminado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}