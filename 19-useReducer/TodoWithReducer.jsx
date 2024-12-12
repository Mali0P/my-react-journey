import React, { useReducer } from 'react'

export default function TodoWithReducer() {
    let initialData = {
        todo:'',
        todoList:[]
    }
    let reducer = (state,action)=>{
        switch(action.type)
        {
            case 'handleInput':
                return { ...state, todo: action.inputValue };
                case 'addTodo':
                    if (state.todo.trim() !== '') {
                        return {
                            ...state,
                            todoList: [...state.todoList, state.todo],
                            todo: ''
                        };
                    }
                    return state;
       case 'deleteToDo':
        return {
            ...state,
            todoList: state.todoList.filter((val, id) => id !== action.index)
        };
        default:
            return state
            }
    }

    const[state,dispatch] = useReducer(reducer,initialData)
  return (
        <div className='w-[100vw] h-[100vh] flex justify-center items-center bg-[#3299fe]'>
<div className="todoContainer w-[50vw] h-[90vh] bg-[#ebecee] px-[3vw] py-[4vw] flex flex-col items-center">
    <h1 className='text-center'>ToDo List</h1>
    <div className="inputField">
    <input value={state.todo} onChange={(e)=>{dispatch({type:'handleInput',inputValue:e.target.value})}} type="text" className='bg-[white] px-[2vw] py-[0.5vw] mt-[2vw]' /> 
    <button onClick={()=>{dispatch({type:'addTodo'})}} className='bg-[black] text-white px-[2vw] py-[0.5vw]'>Add</button>
    </div>
<ul className='mt-[2vw] flex flex-col gap-[1vw] w-[80%] text-[1.5vw]'>
    {
        state.todoList.map((val,id)=>
        (
            <li className='capitalize flex justify-between'>{id+1}no. {val} <button onClick={()=>dispatch({
                type:'deleteToDo',
                index:id
            })} className='bg-[red] text-white text-[1vw] px-[2vw] '>Clear</button></li>
        ))
    }
</ul>
</div>
        </div>
  )
}
