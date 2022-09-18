import React from 'react';
import './MyNote.css';

const MyNote = ({show}) => {
    return (
        <div className='my-container'>
            <h1>My Notes</h1>
            { show && show ? (<div className='notes'>
                <div className='mynote'>
                    <p>This is my note and tommorow, I am going submit this assigment</p>
                    <div>
                        <button className='noteBtn'>edit</button>
                        <button className='noteBtn'>del</button>
                    </div>
                </div>
                <div className='mynote'>
                    <p>This is my note and tommorow, I am going submit this assigment</p>
                    <div>
                        <button className='noteBtn'>edit</button>
                        <button className='noteBtn'>del</button>
                    </div>
                </div>
                <div className='mynote'>
                    <p>This is my note and tommorow, I am going submit this assigment</p>
                    <div>
                        <button className='noteBtn'>edit</button>
                        <button className='noteBtn'>del</button>
                    </div>
                </div>
                <div className='mynote'>
                    <p>This is my note and tommorow, I am going submit this assigment</p>
                    <div>
                        <button className='noteBtn'>edit</button>
                        <button className='noteBtn'>del</button>
                    </div>
                </div>
                <div className='mynote'>
                    <p>This is my note and tommorow, I am going submit this assigment</p>
                    <div>
                        <button className='noteBtn'>edit</button>
                        <button className='noteBtn'>del</button>
                    </div>
                </div>
                <div className='mynote'>
                    <p>This is my note and tommorow, I am going submit this assigment</p>
                    <div>
                        <button className='noteBtn'>edit</button>
                        <button className='noteBtn'>del</button>
                    </div>
                </div>
                <div className='mynote'>
                    <p>This is my note and tommorow, I am going submit this assigment</p>
                    <div>
                        <button className='noteBtn'>edit</button>
                        <button className='noteBtn'>del</button>
                    </div>
                </div>
            
            </div>) : (<div>note not created</div>)
            }
        </div>
    );
};

export default MyNote;