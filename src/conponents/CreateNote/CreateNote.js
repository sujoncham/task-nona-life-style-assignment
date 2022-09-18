import React from 'react';
import AddNote from '../AddNote/AddNote';
import './CreateNote.css';

const CreateNote = () => {
    return (
        <div>
            <div>
                <h1>Create notes</h1>
                <button className='createBtn'>Create <sup>+</sup></button>
            </div>
            <AddNote />
        </div>
    );
};

export default CreateNote;