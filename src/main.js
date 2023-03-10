import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import React, { useState } from 'react';
function Main(){
const [value, setValue] = useState('');
return (
<div className="main">
    <div className="main-title">
        <input type="text"></input>

        <div className="main-buttonHolder"> 

        <button className="main-buttons">edit</button>
        <button className="main-buttons">delete</button>
        </div>
    </div>

    <div className='mainBody'>
    <ReactQuill theme="snow" value={value} onChange={setValue} ></ReactQuill>
    </div>
    
</div>

)
}

export default Main;
