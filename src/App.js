import React,{Component} from 'react';
import {v4 as uuid}  from 'uuid';

import Todos from  './components/Todos';
import AddTodo from  './components/AddTodo';
import './App.css';



class App extends Component {
  state={
    date: "",
    todos: [
    {
      id:uuid(),
      title:'work1',
      completed:false
    },
    {
      id:uuid(),
      title:'work2',
      completed:false
    },
    {
      id:uuid(),
      title:'work3',
      completed:false
    }
  ]
}
markComplete=(id) =>{
  // console.log(id);
  this.setState({ todos:this.state.todos.map(todo=>
    {
      if(todo.id===id){
        todo.completed= !todo.completed
      }
      return todo;
    })})
  
}
delTodo =(id) =>{
 this.setState({ todos :[...this.state.todos.filter(todo =>todo.id!==id)]})
}
addtodo=(title) =>{
  const newTodo={
    id:uuid(),
 
    title,
    completed:false,
  }
 
 this.setState({todos:[...this.state.todos,newTodo]})
}
componentDidMount() {
  
  var date = new Date().getDate(); //Current Date
  var month = new Date().getMonth() +1; //Current Month
  var year = new Date().getFullYear(); //Current Year
  var hours = new Date().getHours(); //Current Hours
  var min = new Date().getMinutes(); //Current Minutes
  var sec = new Date().getSeconds(); //Current Seconds
  this.setState({
    
    date:
      date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec,
  });
}
render(){

  return (
    <div className="App">
       <div className="container">
        {/* <Header/> */}
        <header className='headerstyle'>
            <h1>TOdolist</h1>
        </header>
        <hr/>
        <div className='date'>
        {this.state.date}
        </div>
        <hr/>
        <AddTodo addtodo={this.addtodo}/>
        <hr/>
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
       </div>
     
    </div>
  );
}
}

export default App;
