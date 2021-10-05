import React, { useState } from "react";

const Form = () => {
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
    return (
        <div>
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
                <button>submit</button>
            </div>
        </div>
    );
};

export default Form;
