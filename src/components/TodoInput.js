import React from "react";

const TodoInput = (props) => {
    const { text } = props.formDetails;
    const formChange = (e) => {
        props.setFormDetails({
            ...props.formDetails,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        document.getElementById("input").value = "";
        console.log("New item added");
    };

    return (
        <form
            onSubmit={(e) => handleSubmit(e)}
            className="d-flex justify-content-start"
        >
            <div className="flex-grow-1">
                <input
                    id="input"
                    type="text"
                    className="form-control form-control-md"
                    placeholder="task name"
                    name="text"
                    onChange={formChange}
                    value={text}
                />
            </div>
            <div className="px-2">
                <button className="btn btn-md btn-primary">Submit</button>
            </div>
        </form>
    );
};

export default TodoInput;
