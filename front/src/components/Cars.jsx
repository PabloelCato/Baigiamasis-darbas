import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Cars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchAllCars = async () => {
      try {
        const res = await axios.get("http://localhost:3001/cars");
        setCars(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllCars();
  }, []);

  console.log(cars);

  const handleDelete = async (id) => {
    
    try {
      await axios.delete(`http://localhost:3001/cars/${id}`);
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1 className="h1car">Dealership offers</h1>
      <div className="cars">
        <div className="buttoncars">
        <button className="listing"><Link to="/add">Create a new listing</Link>
        </button>
      </div>
        {cars.map((car) => (
          <div key={car.id} className="car">
            <img src={car.image} alt="" />
            <h2>{car.title}</h2>
            <p>{car.description}</p>
            <span>€{car.price}</span>
            <button className="delete" onClick={() => 
              handleDelete(car.id)}>Buy</button>
              </div>
        ))}
      </div>
    </div>
  );
};

export default Cars;