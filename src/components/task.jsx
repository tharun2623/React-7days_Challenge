import React, { useState } from "react";

function TaskList() {
    const [tasks, setTasks] = useState(['Study now', 'Sleep Soon', 'Eat Healthy']);
    const [newTask, setNewTask] = useState('');

    function handleInputChange(e) {
       setNewTask(e.target.value);
    }

    function handleAddTask() {
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    return(
        <div className="task-list-container">
            <h1>To Do List</h1>
            <div className="task-input-container">
                <input
                    placeholder="Enter task"
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button onClick={handleAddTask}>Add Task</button>
            </div>
            {tasks.length === 0 ? (
                <p className="empty-state">No tasks yet. Add some tasks!</p>
            ) : (
                <ul className="task-list">
                    {tasks.map((task, index) => (
                        <li key={index} className="task-item">
                            <span className="task-text">{task}</span>
                            <button 
                                className="delete-btn"
                                onClick={() => deleteTask(index)}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default TaskList;