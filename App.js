import { useState } from 'react';
import './app.css';

function App() {

  let array = [1,2,3,4,5,6,7];
  return (
    <div className="App">

  <h1>Creating Card Component</h1>
    <div className='row'>
      {array.map((val,id)=>(
 <Card key={id}/>
      ))}
   
    </div>
    </div>
  );
}

export default App;

function Card(){
  return(
    <div className='cardItems'>Cards</div>
  )
}
