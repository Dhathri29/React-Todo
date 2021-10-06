import React, { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList/TodoList";

function App() {
    const [formDetails, setFormDetails] = useState({
        text: "",
    });

    useEffect(() => {
        console.log(formDetails);
    }, [formDetails]);

    return (
        <div className="container-fluid text-center py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-7">
                        <h1 className="h1"> to-do app </h1>
                    </div>
                </div>
                <div className="row justify-content-center mt-5">
                    <div className="col-12 col-md-10 col-lg-7">
                        <TodoInput
                            formDetails={formDetails}
                            setFormDetails={setFormDetails}
                        />
                    </div>
                </div>
            </div>
            <div className="row justify-content-center mt-5">
                <div className="col-12 col-md-10 col-lg-7">
                    <TodoList />
                </div>
            </div>
        </div>
    );
}

export default App;
