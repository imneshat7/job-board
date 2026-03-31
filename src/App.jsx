import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import JobList from "./components/JobList";
import Search from "./components/Search";
import Filter from "./components/Filter";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState('')

  return (
    <div>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} filterType={filterType} setFilterType={setFilterType}
      
      />
      <JobList searchTerm={searchTerm } filterType={filterType} />
    </div>
  );
}

export default App;
