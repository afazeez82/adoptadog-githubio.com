import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

const Slideshow = () => {
return (
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={process.env.PUBLIC_URL + "/images/labPupBanner.jpg"}
      alt="First slide"
    />
    <Carousel.Caption>
      <div className="carousel">
      <Link to="/adopt">
      <h3>Trixie</h3>
      <p>Labrador Retriver - Puppy</p>
      </Link>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={process.env.PUBLIC_URL + "/images/pittySwimBanner.jpg"}
      alt="Third slide"
    />

    <Carousel.Caption>
    <div className="carousel">
      <Link to="/adopt">
      <h3>Rosco</h3>
      <p>American Pitbull Terrier - Adult</p>
      </Link>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={process.env.PUBLIC_URL + "/images/tripodBanner.jpg"}
      alt="Third slide"
    />

    <Carousel.Caption>
    <div className="carousel">
      <Link to="/adopt">
      <h3>Shep</h3>
      <p>German Shepherd - Senior - Tripod</p>
      </Link>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={process.env.PUBLIC_URL + "/images/whitePupBanner.jpg"}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Fourth slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={process.env.PUBLIC_URL + "/images/aussieBanner.jpg"}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Fifth slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={process.env.PUBLIC_URL + "/images/goldenBanner.jpg"}
      alt="Third slide"
    />

    <Carousel.Caption>
    <div className="carousel">
      <Link to="/adopt">
      <h3>Maxie</h3>
      <p>Golden Retriver - Adult</p>
      </Link>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={process.env.PUBLIC_URL + "/images/cattleBanner.jpg"}
      alt="Third slide"
    />

    <Carousel.Caption>
    <div className="carousel">
      <Link to="/adopt">
      <h3>Coach</h3>
      <p>Australian Cattle Dog - Puppy</p>
      </Link>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={process.env.PUBLIC_URL + "/images/couchPupBanner.jpg"}
      alt="Third slide"
    />

    <Carousel.Caption>
    <div className="carousel">
      <Link to="/adopt">
      <h3>Francine</h3>
      <p>Labrador Retriver Mix - Senior</p>
      </Link>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
)
}

export default Slideshow;