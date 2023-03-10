import { Link } from "react-router-dom";



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
            
                <p dangerouslySetInnerHTML={ { __html: note.body.substring(0,100) }}></p>

                <small className="note-meta">
                    last Modified {note.lastModified}
                </small>

                <p>
                    id {note.key}
                </p>
                
            </div>
            
            </Link>
        ))}
        </div>
    </div>




)


}

export default SideBar;
