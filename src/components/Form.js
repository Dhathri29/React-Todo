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
        <div className="d-flex justify-content-center">
            <div>
                <label for="exampleFormControlInput1" className="form-label">
                    <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="task name"
                        name="text"
                        onChange={formChange}
                        value={text}
                    />
                </label>
            </div>
            <div>
                <button className="btn btn-primary mx-2">submit</button>
            </div>
        </div>
    );
};

export default Form;
