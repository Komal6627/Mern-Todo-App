import mongoose from "mongoose";
import TodoModule from "../modules/TodoModule.js";

export const getList =async (req,res) => {
    try {
     const todo =await TodoModule.find();
 
     console.log(todo);
 
     res.status(200).json(todo);
    } catch (error) {
         res.status(404).json({message: error.message});
    }
 }

export const createList =async (req, res) =>{
    const body = req.body

    const newList = new TodoModule(body);
    try {
        await newList.save();

        res.status(201).json(newList);
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const updateList = async(req,res) =>{
    const {id:_id} = req.params;
    const list= req.body;
    if (!mongoose.Types.ObjectId.isValid(_id)) 
        return res.status(404).send('No List with this id');

    const updatedList =await  TodoModule.findByIdAndUpdate(_id, list, {new: true} );
    
    res.json(updatedList);
}

export const deleteList = async(req,res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) 
    return res.status(404).send('No list with that id');

    await  TodoModule.findByIdAndRemove(id);

    res.json({message: 'List deleted successfully'});
}

