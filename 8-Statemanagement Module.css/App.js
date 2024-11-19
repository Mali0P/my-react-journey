
import { useState } from "react";
import Btnmodule from './Button.module.css'
function App() {
 const[val,valfun]=useState(true);
  return (
    <div className="App">
   <h1 className="text-[40px] text-[black] font-[450] p-4 ">State Management/Module.css</h1>
<button className="p-[15px] bg-[black] text-[white] m-4 px-10" onClick={()=>{valfun(!val)}} >{val?'Show':'Hide'}</button>
<p style={{display:!val?'block':'none'}}>This is visible</p>
  <button className={Btnmodule.dangerBtn}>This is styled using module</button>
   
   
    </div>
  );
}

export default App;
