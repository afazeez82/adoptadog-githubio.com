import React from "react";
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="container">
      <div className="row">
        <img
          className="w-100"
          src={process.env.PUBLIC_URL + "/images/dogs1.jpg"}
          alt="White Dog"
        />
      </div>
      <div className="row " style={{ backgroundColor: "#004179", height: "400px" }}>
        <div className="col-6 m-3" style={{ backgroundColor: "#5EBAF2", height: "350px" }}>
          <h5 className="p-3">
            FurEver Home Rescue is a 501(c)(3) nonprofit based in
            Minneasota and focuses on dogs who need a new home.

            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
            </h5>
        </div>
        <div className="col-5 m-2 row">
        <Link to="/donate">
          <p style={{ color: "#CACACA" }}>DONATE</p>
          <img src={process.env.PUBLIC_URL + "/images/cute-dog.jpeg"} className="img-circle m-4" alt="..." />
        </Link>

        <Link to="/blog">
          <p style={{ color: "#CACACA" }}>BLOG</p>
          <img src={process.env.PUBLIC_URL + "/images/dog3.jpg"} className="img-circle m-4" alt="..." />
        </Link>
        </div>
      </div>
    </div >
  );
}

export default About;