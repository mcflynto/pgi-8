import React from "react";
import { Link } from "react-router-dom";
import Quantum from "../../domain-components/Quantum/Quantum";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1>PGI-8</h1>
      <Quantum />

      <Link to="/about">{">"} About</Link>
    </div>
  );
};

export default Home;
