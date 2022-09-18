import React, { useEffect, useState } from 'react';
import AddNote from '../AddNote/AddNote';
import MyNote from '../MyNote/MyNote';
import './CreateNote.css';

const getLocalNotes = ()=>{
    let list = localStorage.getItem('lists');
    console.log(list);
    if(list){
        return JSON.parse(localStorage.getItem('lists'));
    } else{
        return [];
    }
}

const CreateNote = () => {
    const [show, setShow] = useState(false);
    const [addNote, setAddNote] = useState('');
    const [notes, setNotes] = useState(getLocalNotes());

    const handleInputNote = () =>{
        if(!addNote){
            console.log('data dont get');
        } else{
            setNotes([...notes, addNote]);
            setAddNote('')
        }
       
    }
 
    const handleCreate = () =>{
        setShow(true);
    }
    const handleClose = () =>{
        setShow(false);
    }

    useEffect(()=>{
        localStorage.setItem('lists', JSON.stringify(notes));
    }, [notes])

    return (
        <div>
            <div>
                <h1>Create notes</h1>
                {show && show ? "" : <button onClick={handleCreate} className='createBtn'>Create <sup>+</sup></button>}
                {show && show ? <button onClick={handleClose} className='createBtn'>Close</button>: ''}
            </div>
            {show && show ? <AddNote handleInputNote={handleInputNote} addNote={addNote} setAddNote={setAddNote} /> : ''}
            <MyNote notes={notes} show={show} />
        </div>
    );
};

export default CreateNote;