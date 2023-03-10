import SideBar from "./SideBar";
import Main from "./main";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Title from './Title';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function App() {
  const [notes,setNotes] = useState(JSON.parse(localStorage.notes) || []);
  const [toggle, setToggle] = useState(true);
  const [activeNote, setActiveNote] = useState(0);
  const[editing,setEditing] = useState(false);
  useEffect(()=>{

    localStorage.setItem("notes",JSON.stringify(notes));
  },[notes]);


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

  const saveBlock = (index,inputTitle,inputText) =>{
    console.log(index);
    console.log(notes.length);

    if(notes.length >= index && notes.length > 0){
      const newNote = {
        key: notes[index].key,
        title:inputTitle,
        body:inputText,
        lastModified:formatDate(Date.now()),
        dateCreated:notes[index].dateCreated,
  
  
      };
      onUpdateNote(newNote);
      }

      toggleEdit();
    }
    
    const deleteNote = (key) =>{

      setNotes(notes.filter((note) => note.key !== key));
      console.log(activeNote);

      if (activeNote >0){
        setActiveNote(activeNote-1);
      }
    } 

    
    //updats note list to a new note list
    const onUpdateNote = (updatedNote) =>{
      const updatedNoteArray = notes.map((noteee)=>{
        if (noteee.key == notes[activeNote].key){
          return updatedNote;
        }
        return noteee;
      });
      
      setNotes(updatedNoteArray);
    };
    
  
    const toggleEdit =()=>{
      if (editing === true){
        setEditing(false);
      }else{
        setEditing(true);
      }
    }

  return (
    <div>

    <Title sideBarTogg={sideBarTogg}/>
    <div className="contents">
      
    {toggle &&
    <SideBar 
    notes={notes} 
    onAddNote={onAddNote} 
    getIndex={getIndex} 
    activeNote ={activeNote}
    setActiveNote={setActiveNote}
    />
    }
    <Main 
    notes={notes} 
    onAddNote={onAddNote}
    activeNote ={activeNote}
    setActiveNote={setActiveNote}
    saveBlock={saveBlock}
    deleteNote ={deleteNote}
    editing={editing}
    toggleEdit={toggleEdit}
    />
    </div>

    </div>

  
  );
}

export default App;

