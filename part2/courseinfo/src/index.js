import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


const courses = [
  {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }, 
  {
    name: 'Node.js',
    id: 2,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  }
]
const Header =({part}) =>{
  return(
    <h1>{part}</h1>
  )
}
const Content =({part}) =>{
  return (
    <div>
      {part.map(part =>
        <div>
          <ul>
          <p>{part.name}  {part.exercises}</p> 
          </ul>
          
          </div>
        )}
    
    

</div>
  )}
  const Total =({part}) =>{
    var sum=0;
    part.map(part =>
      sum=sum+part.exercises
      )
      return(
        <div>
          <h3>total of {sum}  exercises</h3>
        </div>
      )
  }


ReactDOM.render(
  <div>
    <h1>Web development curriculum</h1>
    {courses.map((course) => (
      <div>
      
              <Header part={course.name}/>
              <Content part={course.parts}/>
              <Total part={course.parts}/>
              </div>
              
            
             
       
        ))}
   

   
         
   
   

  </div>
  
   

 
   

  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

