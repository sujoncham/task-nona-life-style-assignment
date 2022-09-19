import React from 'react';
import './MyNote.css';

const MyNote = ({ notes, setNotes, removeAll, editNote}) => {

    const handleDelete = (id)=>{
        const delNote = notes.filter((note, index)=>index !== id);
        setNotes(delNote);
    }

    return (
        <div className='my-container'>
            <h1>My Notes: {} <button className='clearBtn' onClick={removeAll}>Clear notes</button></h1>
            <div className='notes'>
                { notes && notes.map((note, index)=> <div className='mynote' index={index} note={note}>
                    <p>{note}</p>
                    <div>
                        <button onClick={()=>editNote(index)} className='noteBtn'>edit</button>
                        <button onClick={()=>handleDelete(index)} className='noteBtn'>del</button>
                    </div>
                </div> ) }
                
       
            </div>
            
        </div>
    );
};

export default MyNote;