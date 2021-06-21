import "./Note.css";
export const Note = (props) => (
  <div className="note">
    <h2>{props.note.title}</h2>
    <p>{props.note.content}</p>
  </div>
);
