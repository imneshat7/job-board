import { useParams } from "react-router-dom";
function JobDetails() {
    const {id} = useParams();
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold ">Job Details Page</h1>
            <p>Job ID: {id}</p>
        </div>
    )
}


export default JobDetails;

