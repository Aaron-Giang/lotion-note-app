import { Link } from "react-router-dom";

const createMarkup = (note) =>{
    var temp = document.createElement('div');
    temp.innerHTML = note.body;
    return temp.textContent || temp.innerText || '';
}

function SideBar({notes, onAddNote,getIndex,activeNote,setActiveNote}){
return(

    <div className="sideBar">

        <div className="navTitle">
            <h1>Notes</h1>
            <div className="sideNav-Add" onClick={onAddNote}>+</div>
        </div>


        <div className="sideNav-notes">
        {notes.map((note) => (
            <Link to = {"/notes/" + getIndex(note.key,notes)}>
            
            <div className={`sideNav-note ${note.key === notes[activeNote].key &&"active"}`}>
                <div className="sideNav-note-title">
                    <em> 
                        <u>{note.title} </u>
                        
                    </em>
                    
                </div>
            
                <small className="note-meta">
                    last Modified {note.lastModified}
                </small>
                <p dangerouslySetInnerHTML={ { __html: createMarkup(note) }}></p>


       
                
            </div>
            
            </Link>
        ))}
        </div>
    </div>




)


}

export default SideBar;
