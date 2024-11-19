
import { useState } from "react";
import Btnmodule from './Button.module.css'
function App() {
 const[val,valfun]=useState(true);
  return (
    <div className="App">
<h1 className="p-4 text-[30px] font-[450]">Password Hide/Show</h1>
   <input type={val?'password':'text'} className={Btnmodule.inputField}/>
   <button className={Btnmodule.passBtn} onClick={()=>{valfun(!val)}}>{!val?'Show':'Hide'}</button>
    </div>
  );
}

export default App;
