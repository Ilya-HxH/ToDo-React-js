import React, { useState } from 'react';

function AddTodo({ addTodo }) {
    
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            addTodo(task);
            setTask('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
            <input
                type="text"
                placeholder="What need to be done"
                className="flex-grow p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">Add Item</button>
        </form>
    );
}

export default AddTodo;
