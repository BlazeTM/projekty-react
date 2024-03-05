import React, { useTransition } from 'react';
import { useState } from 'react'
import './App.css'


function App() {
    const data = [
    {
      question: "Which device is required for the Internet connection?",
      option1: "Modem",
      option2: "Router",
      option3: "LAN Cable",
      option4: "Pen Drive",
      ans: 1,
    },
    {
      question: "Which continent has the highest number of countries?",
      option1: "Asia",
      option2: "Europe",
      option3: "North America",
      option4: "Africa",
      ans: 4,
    },
    {
      question: "Junk e-mail is also called?",
      option1: "Spam",
      option2: "Fake",
      option3: "Archived",
      option4: "Bin",
      ans: 1,
    },
    {
      question: "A computer cannot BOOT if it does not have the?",
      option1: "Application Software",
      option2: "Internet",
      option3: "Operating System",
      option4: "Mouse",
      ans: 3,
    },
    {
      question: "First page of Website is termed as?",
      option1: "Index Page",
      option2: "Homepage",
      option3: "Sitemap",
      option4: "Pen Drive",
      ans: 2,},];
  const [note,setNote] = useState([]);
  const [lastId,setLastId] = useState(0);
  const [answer,setAnswer] = useState(0);
  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");
  const [diffculty,setDifficulty] = useState("");
  const [isStart,setIsStart] = useState(false);

  function handleDeleteNote(){
    let id = event.target.id;
    let arr = [...note];
    arr.pop(id-1);
    setNote(arr);
    console.log("work");
  }
  
  function handleAnswer(){
    if(answer+1!=data.length){
      setAnswer(answer+1);
    }
    
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
        <a href="#">Quiz app</a>
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
      <section>
        <h1>Quiz app</h1>
        { isStart ? (<div><text>Select diffculty level: </text>
        <select name="1" id="">
          <option name="1" value="easy">Easy(120 seconds for answer)</option>
          <option name="1" value="medium">Medium (90 seconds for answer)</option>
          <option name="1" value="hard">Hard (60 seconds for answer)</option>
          </select> <br />
          <text> Select category:</text><select name="2" id="">
          <option value="1">Common knowledge</option>
          <option value="2">History</option>
          <option value="3">Physics</option>
          </select> <br />
          <button>Start</button></div>) : (
          <div>
          <h1>{data[answer].question}</h1>
          <button onClick={(e) => handleAnswer()}>{data[answer].option1}</button>
          <button>{data[answer].option2}</button>
          <button>{data[answer].option3}</button>
          <button>{data[answer].option4}</button></div>)
        }
      </section>
    </>
  )
}

export default App
