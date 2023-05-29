import React, { useState } from 'react'
import {AiFillCheckCircle} from 'react-icons/ai';
import {MdModeEditOutline} from 'react-icons/md';
import {MdDelete} from 'react-icons/md';

const TodoList = ({text, updateMode, deleteToDo,handleComplete}) => {
const [checkColor, setCheckColor] = useState('');

  return (
       <div className='flex flex-row justify-center items-center mt-3 ml-44 p-8 w-8/12 h-24 border-2  border-slate-300  shadow-lg shadow-gray-300 rounded-xl gap-x-80 '>
                
               <h6 className='text-xl font-semibold'>{text}</h6>
                
                <div className='flex flex-row place-content-around p-4'>
                <div className=' border-2 border-slate-300 p-2'>
                    <AiFillCheckCircle className='w-5 h-5' onClick={()=> { setCheckColor('green');}} style={{ color: checkColor }}/>
                </div>
                <div className=' border-2 border-slate-300 p-2'  onClick={updateMode}>
                    <MdModeEditOutline className='text-blue-600 w-5 h-5'/>
                </div>
                <div className=' border-2 border-slate-300 p-2' onClick={deleteToDo}>
                    <MdDelete className='text-red-500 w-5 h-5' />
                </div>
                </div>
       </div>
  )
}


export default TodoList

