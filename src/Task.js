const Task = ({ task, deleteTask }) => {
  return (
    <div className="task">
      <h2>{task.taskName}</h2>
      <button onClick={() => deleteTask(task.id)}> X </button>
    </div>
  );
};
export default Task;
