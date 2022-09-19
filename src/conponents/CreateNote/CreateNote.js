import React, { useEffect, useState } from 'react';
import AddNote from '../AddNote/AddNote';
import MyNote from '../MyNote/MyNote';
import SearchField from '../SearchField/SearchField';
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
            alert('Please, Add note');
            return;
        } else{
            setNotes([...notes, addNote]);
            setAddNote('');
        }
       
    }
 
    const handleCreate = () =>{
        setShow(true);
    }
    const handleClose = () =>{
        setShow(false);
    }

    // const handleSearch = text =>{
    //     const filtered = notes.filter(note => note.includes(text));
    //     setSearchNote(filtered);
    // }

    const editNote = id => {
        const newNote = notes.find((elem, index) => index === id);
        setNotes(newNote);
    }


    useEffect(()=>{
        localStorage.setItem('lists', JSON.stringify(notes));
        // setSearchNote(notes);
    }, [notes]);

    const removeAll = () =>{
        setNotes([]);
    }

    return (
        <div className='main-container'>
            <div>
                <SearchField />

                <div className='create-note'>
                    <h1>Create notes</h1>
                    <div>
                        {show && show ? "" : <button onClick={handleCreate} className='createBtn'>Create <sup>+</sup></button>}
                        {show && show ? <button onClick={handleClose} className='createBtn'>Close</button>: ''}
                    </div>
                </div>

                {show && show ? <AddNote handleInputNote={handleInputNote} addNote={addNote} setAddNote={setAddNote} /> : ''}
                
                <MyNote editNote={editNote} setNotes={setNotes}  notes={notes} removeAll={removeAll} />

            </div>
        </div>
    );
};

export default CreateNote;