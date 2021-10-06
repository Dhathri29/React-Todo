import React from "react";

import Form from "./components/Form";

function App() {
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
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
