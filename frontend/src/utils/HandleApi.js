import axios from "axios";

const baseURL = "http://localhost:3000/todo";

export const getAllTodo = (setTodo) => {
  axios.get(baseURL)
    .then((response) => {
      console.log(response.data);
      setTodo(response.data);
    })
    .catch((error) => {
      console.error("Error fetching todo items:", error);
    });
};

export const addToDo = (text,setText,setToDo) =>{
        
}
