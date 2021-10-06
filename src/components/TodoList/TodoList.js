import React from "react";
import ListElement from "./ListElement";

const TodoList = () => {
    return (
        <div className="list">
            <ul className="list-group">
                <ListElement />
                <ListElement />
                <ListElement />
                <ListElement />
            </ul>
        </div>
    );
};

export default TodoList;
