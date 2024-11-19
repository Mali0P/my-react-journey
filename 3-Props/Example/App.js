import { Col, Container, Row, Card, Button } from 'react-bootstrap';
import './app.css';
import Header from './Header';
import { blog } from './Blog';
function App() {

  
  return (
    <div className="App">

<h1 className='text-center py-4'>Props Example</h1>

 <Container fluid>
<Container>
  <Row>
{blog.map((val,id)=>(
  <ProductItems key={id} title={val.title} body={val.body} />
))}


  </Row>
</Container>

 </Container>
    </div>
  );
}

export default App;



function ProductItems({title,body}){
  return(
    <Col lg="3" md="6" sm="12" className='my-3'>
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {body}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
  )
}
  

