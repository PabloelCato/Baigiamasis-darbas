import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Special = () => {
  const [special, setspecial] = useState([]);

  useEffect(() => {
    const fetchAllspecial = async () => {
      try {
        const res = await axios.get("http://localhost:3001/special");
        setspecial(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllspecial();
  }, []);

  console.log(special);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/special/${id}`);
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1 className="h1special">Exotic Cars</h1>
      <div className="specials">
        <div className="buttonspecial">
        <button className="exotic">
          <Link to="/addspecial">Create a new listing</Link>
        </button>
        </div>
        {special.map((special) => (
          <div key={special.id} className="special">
            <img src={special.image} alt="" />
            <h2>{special.title}</h2>
            <p>{special.description}</p>
            <span>€{special.price}</span>
            <button className="delete" onClick={() => 
              handleDelete(special.id)}>Buy</button>
              </div>
        ))}
      </div>
    </div>

  );
};

export default Special;