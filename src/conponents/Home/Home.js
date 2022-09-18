import React, { useEffect, useState } from 'react';
import CreateNote from '../CreateNote/CreateNote';
import MyNote from '../MyNote/MyNote';
import SearchField from '../SearchField/SearchField';


const getLocalNotes = ()=>{
    let list = localStorage.getItem('lists');
    console.log(list);
    if(list){
        return JSON.parse(localStorage.getItem('lists'));
    } else{
        return [];
    }
}

const Home = () => {

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
            <SearchField />
            <CreateNote handleCreate={handleCreate} handleClose={handleClose} />
            
                <MyNote notes={notes} show={show} handleInputNote={handleInputNote} />
        </div>
    );
};

export default Home;