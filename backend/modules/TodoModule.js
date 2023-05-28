import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
   text:{
    type: String,
    require: true
   }
})

export default mongoose.model("Todo", todoSchema);

