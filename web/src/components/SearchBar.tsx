"use client"
import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="flex items-center border border-gray-300 rounded p-1">
      {!expanded && (
        <button onClick={handleExpand} className="p-2 focus:outline-none">
          <Search className="h-6 w-6 text-gray-500" />
        </button>
      )}
      {expanded && (
        <form onSubmit={(e) => { e.preventDefault(); }} className="flex items-center ">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 p-2 focus:outline-none rounded-lg"
          />
          <button type="submit" className="p-2 focus:outline-none">
            <Search className="h-6 w-6 text-black" />
          </button>
        </form>
      )}
    </div>
  );
};

export default SearchBar;
