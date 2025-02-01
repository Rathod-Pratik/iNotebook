import React from "react"; 
import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import contextValue from './contect/notes/noteContect';

const NoteItem = (props) => {
  const context = useContext(contextValue);
  const { deleteNode } = context;
  const { updatenote,note } = props;

  return (
    <div>
    <article className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6">
      <span className="inline-block rounded bg-blue-600 p-2 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>
      </span>
  
      <a href="#">
        <h3 className="mt-0.5 text-lg font-medium text-gray-900">
          Title: {note.title}
        </h3>
      </a>
      <p className="mt-2 text-sm text-gray-500">
        Tag: {note.tag}
      </p>
  
      <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
        Desc: {note.description}
      </p>

  
      <div className="flex gap-2 mt-4">
        <a
          onClick={() => { deleteNode(note.id); }}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-400"
        >
          <MdDelete />
        </a>
        <a
          onClick={() => updatenote(props.note)}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-400"
        >
          <FaRegEdit />
        </a>
      </div>

        
      <div className="flex flex-row justify-start gap-1 text-gray-500 mt-2">
      <span className="text-[13px]">Date:{note.date}</span>
      <span className="text-[13px]">Time : {note.time}</span>
      </div>
    </article>
  </div>
  
  );
};

export default NoteItem;
