import React from 'react';
import './AddNote.css';

const NoteField = () => {
    return (
        <div>
            <h1>Note Field</h1>
            <textarea name="" id="my-text" cols="30" rows="10" placeholder='write something here'></textarea>
            <br />
            <button className='add-note'>add note</button>
        </div>
    );
};

export default NoteField;