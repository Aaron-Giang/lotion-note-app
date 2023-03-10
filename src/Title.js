


function Title({sideBarTogg}){
    return(
        <div className="NavBar">

        <button id="noteToggle" onClick={sideBarTogg}>
        <p>&#9776;</p>
        </button>

        <div id="title">
            <p id="titleM">Lotion</p>
            <p id = "titleSmall">Like Notion, but worse</p>
            
        </div>

        <div></div>

        </div>


    )

}


export default Title;
