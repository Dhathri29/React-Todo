import React from "react";

const Tasks = (props) => {
    const { tasks } = props;

    console.log(tasks);
    return (
        <div>
            {tasks.map((task) => (
                <li>{task.text}</li>
            ))}
        </div>
    );
};
export default Tasks;
