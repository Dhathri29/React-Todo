import React, { useState } from "react";

import Form from "./components/Form";
import Tasks from "./components/Tasks";

function App() {
    const [passTaskData, setPassTaskData] = useState([]);
    console.log(passTaskData);
    const getTaskData = (task) => {
        setPassTaskData([...passTaskData, task]);
    };

    return (
        <div className="container-fluid text-center py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-7">
                        <Form handleGetTask={getTaskData} />
                        <Tasks tasks={passTaskData} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
