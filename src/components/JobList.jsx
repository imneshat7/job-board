import { useState, useEffect } from "react";
import JobCard from "./JobCard"; 

const jobsData = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Google",
    location: "Remote",
    type: "Full Time",
  },
  {
    id: 2,
    title: "React Developer",
    company: "Flipkart",
    location: "Bangalore",
    type: "Full Time",
  },
  {
    id: 3,
    title: "UI Developer",
    company: "Infosys",
    location: "Hyderabad",
    type: "Part Time",
  },
  {
    id: 4,
    title: "JavaScript Developer",
    company: "Razorpay",
    location: "Remote",
    type: "Contract",
  },
  {
    id: 5,
    title: "Data Analyst",
    company: "Accenture",
    location: "Pune",
    type: "Hybrid",
  },
  {
    id: 6,
    title: "Data Scientist",
    company: "TCS",
    location: "Mumbai",
    type: "Full Time",
  },
];

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
