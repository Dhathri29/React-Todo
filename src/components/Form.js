import React, { useState } from "react";

const Form = (props) => {
    const { handleGetTask } = props;
    const [formDetails, setFormDetails] = useState({
        text: "",
    });
    const { text } = formDetails;
    const formChange = (e) => {
        setFormDetails({
            ...formDetails,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        handleGetTask(formDetails);
    };
    return (
        <form onSubmit={handleSubmit}>
            <h1> to-do app </h1>
            <div class="mb-3">
                <label
                    for="exampleFormControlInput1"
                    class="form-label"
                ></label>
                <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="task name"
                    name="text"
                    onChange={formChange}
                    value={text}
                />
            </div>
            <div>
                <button type="submit">submit</button>
            </div>
        </form>
    );
};

export default Form;
