import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import JobList from "./components/JobList";
import JobDetails from "./components/JobDetails";
import { Routes, Route } from "react-router-dom";


function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState('')

  return (
    <div>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} filterType={filterType} setFilterType={setFilterType}/>
      <JobList searchTerm={searchTerm } filterType={filterType} />
      <Routes>
        <Route path="/" element={<JobList searchTerm={searchTerm} filterType={filterType} />} />
        <Route path="/job/:id" element={JobDetails} />
      </Routes> 
    </div>
  );
}

export default App;
