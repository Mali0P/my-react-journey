
function App() {
  let showAlert=()=>{
    alert("Hello World");
  }
  return (
    <div className="App">
   <h1 className="text-[40px] text-[black] font-[450] p-4">Event Handling in React</h1>
<button className="p-[15px] bg-[black] text-[white] m-4" onClick={showAlert}>Click Me</button>
    </div>
  );
}

export default App;
