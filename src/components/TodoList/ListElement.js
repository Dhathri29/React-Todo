import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ListElement = () => {
    return (
        <div className="list-group-item d-flex">
            <p className="flex-grow-1 text-start align-self-center m-0">
                {" "}
                #Task1{" "}
            </p>
            <div className="btn-group">
                <input
                    type="checkbox"
                    className="form-check-input align-self-center me-2"
                />
                <button className="btn btn-sm bg-transparent text-danger">
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </div>
    );
};

export default ListElement;
