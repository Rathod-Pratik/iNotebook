import React, { useEffect } from "react";
import { useContext } from "react";
import contextValue from "./contect/notes/noteContect";
import AddNote from "./AddNote";
import { useNavigate } from "react-router-dom";

const Notes = () => {
  let navigation = useNavigate();
  const context = useContext(contextValue);
  const {getnotes} = context;



  useEffect(() => {
    if (localStorage.getItem("token")) {
      getnotes();
    } else {
      navigation("/login");
    }
  }, []);
  const value = localStorage.getItem("name");
  return (
    <>
      <h1 className="text-black text-center mt-8 text-3xl">
        Account: {`${value}`}
      </h1>
      <AddNote />
    
    </>
  );
};

export default Notes;
