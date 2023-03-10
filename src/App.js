import SideBar from "./SideBar";
import Main from "./main";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Title from './Title';

function App() {
  const [notes,setNotes] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [activeNote, setActiveNote] = useState(false);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const formatDate = (when) => {
      const formatted = new Date(when).toLocaleString("en-US", options);
      if (formatted === "Invalid Date") {
          return "";
      }
      return formatted;
  }; 

  const onAddNote = () =>{
    
    const newNote = {
      key: uuidv4(),
      title:"Untitled Note",
      body:"",
      lastModified:formatDate(Date.now()),
      dateCreated:formatDate(Date.now()),


    };

    setNotes([newNote, ...notes]);

  };

  
  const sideBarTogg = () => {
    setToggle(!toggle);
  };

  const getIndex = (id) => {
    for(let x = 0 ; x < notes.length;x++){
      if(notes[x].key === id){
        return x;
      }
    }
  }
  return (
    <div>

    <Title sideBarTogg={sideBarTogg}/>
    <div className="contents">
      
    {toggle &&
    <SideBar notes={notes} 
    onAddNote={onAddNote} 
    getIndex={getIndex} 
    activeNote = {activeNote}
    setActiveNote = {setActiveNote}
    />
    }
    <Main />
    </div>

    </div>

  
  );
}

export default App;

