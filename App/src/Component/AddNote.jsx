import { useContext } from "react";
import contextValue from "./contect/notes/noteContect";
import { useState } from "react";

const addNote = () => {
  const context = useContext(contextValue);
  const { addNote } = context;

  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag,note.time);
    setNote({
      title: "",
      description: "",
      tag: "",
    })
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  note.time=Date.now();
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-lg">
    <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Add Your Notes</h1>

    <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
      Organize your thoughts, ideas, and reminders securely with our note-taking app. Start adding your notes now!
    </p>

    <form className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
      <p className="text-center text-lg font-medium">Add a new note</p>

      {/* Title Input */}
      <div>
        <label htmlFor="title" className="sr-only">Title</label>
        <div className="relative">
          <input
            type="text"
            id="title"
            name="title"
            value={note.title}
            onChange={onChange}
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter note title"
            required
          />
        </div>
      </div>

      {/* Tag Input */}
      <div>
        <label htmlFor="tag" className="sr-only">Tag</label>
        <div className="relative">
          <input
            type="text"
            id="tag"
            name="tag"
            value={note.tag}
            onChange={onChange}
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter a tag"
            required
          />
        </div>
      </div>

      {/* Description Textarea */}
      <div>
        <label htmlFor="description" className="sr-only ">Description</label>
        <div className="relative">
          <textarea
            id="description"
            name="description"
            value={note.description}
            onChange={onChange}
            rows="6"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter note description"
            required
          ></textarea>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        onClick={handleClick}
        className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
      >
        Add Note
      </button>
    </form>
  </div>
</div>

    </>
  );
};

export default addNote;
