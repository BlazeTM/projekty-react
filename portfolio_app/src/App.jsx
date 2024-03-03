import React from 'react';
import { useState } from 'react'
import './App.css'


function App() {
  const [note,setNote] = useState([]);
  const [lastId,setLastId] = useState(0);
  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");

  function handleDeleteNote(){
    let id = event.target.id;
    let arr = [...note];
    arr.pop(id-1);
    setNote(arr);
    console.log("work");
  }

  function handleNoteSave(){
    let id = lastId + 1;
    setLastId(id);
    const obj = {
      id: id,
      title: title,
      description: description
    }
    note.push(obj);
    console.log(note);
  }
  
  function handleChangeTitle(){
    setTitle(event.target.value);
  }

  function handleChangeDescription(){
    setDescription(event.target.value);
  }


  return (
    <>
      <nav>
        <a href="#">About me</a>
        <a href="#">Todo app</a>
        <a href="#">Recipe finder</a>
        <a href="#">Wheater app</a>
        <a href="#">Ecommerce frontend</a>
        <a href="#">Admin panel with graphs</a>
      </nav>
      <section>
        <h1>About me</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem natus quos repellat rem ratione repellendus nulla iusto dignissimos, doloremque quo sequi architecto accusantium? Quasi ipsam eos totam dignissimos facere placeat.</p>

      </section>
      <section>
        <h1>Todo app</h1>
        <div>
          Type title:<input type="text" onChange={() => handleChangeTitle()}/> Type description: <input type="text" onChange={() => {
            return handleChangeDescription();
          }}/> <button onClick={() => handleNoteSave()}>Save</button>
        </div>
        <div>
          <h1>Notes:</h1><br />
          {note.map(note => (
          <div key={note.id}>
            <h3>{note.title}</h3>
            <p>{note.description}</p>
            <button id={note.id} onClick={() => handleDeleteNote()}>Delete</button>
          </div>
        ))}
        </div>
      </section>
    </>
  )
}

export default App
