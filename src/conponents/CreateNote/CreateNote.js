import React, { useState } from 'react';
import AddNote from '../AddNote/AddNote';
import MyNote from '../MyNote/MyNote';
import './CreateNote.css';

const CreateNote = () => {
    const [show, setShow] = useState(false);
 
    const handleCreate = () =>{
        setShow(true);
    }
    const handleClose = () =>{
        setShow(false);
    }

    return (
        <div>
            <div>
                <h1>Create notes</h1>
                <button onClick={handleCreate} className='createBtn'>Create <sup>+</sup></button>
                {show && show ? <button onClick={handleClose} className='createBtn'>Close</button>: ''}
            </div>
            {show && show ? <AddNote show={show} setShow={setShow} /> : ''}
            <MyNote show={show} />
        </div>
    );
};

export default CreateNote;