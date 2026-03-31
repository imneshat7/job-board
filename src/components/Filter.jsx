function Filter({ filterType, setFilterType }) {
return (
    <div className="p-6  w-64 flex gap-4">
    <select
        value={filterType}
        onChange={(e) => setFilterType(e.target.value)}
        className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 mr-[300px] w-[200px]"
    >
        <option value="">All Types</option>
        <option value="Full Time">Full Time</option>
        <option value="Part Time">Part Time</option>
        <option value="Contract">Contract</option>
    </select>
    </div>
    );
}

export default Filter;