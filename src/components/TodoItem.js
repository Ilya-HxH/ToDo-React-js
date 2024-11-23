import React from 'react';

function TodoItem({ todo, toggleComplete, deleteTodo }) {
    
    return (
        <li className="flex justify-between items-center p-2 border-b border-gray-200 hover:bg-gray-50">
            <span
                className={`flex-grow cursor-pointer ${todo.completed ? 'line-through text-gray-500' : ''}`}
                onClick={() => toggleComplete(todo.id)}
            >
                {todo.task}
            </span>
            <div className="flex items-center gap-2">
                <button
                    onClick={() => toggleComplete(todo.id)}
                    className="text-green-500 hover:text-green-700 transition"
                >
                    ✔
                </button>
                <button
                    onClick={() => deleteTodo(todo.id)}
                    className="text-red-500 hover:text-red-700 transition"
                >
                    🗑
                </button>
            </div>
        </li>
    );
}

export default TodoItem;
