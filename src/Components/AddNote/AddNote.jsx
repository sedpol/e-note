import addIcon from "../../assets/img/plus.svg";
import "./AddNote.css";

export const AddNote = (props) => (
  <img
    onClick={props.addNoteHandler}
    className="add-note"
    src={addIcon}
    alt="Add Note"
  />
);
