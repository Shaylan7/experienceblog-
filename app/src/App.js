import * as React from "react";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { Routes, Route, Link } from "react-router-dom";

import AddExperience from "./AddExperience.js";
import AllExperiences from "./AllExperiences.js";
import background from "./BlogBackground.png";
import ExperienceCard from "./ExperienceCard.js";
import Filter from "./Filter.js";
import "./app.css";

const App = () => (
  <>
    <nav>
      <Link to="/">Home</Link> | <Link to="dashboard">Add Experience</Link> |{" "}
      <Link to="allexperiences">All Experiences</Link>
    </nav>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<AddEntry />} />
        <Route path="/allexperiences" element={<Experiences />} />
      </Routes>
    </main>
  </>
);

const Home = () => {
  const [searchedTerm, setSearchedTerm] = React.useState("");
  console.log(searchedTerm);
  return (
    <>
      <Box>
        <Box
          style={{
            backgroundImage: `url(${background})`,
            height: "500px",
            backgroundRepeat: "none",
            backgroundSize: "cover",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "4rem",
            // webkitTextStrokeWidth: "1px",
            // webkitTextStrokeColor: "gray",
          }}
        >
          <h4 className="title"> Shay's Travel Blog</h4>
        </Box>
        <div className="body">
          <Filter setSearchedTerm={setSearchedTerm} />
          <h1 className="title">Articles</h1>
          <div className="experiencecard">
            <ExperienceCard searchedTerm={searchedTerm} />
          </div>
          <AddExperience className="addexperience" />
        </div>
      </Box>
    </>
  );
};

const AddEntry = () => (
  <>
    <h1>Add Experience</h1>
    <AddExperience />
  </>
);

const Experiences = () => (
  <>
    <AllExperiences />
  </>
);

export default App;
