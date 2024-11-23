import React from 'react';

function SearchBar({ setSearchTerm }) {

    return (
        <input
            type="text"
            placeholder="type to search"
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 mb-4"
            onChange={(e) => setSearchTerm(e.target.value)}
        />
    );
}

export default SearchBar;
