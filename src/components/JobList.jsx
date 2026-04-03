import { useState, useEffect } from "react";
import JobCard from "./JobCard"; 
import {supabase} from "../supabaseClient"



function JobList({ searchTerm , filterType }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const { data , error} = await supabase.from("jobs").select("*");
      if (error) {
        console.error("Error fetching jobs:", error);
        
      } else {
        setJobs(data);
      }
      setLoading(false);
    };
    fetchJobs();
    
  }, []);

  const filteredJobs = jobs.filter((job) => {
  const matchesSearch =
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase())

  const matchesFilter = filterType === '' || job.type === filterType

  return matchesSearch && matchesFilter
})

if(loading) return <div className="p-6 text-center">Loading...</div>

  return (
    <div className="p-6   grid grid-cols-3  gap-4">
      {filteredJobs.length === 0 ? (
        <div className="col-span-3 text-center bg-gray-100">No jobs found.</div>
      ) : (
        filteredJobs.map((job) => (
          <JobCard
            key={job.id}
            id={job.id}
            title={job.title}
            company={job.company}
            location={job.location}
            type={job.type}
          />
        ))
      )}

    </div>
  );
}

export default JobList;
