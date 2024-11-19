
import { useState } from "react";
import Btnmodule from './Button.module.css'
function App() {
 const[val,valfun]=useState(true);
  return (
    <div className="App">

<div className={val?Btnmodule.hideMenu:Btnmodule.menu}>
<ul>
  <li>Home</li>
  <li>Category</li>
  <li>About</li>
  <li>Contact</li>
</ul>
</div>
<button className={Btnmodule.passBtn} onClick={()=>{valfun(!val)}}><span>&#9776;</span></button>
    </div>
  );
}

export default App;
