import axios from "axios";

const baseURL = "http://localhost:3000/todo";

export const getAllTodo = (setTodo) => {
  axios.get(baseURL)
    .then((response) => {
      console.log(response.data);
      setTodo(response.data);
    })
    .catch((err) => {
      console.error( err);
    });
};

export const addToDo = (text,setText,setToDo) =>{
        axios.post(baseURL,{text})
        .then((data)=>{
            console.log(data);
            setText("")
            getAllTodo(setToDo)
        })
        .catch((err) => console.log(err));
}


export const updateTodo = (todoId, text, setToDo, setText, setIsUpdating) => {
    axios
      .put(`${baseURL}/${todoId}`, { text })
      .then((response) => {
        console.log(response);
        setText("");
        setIsUpdating(false);
        getAllTodo(setToDo);
      })
      .catch((err) => console.log(err));
  };

  export const deleteTodo = (todoId, text, setToDo, setText, setIsUpdating) => {
    axios
      .delete(`${baseURL}/${todoId}`)
      .then((response) => {
        console.log(response);
        getAllTodo(setToDo);
      })
      .catch((err) => console.log(err));
  };