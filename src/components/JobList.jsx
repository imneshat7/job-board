import { useState, useEffect } from "react";
import JobCard from "./JobCard"; 
import jobsData from "../data/jobs";


function JobList({ searchTerm , filterType }) {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(jobsData);
  }, []);

  const filteredJobs = jobs.filter((job) => {
  const matchesSearch =
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase())

  const matchesFilter = filterType === '' || job.type === filterType

  return matchesSearch && matchesFilter
})

  return (
    <div className="p-6   grid grid-cols-3  gap-4">
      {filteredJobs.map((job) => (
        <JobCard
          key={job.id}
          id={job.id}
          title={job.title}
          company={job.company}
          location={job.location}
          type={job.type}
        />
      ))}
    </div>
  );
}

export default JobList;
