
import { useState } from "react";

function App() {
 const[val,valfun]=useState(0);
  return (
    <div className="App">
   <h1 className="text-[40px] text-[black] font-[450] p-4 ">Hooks in React</h1>
<button className="p-[15px] bg-[black] text-[white] m-4 px-10" onClick={()=>{valfun(val+1)}} >+</button>
<p className="m-4 p-[15px]"> {val}</p>
<button className="p-[15px] bg-[black] m-4 text-[white] px-10" onClick={()=>{valfun(val-1)}}>-</button>
    </div>
  );
}

export default App;
