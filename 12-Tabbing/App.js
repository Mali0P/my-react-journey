import {faqs} from './Faq';
import { useState } from "react";
import Btnmodule from './Button.module.css'
function App() {
const[curId,curFun]=useState(faqs[0]);
let changeId=(id)=>{
  curFun(id)
}
  return (
    <div className="App">

<div className={Btnmodule.toogDiv}>
{
  faqs.map((val,id)=>(
    <ToogleBar 
    val={val}
    curId={curId}
    changeId={changeId}
    curFun={curFun}
    />
  ))
}
    </div>
    <p>{curId.answer}</p>
    </div>
  );
}

export default App;
function ToogleBar({val,curId,changeId,curFun}){
  return(
    <div className={Btnmodule.divBar} onClick={()=>{curFun(faqs[val.id-1])}}>
{val.question}
    </div>
  )
}