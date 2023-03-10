import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Main({notes, onAddNote,activeNote,setActiveNote,saveBlock,deleteNote}){
const [value, setValue] = useState('');
const location = useLocation();

useEffect(() => {
    let url = window.location.pathname.split("/");
    if(url.length >=3 && !(isNaN(url[2])) ){
        setActiveNote(url[2]);
        document.getElementById("main-titleSet").value = notes[url[2]].title ;
        setValue(notes[url[2]].body)
        console.log(url[2]);
        console.log(notes[url[2]].title );

        console.log("setted");
    }
    console.log(url);
    //setValue(notes[activeNote]);
}, [location]);


if(notes.length <=0 ){// no notes in 
    return(
    <div className='no-active-note'>
        Select a note, or create a new one.
    </div>

    )
}

return (
<div className="main">
    <div className="main-title">
        <input type="text" id='main-titleSet' ></input>

        <div className="main-buttonHolder"> 

        <button className="main-buttons" id = "main-SaveButton" onClick={ () =>saveBlock(activeNote,document.getElementById('main-titleSet').value,value) } >save</button>
        <button className="main-buttons" onClick={() => deleteNote(notes[activeNote].key)}>delete</button>
        </div>
    </div>

    <div className='mainBody'>
    <ReactQuill theme="snow" value={value} onChange={setValue} ></ReactQuill>
    </div>
    
</div>

)
}

export default Main;
