import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
    Name:{
        type:String,
        require:true

    },
    description:{
        type:String,
      
    },
    ImgUrl:{
        try:String,
     
    }
})
export const Recipe = mongoose.model("User",recipeSchema);