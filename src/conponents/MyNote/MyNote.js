import React from 'react';
import './MyNote.css';

const MyNote = ({searchNote, notes, setNotes}) => {

    const handleDelete = (id)=>{
        const delNote = notes.filter((note, index)=>index !== id);
        setNotes(delNote);
    }

    return (
        <div className='my-container'>
            <h1>My Notes: {notes.length}</h1>
            <div className='notes'>
                { searchNote && searchNote.map((note, index)=> <div className='mynote' key={index}>
                    <p>{note}</p>
                    <div>
                        <button className='noteBtn'>edit</button>
                        <button onClick={()=>handleDelete(index)} className='noteBtn'>del</button>
                    </div>
                </div> ) }
       
            </div>
            
        </div>
    );
};

export default MyNote;