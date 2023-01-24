import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
return(
    <div>
      <div className="Home">
        <h1>Welcome</h1>
        <form>
        <Link to="/register" className="btn btn-primary">Register</Link>
        <Link to="/login" className="btn btn-primary">Login</Link>
        </form>
        </div>
      </div>

)};

export default Home;