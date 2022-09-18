import React from 'react';
import MyNote from '../MyNote/MyNote';
import './AddNote.css';

const NoteField = () => {
    return (
        <div>
            <div className='add-container'>
                <h1>Add Note</h1>
                <textarea name="" id="my-text" cols="30" rows="10" placeholder='write something here'></textarea>
                <br />
                <button className='add-note'>add note</button>
            </div>
            <MyNote />
        </div>
    );
};

export default NoteField;