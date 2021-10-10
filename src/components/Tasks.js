import React from "react";

const Tasks = (props) => {
    const { tasks } = props;

    console.log(props.tasks.task.text);
    return <div>hello</div>;
};
export default Tasks;
