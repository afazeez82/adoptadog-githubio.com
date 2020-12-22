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
      <Link to="/dog/13">
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
      <Link to="/dog/14">
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
      <Link to="/dog/15">
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
      <h3>Join us for an Ice Cream Social</h3>
      <p>Come and see if any of our dogs could be your future best friend at our first anual, Ice Cream Social. From 4pm - 9pm on July 23rd, come to the Silver Lake Pavilion and meet some cute pups and have a treat. </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={process.env.PUBLIC_URL + "/images/aussieBanner.jpg"}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Mental Excercises and your Pup - Sponsored by Kong</h3>
      <p>Some of the training professionals from the wonderful Kong Company will be at the Chuck and Don's in Edina from 4pm - 8pm. Come to learn, but also to enter the raffle for prizes to spoil your pup.</p>
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
      <Link to="/dog/7">
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
      <Link to="/dog/11">
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
      <Link to="/dog/12">
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