import React, { useState } from "react";

const TodoInput = () => {
    const [formDetails, setFormDetails] = useState({
        text: "",
    });
    const { text } = formDetails;
    const formChange = (e) => {
        console.log(formDetails);
        setFormDetails({
            ...formDetails,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form
            onSubmit={(e) => handleSubmit(e)}
            className="d-flex justify-content-start"
        >
            <div className="flex-grow-1">
                <input
                    type="text"
                    className="form-control form-control-md"
                    id="exampleFormControlInput1"
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
