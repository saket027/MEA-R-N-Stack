import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
function Header(){
  return(
    <h1>{course}</h1>
  )
}
function Content({part}){
  return (
    <div>
      {part.map(part =>
        <div>
          <ul>
          <p>{part.name} -- {part.exercises}</p> 
          </ul>
          
          </div>
        )}
    
    

</div>
  )}
  function Total({part}){
    var sum=0;
    part.map(part =>
      sum=sum+part.exercises
      )
      return sum
  }


ReactDOM.render(
  <div>
      <Header/>
      <Content part={parts}/>
   <Total part={parts}/>

  </div>
  
   

 
   

  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
