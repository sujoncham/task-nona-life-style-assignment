import React from 'react';
import './AddNote.css';

const NoteField = ({addNote, handleInputNote, setAddNote}) => {
    

    return (
        <div>
            <div className='add-container'>
               
                <textarea 
                type='text'
                className='add-text'
                cols="30" rows="10"
                value={addNote}
                placeholder='write something here'
                onChange={(e)=>setAddNote(e.target.value)}
                ></textarea>
                <br />
                <button onClick={handleInputNote} className='add-note'>add note</button>
            </div>
        </div>
    );
};

export default NoteField;