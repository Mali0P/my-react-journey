import img from './image.jpg'
function App() {
  return (
    <div className="App">
   <h1 className="text-[40px] text-[black] font-[450] p-2">Importing Image in React Js</h1>
    <img width={200} height={200} src={img}/>
    </div>
  );
}

export default App;
