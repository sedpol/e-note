let notes = [
    { id: 1, title: "First Note", content: "Hello e-note, this is my first note." },
    { id: 2, title: "Second Note", content: "This is my second note" },
    { id: 3, title: "Second Note", content: "This is my second note" },
    { id: 4, title: "Second Note", content: "This is my second note" },
    { id: 5, title: "Second Note", content: "This is my second note" },
    { id: 6, title: "Second Note", content: "This is my second note" },
    { id: 7, title: "Second Note", content: "This is my second note" },
    { id: 8, title: "Second Note", content: "This is my second note" },
];

export const getNotesByUserId = async (userId) => [...notes];


export const addNotesByUserId = async (userId, note) => {
    notes.push(note);
    return [...notes];
}