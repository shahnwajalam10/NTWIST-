import { useEffect, useState } from 'react';
import '../App.css';

const GanttChart = ({ tasks }) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [timeRange, setTimeRange] = useState({ min: 0, max: 0 });

  useEffect(() => {
    if (tasks.length > 0) {
      const minDate = new Date(Math.min(...tasks.map(t => new Date(t.startDate))));
      const maxDate = new Date(Math.max(...tasks.map(t => new Date(t.endDate))));
      setTimeRange({
        min: minDate,
        max: maxDate,
        range: maxDate - minDate
      });
    }
  }, [tasks]);

  // Calculate task positions
  const getTaskPosition = (task) => {
    if (!timeRange.range) return { left: 0, width: 0 };

    const start = ((new Date(task.startDate) - timeRange.min) / timeRange.range * 100);
    const end = ((new Date(task.endDate) - timeRange.min) / timeRange.range * 100);
    const width = Math.max(1, end - start); // Ensure minimum width of 1%

    return { left: start, width };
  };

  // Calculate today's position
  const getTodayPosition = () => {
    if (!timeRange.range) return 0;
    const today = new Date();
    return ((today - timeRange.min) / timeRange.range) * 100;
  };

  return (
    <div className="gantt-chart">
      <h3>Project Timeline</h3>
      <div className="chart-container">
        {tasks.map((task) => {
          const { left, width } = getTaskPosition(task);
          return (
            <div
              key={task._id}
              className="gantt-task"
              style={{
                left: `${left}%`,
                width: `${width}%`,
                backgroundColor: getStatusColor(task.status)
              }}
            >
              <span className="task-title">{task.title}</span>
              <span className={`task-status ${task.status.toLowerCase().replace(' ', '-')}`}>
                {task.status}
              </span>
            </div>
          );
        })}
        <div 
          className="today-line" 
          style={{ left: `${getTodayPosition()}%` }}
        />
      </div>
      <div className="timeline-labels">
        {timeRange.min && (
          <>
            <span>{timeRange.min.toLocaleDateString()}</span>
            <span>{timeRange.max.toLocaleDateString()}</span>
          </>
        )}
      </div>
    </div>
  );
};

// Helper function to get color based on status
const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case 'to do':
      return '#3498db';
    case 'in progress':
      return '#f39c12';
    case 'done':
      return '#2ecc71';
    default:
      return '#95a5a6';
  }
};

export default GanttChart;