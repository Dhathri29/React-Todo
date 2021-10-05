import React from "react";

function Form() {
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
                />
            </div>
            <div>
                <button>submit</button>
            </div>
        </div>
    );
}

export default Form;
