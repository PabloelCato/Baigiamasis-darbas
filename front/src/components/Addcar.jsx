import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Addcar = () => {
  const [car, setCar] = useState({
    title: "",
    desc: "",
    price: null,
    image: "",
  });
  const [error,setError] = useState(false)

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCar((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/cars", car);
      navigate("/Cars");
    } catch (err) {
      console.log(err);
      setError(true)
    }
  };

  return (
    <div className="form">
      <h1>Create listing</h1>
      <input
        type="text"
        placeholder="Car title"
        name="title"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Car description"
        name="description"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Car price"
        name="price"
        onChange={handleChange}
      />
      <input
        type="file"
        placeholder="Photo"
        name="Photo"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Add</button>
      {error && "Something went wrong!"}
      <button><Link to="/Cars">Back to Listings</Link></button>
    </div>
  );
};

export default Addcar;