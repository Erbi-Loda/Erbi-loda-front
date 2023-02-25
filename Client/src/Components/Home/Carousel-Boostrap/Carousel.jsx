import Carousel from 'react-bootstrap/Carousel';
import Diapo2 from './Diapo2';
import Diapo3 from './Diapo3';
import 'bootstrap/dist/css/bootstrap.min.css';
import './carousel.css'
function CarouselBoostrap() {
  return (
    <Carousel style={{height:"calc(100vh - 80px)",paddingBottom:'10px'}}>
      <Carousel.Item  style={{height:'calc(100vh - 70px)'}} interval={1500}>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:'calc(100vh - 70px)'}} interval={80008}>
      <Diapo2/>
      </Carousel.Item>
      <Carousel.Item style={{height:'calc(100vh - 70px)'}} interval={80008}>
     <Diapo3></Diapo3>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselBoostrap;