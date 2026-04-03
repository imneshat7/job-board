import { useParams,useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

function JobDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJob = async () => {
            const { data, error } = await supabase
            .from("jobs")
            .select("*")
            .eq("id",id)
            .single();
            if (error) {
                console.error("Error fetching job:", error);
            } else {
                setJob(data);
            }
            setLoading(false);

        };
        fetchJob();
    }, [id]);

    if (loading) return 
            <div className="p-6">
                <h1 className="text-green">Loading.....</h1>
            </div>;
    if (!job) return <div className="p-6">Job not found.</div>;        
    
    return (
        <div className="p-6">
            <button
                onClick={() => navigate("/")}
                className="mb-4 bg-green-500 text-white px-4 py-2 rounded"
            >
                ← Back to Jobs
            </button>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h1 className="text-2xl font-bold mb-2">{job.title}</h1>
                <p className="text-gray-600 mb-1">{job.company}</p>
                <p className="text-gray-500 mb-1">{job.location}</p>
                <span className="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded">
                    {job.type}
                </span>
                <div className="mt-6">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">Apply Now</button>
                </div>
            </div>
            
        </div>
    );
}

export default JobDetails;
