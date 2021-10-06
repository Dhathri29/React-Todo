const ListElement = () => {
    return (
        <div className="list-group-item d-flex">
            <p className="flex-grow-1 text-start"> #Task1 </p>
            <div className="btn-group">
                <button className="btn btn-primary mx-2">dn</button>
                <button className="btn btn-danger">del</button>
            </div>
        </div>
    );
};

export default ListElement;
