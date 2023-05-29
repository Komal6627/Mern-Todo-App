import React, { useEffect, useState } from 'react'
import { IoSendSharp } from 'react-icons/io5'
import TodoList from './TodoList'
import { addToDo, getAllTodo, updateTodo } from '../utils/HandleApi'
const AddTodo = () => {
  const [todo, setToDo] = useState([])
  const [text, setText] = useState('')
  const [isUpdating, setIsUpdating] = useState(false)
  const [todoId, setTodoId] = useState('')

  useEffect(() => {
    getAllTodo(setToDo)
  }, [])

 
  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setTodoId(_id);
  };

  return (
    <>
      <div>
        <div className="flex flex-row justify-center items-center mt-8 ml-44 p-8 w-8/12 h-32 shadow-lg shadow-gray-300 rounded-xl">
          <input
            type="text"
            className="border-2 border-black-500 w-96 h-15 p-5 ml-20 rounded"
            placeholder="Enter the List"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          {/* <div className=" bg-indigo-700 m-2 w-14 h-14 rounded" onClick={isUpdating?
           () => updateTodo (todoId, text, setToDo, setText, setIsUpdating):
           () =>addToDo(text, setText, setToDo)}>
            <IoSendSharp className="text-white m-4 h-6 w-6  text-center" />
          </div> */}

          <div
            className="bg-indigo-700 m-2 w-14 h-14 rounded"
            onClick={() =>
              isUpdating
                ? updateTodo(todoId, text, setToDo, setText, setIsUpdating)
                : addToDo(text, setText, setToDo)
            }
          >
            <IoSendSharp className="text-white m-4 h-6 w-6 text-center" />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-8 ml-44 p-8 w-8/12  shadow-lg shadow-gray-300 rounded-xl">
          {todo.length > 0 ? (
            todo.map((item) => (
              <TodoList
                key={item._id}
                text={item.text}
                updateMode={() => updateMode(item._id, item.text)}
              />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  )
}

export default AddTodo
