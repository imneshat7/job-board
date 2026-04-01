import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import jobsData from "../data/jobs";

function JobDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const job = jobsData.find((job) => job.id === Number(id));

    if (!job) {
        return (
            <div className="p-6">
                <h1 className="text-green">Job Not Found</h1>
            </div>
        );
    }
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
            </div>
            <h1 className="text-2xl font-bold ">Job Details Page</h1>
            <p>Job ID: {id}</p>
        </div>
    );
}

export default JobDetails;
