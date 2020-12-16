import React from "react";
import { Link } from 'react-router-dom';
 
// import "../index.css"

function Home() {
  return (
    <div className="container">
      <div className="row">
        <img
        className="w-100"
          src={process.env.PUBLIC_URL + "/images/dog1.jpg"}
          alt=""
        />
      </div>
      <div className="row justify-content-md-center" style={{ backgroundColor: "#004179", height: "400px" }}>
        
        <Link to="/adopt">
          <p style={{ color: "#CACACA" }}>ADOPT</p>
          <img src={process.env.PUBLIC_URL + "/images/dogs1.jpg"} alt="my" className="img-circle m-4" />
        </Link>

        <Link to="/donate">
          <p style={{ color: "#CACACA" }}>DONATE</p>
          <img src={process.env.PUBLIC_URL + "/images/cute-dog.jpeg"} className="img-circle m-4" alt="..." />
        </Link>

        <Link to="/blog">
          <p style={{ color: "#CACACA" }}>BLOG</p>
          <img src={process.env.PUBLIC_URL + "/images/dog3.jpg"} className="img-circle m-4" alt="..." />
        </Link>
        
        <Link to="/about">
          <p style={{ color: "#CACACA" }}>ABOUT</p>
          <img src={process.env.PUBLIC_URL + "/images/DOG4.jpg"} className="img-circle m-4" alt="..."></img>
        </Link>
      </div>
    </div>
  );
}

export default Home;