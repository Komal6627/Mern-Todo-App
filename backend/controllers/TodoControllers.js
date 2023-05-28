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

// export const postTodo = async(req,res)=>{
//     const body = req.body

//     TodoModule.create(body)
//     .then((data) =>{
//         console.log("Added Successfully");
//         console.log(data);
//         res.send(data);
//     })
// }

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
