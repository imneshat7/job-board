import { useNavigate } from "react-router-dom"
function JobCard({ title, company, location, type }) {

  const navigate = useNavigate();
  return (
    <div className="bg-white border border-gray-200 rounded-xl
      p-4 shadow-sm flex flex-col justify-between min-h-[400px]">
      <div>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600">{company}</p>
        <p className="text-gray-500">{location}</p>
        <span className="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded">
          {type}
        </span>
      </div>
      <button
      onClick={() => navigate('/job/${id}')}
      className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full">
        View Job
      </button>
    </div>
  )
}

export default JobCard
