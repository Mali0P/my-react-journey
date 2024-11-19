import {faqs} from './Faq';
import { useState } from "react";
import Btnmodule from './Button.module.css'
import { NotificationContainer } from 'react-notifications';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
function App() {
  const notify = () =>  {toast.error("ToDo Exists", {
    position: "top-right"
  });}
  const notifyEmpty = () =>  {toast.error("ToDo can't be empty", {
    position: "top-right"
  });}
  const notifySuccess =()=>{
    toast.success("ToDo successfully added!", {
      position: "top-right"
    });
  }
  const[todolist,setTodolist]=useState([]);

let onFun=(event)=>{

let toname = event.target.userName.value;

if((!todolist.includes(toname))&&(toname!="")){
  let finalData=[...todolist,toname];
  setTodolist(finalData);
  notifySuccess()
}
else{
  if(toname===""){
    notifyEmpty()
  }
  else
  notify()
}
event.preventDefault();
}
let list = todolist.map((val,id)=>{
return(
 <ShowTodolist todoData={val} key={id} indexNumber={id}
 todolist={todolist}
 setTodolist={setTodolist}
 />
)
})

  return (
    <div className="App">
      <div className={Btnmodule.todo}>
        <h1>ToDo List</h1>
<form onSubmit={onFun}>
  <input type='text' name='userName'/>
<button className={Btnmodule.btn}>Add</button>
</form>
<div className={Btnmodule.showData}>
    {list}
  </div>
</div>
<ToastContainer/>
    </div>
  );
}

export default App;

function ShowTodolist({todoData,indexNumber,todolist,setTodolist}){
  const[markTodo,markFun]=useState(false);
  let deleteFun=()=>{
    let finalData =todolist.filter((val,i)=>(
      i!==indexNumber

    ))
    setTodolist(finalData)
      }
  return(
    <ul>
      <li style={{backgroundColor:markTodo?'red':''}} onClick={()=>{markFun(!markTodo)}} className={markTodo?Btnmodule.markedli:''}>{indexNumber+1}no.  {todoData}<span className={Btnmodule.cross} onClick={deleteFun}>&times;</span></li>
    </ul>
  )
}
