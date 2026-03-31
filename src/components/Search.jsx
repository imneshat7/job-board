
function Search({ searchTerm, setSearchTerm }) {
    return (
    <div className=" h-10 p-6">
        <input 
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by title, company, location "
        className=" border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 w-[700px] mr-16"  
        />
    </div>
    );
}

export default Search;
