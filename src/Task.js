const Task = ({ task, deleteTask, completeTask }) => {
  return (
    <div
      className="task"
      style={{ backgroundColor: task.completed ? "aquamarine" : "white" }}
    >
      <h2>{task.taskName}</h2>
      <button onClick={() => completeTask(task.id)} className="update">
        Completed
      </button>
      <button onClick={() => deleteTask(task.id)}> X </button>
    </div>
  );
};
export default Task;
