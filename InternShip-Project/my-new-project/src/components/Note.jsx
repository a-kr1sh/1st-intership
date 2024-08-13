import React from "react";
import {CgBackspace} from "react-icons/cg";

function Note(props){

    function handleClick(){
        props.onDelete(props.id);
    };

    return (

        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick}>
                <CgBackspace />
            </button>
        </div>
    );
};

export default Note;