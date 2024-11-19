import { useState } from 'react';
import './Calculator.css';
import { Col, Row } from 'react-bootstrap';

function App() {
  const [curval, curFun] = useState(['0']);  
  const [result, resFun] = useState(0);      
  let numbers = ["C", "+", "x", "-", 1, 2, 3, "/", 4, 5, 6, "=", 7, 8, 9, 0];

  return (
    <div className="App">
      <div className='calcuBody'>
        <div className='display'>
          <span>{curval.length === 0 ? '0' : curval.join('')}</span>  {/* Display '0' when curval is empty */}
        </div>
        <Row className='row col-12'>
          {numbers.map((value, id) => (
            <Calculator key={id} number={value} curval={curval} curFun={curFun} resFun={resFun} />
          ))}
        </Row>
      </div>
    </div>
  );
}

export default App;

function Calculator({ number, curval, curFun, resFun }) {
 
  let showData = () => {
    if (number === "=") {
      let expression = curval.join('');
      expression = expression.replace(/x/g, '*');
      console.log(expression)
  
      try {
        let result = new Function('return ' + expression)();
        
        curFun([String(result)]);
        resFun(result);
      } catch (e) {
     
      }
  
    } else {
      if (number === "C") {
        curFun(['0']);
      } else {
        if (curval.length === 1 && curval[0] === '0') {
          curFun([String(number)]);
        } else {
          let finalVal = [...curval, number];
          curFun(finalVal);
        }
      }
    }
  };
  
  
  

  return (
    <Col className='col'>
      <button onClick={showData} className={isNaN(number) ? (number === "=" ? 'green' : 'operators') : ''}>
        {number}
      </button>
    </Col>
  );
}
