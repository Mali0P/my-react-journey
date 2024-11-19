import './app.css';
import { Col, Container, Row, Card, Button } from 'react-bootstrap';

function App() {

  let array=[1,2,3,4,5,6];
  return (
    <div className="App">
<Container fluid>
<Container>
<Row>
  <Col className='col-12 text-center py-4'>
  <h1>React Bootstrap</h1>
  </Col>
</Row>
<Row>
{
 array.map((val,id)=>(
  <Col key={id} lg="3" md="6" className='my-4'>
    <Cards id={id}/>
  </Col>

 ))
}

</Row>

</Container>

</Container>
 
    </div>
  );
}

export default App;

function Cards({id}){
  return(
    <Card style={{ width: '17rem' }}>
    <Card.Img variant="top" src={`https://via.assets.so/game.png?id=${id}&q=95&w=360&h=360&fit=cover`} />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  )
}


