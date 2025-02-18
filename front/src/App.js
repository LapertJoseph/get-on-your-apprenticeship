import { Routes, Route, Link } from "react-router-dom";
import React from "react";
import "./App.css";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import StudentsList from "./Components/StudentsList";
import CompleteStudentsList from "./Components/CompleteStudents";
import RandomChampion from "./Components/RandomStudent";
import FilteredHouse from "./Components/FilteredHouse";


const App = () => {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/student">Student</Link>
        <Link to="/students">Complete Student</Link>
        <Link to="/randomStudents">Random Student</Link>
        <Link to="/appealGryfondor">FilteredHouse</Link>
      </nav>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<StudentsList />} />
        <Route path="/students" element={<CompleteStudentsList />} />
        <Route path="/randomStudents" element={<RandomChampion />} />
        <Route path="/appealGryfondor" element={<FilteredHouse />} />
      </Routes>
    </div>
  );
};

export default App;
