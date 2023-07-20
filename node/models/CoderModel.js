import mongoose from "mongoose";
const Schema = mongoose.Schema

const coderSchema = new Schema(
    {
      Nombre: {type:String},  
      Ciudad: {type:String},  
      GitHub: {type:String}, 
      LinkedIn: {type:String},
      Habilidades: {type:[String]},
      Necesidades: {type:[String]},      
      
    }
)

export default mongoose.model('CoderModel', coderSchema)