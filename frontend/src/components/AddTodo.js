import React, { useEffect, useState } from 'react'
import { IoSendSharp } from 'react-icons/io5'
import TodoList from './TodoList'
import { getAllTodo } from '../utils/HandleApi'
const AddTodo = () => {
  const [toDo, setToDo] = useState([])

  useEffect(() => {
    getAllTodo(setToDo)
  }, [])
  return (
    <>
      <div>
        <div className="flex flex-row justify-center items-center mt-8 ml-44 p-8 w-8/12 h-32 shadow-lg shadow-gray-300 rounded-xl">
          <input
            type="text"
            className="border-2 border-black-500 w-96 h-15 p-5 ml-20 rounded"
            placeholder="Enter the List"
          />
          <div className=" bg-indigo-700 m-2 w-14 h-14 rounded">
            <IoSendSharp className="text-white m-4 h-6 w-6  text-center" />
          </div>
        </div>
        {/* <div className="flex flex-col justify-center items-center mt-8 ml-44 p-8 w-8/12  shadow-lg shadow-gray-300 rounded-xl">
        {toDo.map((item) => <TodoList 
          key={item._id} 
          text={item.text}
          />)}
        </div> */}
        <div className="flex flex-col justify-center items-center mt-8 ml-44 p-8 w-8/12  shadow-lg shadow-gray-300 rounded-xl">
        {toDo.length > 0 ? (
            toDo.map((item) => <TodoList key={item._id} text={item.text} />)
          ) : (
            <p>Loading...</p>
          )}

         

        </div>
      </div>
    </>
  )
}

export default AddTodo
