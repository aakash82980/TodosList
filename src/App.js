import './App.css';
import Header from './Components/Header';
import Todos from './Components/Todos';
import Footer from './Components/Footer';
import React, { useState } from 'react';
import AddTodo from './Components/AddTodo';

function App() {
  const onDelete=(todo)=>{
    console.log("I am on Delete of todo ",todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
  }

  const addTodo = (title,desc)=>{
    let sno;
    if(todos.length==0){
      sno=0;
    }
    else{
      sno = todos[todos.length-1].sno+1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Complete MERN stack",
      desc: "Need to complete MERN stack by 16th May"
    },
    {
      sno: 2,
      title: "Complete MEAN stack",
      desc: "Need to complete MERN stack by 19th May"
    },
    {
      sno: 3,
      title: "Complete MEVN stack",
      desc: "Need to complete MERN stack by 26th May"
    }
  ]);
  return (
    <>
    <Header title="My Todos List" searchBar={false}/>
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
