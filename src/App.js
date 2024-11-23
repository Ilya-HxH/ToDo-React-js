import React, { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import FilterTabs from './components/FilterTabs';
import SearchBar from './components/SearchBar';

function App() {
    
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    const addTodo = (task) => {
        const newTodo = { id: Date.now(), task, completed: false };
        setTodos([...todos, newTodo]);
    };

    const toggleComplete = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const filteredTodos = todos.filter(todo => {
        if (filter === 'active') return !todo.completed;
        if (filter === 'done') return todo.completed;
        return true;
    }).filter(todo => todo.task.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6">
                <h1 className="text-3xl font-semibold mb-4">Todo List <sup className="text-lg font-normal">{filteredTodos.length}</sup> more to do, {todos.filter(todo => todo.completed).length}</h1>
                <SearchBar setSearchTerm={setSearchTerm} />
                <FilterTabs setFilter={setFilter} />
                <TodoList todos={filteredTodos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
                <AddTodo addTodo={addTodo} />
            </div>
        </div>
    );
}

export default App;
