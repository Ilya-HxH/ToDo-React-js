import React from 'react';

function FilterTabs({ setFilter }) {
    return (
        <div className="flex gap-4 mt-4">
            <button onClick={() => setFilter('all')} className="text-blue-600 hover:underline border-2 rounded px-1.5 border-blue-600 ">All list</button>
            <button onClick={() => setFilter('active')} className="text-blue-600 hover:underline border-2 rounded px-1.5 border-blue-600">Active list</button>
            <button onClick={() => setFilter('done')} className="text-blue-600 hover:underline border-2 rounded px-1.5 border-blue-600">Done list</button>
        </div>
    );
}

export default FilterTabs;
