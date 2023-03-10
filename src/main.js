import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Main({notes, onAddNote,activeNote,setActiveNote,saveBlock,deleteNote,editing,toggleEdit}){
const [value, setValue] = useState('');
const location = useLocation();

useEffect(() => {
    let url = window.location.pathname.split("/");
    if(url.length >=3 && !(isNaN(url[2])) ){
        
        if(notes.length > activeNote ){
            setActiveNote(url[2]);
            document.getElementById("main-titleSet").value = notes[url[2]].title ;
            setValue(notes[url[2]].body)
            document.getElementById("main-Date").innerText = notes[url[2]].lastModified;
        }
    }else{
        setActiveNote(0);
    }
    console.log(url);
    //setValue(notes[activeNote]);
}, [location,editing]);


if(notes.length <=0 ){// no notes in 
    return(
    <div className='no-active-note'>
        Select a note, or create a new one.
    </div>

    )
}

if(editing === false){

    return (
        <div className="main">
    <div className="main-title">
        <input type="text" id='main-titleSet' ></input>

        <div className="main-buttonHolder"> 

        <button className="main-buttons" id = "main-SaveButton" onClick={ () =>saveBlock(activeNote,document.getElementById('main-titleSet').value,value) } >save</button>
        <button className="main-buttons" onClick={() => deleteNote(notes[activeNote].key)}>delete</button>
        </div>
    </div>
    <div id='main-Date'></div>
    <div className='mainBody'>
    <ReactQuill theme="snow" value={value} onChange={setValue} ></ReactQuill>
    </div>
    
</div>

)
}else{

    return(
    <div className="main">
    <div className="main-title">
        <div type="text" id='main-titleSet' dangerouslySetInnerHTML={ { __html: notes[activeNote].title } } ></div>

        <div className="main-buttonHolder"> 

        <button className="main-buttons" id = "main-SaveButton" onClick={ toggleEdit } >edit</button>
        <button className="main-buttons" onClick={() => deleteNote(notes[activeNote].key)}>delete</button>
        </div>
    </div>
    <div id='main-Date'></div>
    <div className='mainBody'>
    <div dangerouslySetInnerHTML={ { __html: notes[activeNote].body } }></div>
    </div>
    
</div>




    )
}




}



export default Main;
