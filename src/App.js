import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const[title, setTitle] = useState('');
  const[content, setContent] = useState('');
  const initialState = {
    id:0,
    title:"test",
    content:"gggg",
  }
  const[todo, setTodo] = useState([initialState]);

  const onChangeAdd = (event) => {
    if(event.target.name === "title") {
      setTitle(event.target.value);
    }else{
      setContent(event.target.value);
    }
    console.log(event.target)
    // console.log(event.target.name)
    // console.log("inputConsole  " + title)
  }


  const handleAdd = () => {
    setTodo([...todo, {id: todo.length +1, title, content}])
    // console.log(setTodo)
  }
  const handleDelete = () => {

  }
  
  return (
      <div>
        <div>
        <input type="text" name = "title" value={title} onChange={onChangeAdd}/>
        <input type="text" name = "content" value={content} onChange={onChangeAdd}/>
        <button onClick={handleAdd}>추가</button>
        </div>
          
        <div>
          {todo.map((todo) => (
            <div>
              {todo.title}{todo.content} <button>삭제</button>
            </div>
          ))}

        </div>
      </div>
  )
}

export default App;
