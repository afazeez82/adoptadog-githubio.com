import React from "react";

// import "../index.css"

function Home() {
  return (
    <div className="home">
      <div className="row">
        <img
          src={process.env.PUBLIC_URL + "/images/pittyswim.jpg"}
          alt=""
        />
      </div>
      <div className="row justify-content-md-center" style={{ backgroundColor: "#004179", height: "400px" }}>
        <button className="homeBTN p-3">
          <p style={{ color: "#CACACA" }}>ADOPT</p>
          <img src={process.env.PUBLIC_URL + "/images/dogs1.jpg"} alt="my" className="img-circle m-4" />
        </button>


        <button className="homeBTN p-3">
          <p style={{ color: "#CACACA" }}>DONATE</p>
          <img src={process.env.PUBLIC_URL + "/images/dog2.jpg"} className="img-circle m-4" alt="..." />
        </button>

        <button className="homeBTN p-3">
          <p style={{ color: "#CACACA" }}>BLOG</p>
          <img src={process.env.PUBLIC_URL + "/images/dog3.jpg"} className="img-circle m-4" alt="..." />
        </button>


        <button className="homeBTN p-3">
          <p style={{ color: "#CACACA" }}>ABOUT</p>
          <img src={process.env.PUBLIC_URL + "/images/DOG4.jpg"} className="img-circle m-4" alt="..."></img>
        </button>
      </div>
    </div>
  );
}

export default Home;