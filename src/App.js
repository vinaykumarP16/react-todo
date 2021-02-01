import React,{ Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import Addtodo from './components/Addtodo';

class App extends Component{
	state={
		todos:[
		{
			id:uuidv4(),	
			title:'mail@ vinaykumar.p1995v@gmail.com',
			completed:false
		}
		]
	}

	//toggle complete
	markComplete=(id)=>{
		this.setState({todos:this.state.todos.map(todo=>{
			if(todo.id===id){
				todo.completed=!todo.completed
			}
			return todo;
		})})
	}
	delTodo=(id)=>{
		this.setState({todos: [...this.state.todos
			.filter(todo=>todo.id!==id)]});
	}

	Addtodo=(title)=>{
		const newtodo={
			id:uuidv4(),
			title:title,
			completed:false
		}
		this.setState({todos:[...this.state.todos, newtodo]})
	}

	render(){
		
		return(
			<div className="app">
			<div className="container">
			<Header/>
			<Addtodo Addtodo={this.Addtodo}/>
			<Todos todos={this.state.todos}
			markComplete={this.markComplete}
			delTodo={this.delTodo}/>
			</div>
			</div>
			);
	}
}

export default App;
