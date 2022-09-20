import React from 'react';
import './MyNote.css';

const MyNote = ({ notes, setNotes, removeAll, editNote}) => {

    const handleDelete = (id)=>{
        const delNote = notes.filter((note, index)=>index !== id);
        setNotes(delNote);
    }

    return (
        <div className='my-container'>
            <div className='note-header'> 
                <span className='my-text'>My Notes: {notes.length}</span> 
                <button className='clearBtn' onClick={removeAll}>Clear notes</button>
            </div>
            <div className='notes'>
                { notes && notes.map((note, index)=> <div className='mynote' key={index} note={note}>
                    <p>{note}</p>
                    <div className='buttonGap'>
                        <button onClick={()=>editNote(index)} className='noteBtn'>edit</button>
                        <button onClick={()=>handleDelete(index)} className='noteBtn'>del</button>
                    </div>
                </div> ) }
                
       
            </div>
            
        </div>
    );
};

export default MyNote;