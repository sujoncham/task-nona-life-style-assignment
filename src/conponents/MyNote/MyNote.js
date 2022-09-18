import React from 'react';
import './MyNote.css';

const MyNote = ({show, notes}) => {
    return (
        <div className='my-container'>
            <h1>My Notes</h1>
            <div className='notes'>
                { notes && notes.map((note, index)=> <div className='mynote' key={index}>
                    <p>{note}</p>
                    <div>
                        <button className='noteBtn'>edit</button>
                        <button className='noteBtn'>del</button>
                    </div>
                </div> ) }
       
            </div>
            
        </div>
    );
};

export default MyNote;