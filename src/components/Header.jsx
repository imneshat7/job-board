import Search from "./Search";
import Filter from "./Filter";
function Header({ searchTerm, setSearchTerm, filterType, setFilterType }) {
  return (
    <header className="bg-green-600 text-green-800 px-6 py-4 flex shadow-lg  rounded">
      <div className="flex justify-between items-center w-full">
        <div>
          <h1 className="text-2xl bg-green-900 text-yellow-300 px-4 py-2 rounded">
          ExecutiveHire
        </h1>
        </div>
        
        <div className="flex  flex justify-between">
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <Filter filterType={filterType} setFilterType={setFilterType} />
        </div>
        <div>
          <nav className="flex gap-6 px-1 py-1  rounded-lg flex ">
          <a href="#" className="bg-yellow-400 px-4 py-2 rounded">
            Jobs
          </a>
          <a href="#" className="bg-yellow-400 px-4 py-2 rounded">
            Post a Job
          </a>
        </nav>

        </div>
        
      </div>
    </header>
  );
}

export default Header;
