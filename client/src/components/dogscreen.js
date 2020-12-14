import React, { Link } from 'react-router-dom';
import data from '../data';

function DogScreen(props) {
    const dog = data.dog.find(x=> x._id === props.match.params.id);

    return <div className="container">
        <div className="p-3" style={{backgroundColor: "#789F8C"}}>
        <div className="" >
            <Link to="/adopt" style={{textDecoration: "none", color: "white"}}>Back to Search</Link>
        </div>
            <div className="p-3">
                <img src={dog.image} alt="dog"></img>
            </div>
            <div className=""><h4>{dog.name}</h4></div>

            <div className="col-3">
                <p>{dog.breed}</p>
                <p>{dog.age}</p>
            </div>
            <div className="col-4">
                <p>{dog.breed}</p>
                <p>{dog.age}</p>
            </div>
        </div>
     </div>
}

export default DogScreen;