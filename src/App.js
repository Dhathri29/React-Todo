import React from "react";

import Form from "./components/Form";

function App() {
    const getTaskData = (task) => {
        console.log(task);
    };
    return (
        <div className="container-fluid text-center py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-7">
                        <Form handleGetTask={getTaskData} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
