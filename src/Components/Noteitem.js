import React from "react";

const NoteItem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-4">
      {" "}
      {/* 3 notes per row on medium+ screens */}
      <div className="card my-3 shadow border border-dark">
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between">
            <h5 className="card-title">{note.title}</h5>
            <div>
              <i className="fa-solid fa-trash mx-2 text-danger"></i>
              <i className="fa-solid fa-pen-to-square mx-2 text-primary"></i>
            </div>
          </div>
          <p className="card-text">
            {note.description} Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Ipsa, molestiae veniam adipisci, velit
            perspiciatis molestias, doloribus enim nihil sapiente iusto dolorum
            minus reprehenderit fugiat maxime. Animi reiciendis possimus
            quisquam laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
