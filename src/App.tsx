import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductForm from './components/ProductForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container>
      <Row className='justify-content-lg-center align-items-center m-lg-auto vh-100'>
        <Col lg={6}>
          <ProductForm />
        </Col>
      </Row>
    </Container>
  );
}
export default App;
