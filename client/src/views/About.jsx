import React from "react";
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="about container">
      <div className="row">
        <img
          className="img-fluid w-100 h-auto"
          src={process.env.PUBLIC_URL + "/images/fetch.jpg"}
          alt="White Dog"
        />
      </div>
      <div className="row justify-content-md-center" style={{ backgroundColor: "#004179", height: "600px" }}>
        <div className="col-5 m-3" style={{ backgroundColor: "#5EBAF2", height: "550px" }}>
          <h5 className="p-4 m-4">
            FurEver Home Rescue is a 501(c)(3) nonprofit Minnesota-based animal rescue organization which strives to prevent the unnecessary euthanasia of companion animals by finding them loving forever homes.
            <br></br>
            <br></br>
            While we will rescue companion animals of all sizes, ages, breeds and conditions, FurEver Home Rescue will always maintain a focus on helping dogs that come from homes of neglet and find stive to find them forever homes, with a 0% return policy. We do this through a strong focus on training and body awareness for the dogs, helping them to make sure they are confident in them selves and any enviornment they may walk into.
            </h5>
        </div>
        <div className="row">
          <Link to="/donate" className="p-3">
            <p style={{ color: "#CACACA" }}>DONATE</p>
            <img src={process.env.PUBLIC_URL + "/images/dog4.jpg"} className="img-circle m-4" alt="..." />
          </Link>
          <Link to="/blog" className="p-3">
            <p style={{ color: "#CACACA" }}>BLOG</p>
            <img src={process.env.PUBLIC_URL + "/images/dog3.jpg"} className="img-circle m-4" alt="..." />
          </Link>
        </div>
      </div>
    </div >
  );
}

export default About;