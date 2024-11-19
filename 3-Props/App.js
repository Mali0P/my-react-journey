import './app.css';
import Header from './Header';

function App() {

  let array=[1,2,3,4,5,6];
  return (
    <div className="App">


<Header array={array}>
<h1>This is Children</h1>

</Header>
 
    </div>
  );
}

export default App;




