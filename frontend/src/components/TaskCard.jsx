import { useState } from 'react';
import { updateTask, deleteTask } from '../services/api';
import '../App.css';

const TaskCard = ({ task, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({
    title: task.title,
    description: task.description,
    status: task.status,
  });

  const handleUpdate = async () => {
    try {
      await updateTask(task._id, editedTask);
      onUpdate();
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTask(task._id);
      onDelete();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className={`task-card ${task.status.toLowerCase().replace(' ', '-')}`}>
      {isEditing ? (
        <div className="edit-form">
          <input
            type="text"
            value={editedTask.title}
            onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })}
          />
          <textarea
            value={editedTask.description}
            onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })}
          />
          <select
            value={editedTask.status}
            onChange={(e) => setEditedTask({ ...editedTask, status: e.target.value })}
          >
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <div className="task-meta">
            <span className="status">{task.status}</span>
            <span className="dates">
              {new Date(task.startDate).toLocaleDateString()} -{' '}
              {new Date(task.endDate).toLocaleDateString()}
            </span>
          </div>
          <div className="task-actions">
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskCard;