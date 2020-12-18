import React from "react";
import { Link } from 'react-router-dom';
import Slideshow from "../components/carousel";

// import "../index.css"

function Home() {
  return (
    <div className="container home">
      <div className="row">
        <Slideshow />
      </div>
      <div className="row justify-content-md-center" style={{ backgroundColor: "#004179", height: "100%" }}>
        <Link to="/adopt" className="">
          <p style={{ color: "#CACACA" }}>ADOPT</p>
          <img src={process.env.PUBLIC_URL + "/images/dogs1.jpg"} alt="my" className="img-circle m-4" />
        </Link>


        <Link to="/donate" className="">
          <p style={{ color: "#CACACA" }}>DONATE</p>
          <img src={process.env.PUBLIC_URL + "/images/cute-dog.jpeg"} className="img-circle m-4" alt="..." />
        </Link>

        <Link to="/blog" className="">
          <p style={{ color: "#CACACA" }}>BLOG</p>
          <img src={process.env.PUBLIC_URL + "/images/dog3.jpg"} className="img-circle m-4" alt="..." />
        </Link>


        <Link to="/about" className="">
          <p style={{ color: "#CACACA" }}>ABOUT</p>
          <img src={process.env.PUBLIC_URL + "/images/DOG4.jpg"} className="img-circle m-4" alt="..."></img>
        </Link>
      </div>
    </div>
  );
}

export default Home;