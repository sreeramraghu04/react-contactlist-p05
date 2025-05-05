import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="max-w-md mx-auto mb-6">
  <form className="flex shadow-md rounded-md overflow-hidden">
    <input
      type="text"
      placeholder="Search here...."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full px-4 py-3 border-none outline-none text-gray-500"
    />
    <button
      className="bg-violet-400 text-white px-6 hover:bg-violet-500 transition duration-300 cursor-pointer"
    >
      Search
    </button>
  </form>
</div>

  );
};

export default SearchBar;
