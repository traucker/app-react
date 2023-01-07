import React, { Component } from "react";



class TodoList extends Component {

constructor(){
		super();
		this.state = {
			userInput : '',
			items: [],
		}
	}



			onChange(event){
				this.setState({
				userInput: event.target.value
			}, () => console.log(this.state.userInput));
		}

	addTodo(event){
			event.preventDefault();
			this.setState({
				userInput : '',
				items: [...this.state.items, this.state.userInput],
			},() => console.log(this.state));
		}

		renderTodos(){
			return this.state.items.map((item) => {
				return (
					<div key={item}>
						{item}
					</div>
				)
			})
		}


	render(){
		return(
			<div>
				<h1> Ma Todo List </h1>
				<form>
					<input
					value={this.state.userInput}
					type="text"
					placeholder="Renseigner un element"
					onChange={this.onChange.bind(this)}
					/>
					<button onClick={this.addTodo.bind(this)}> Ajouter </button>
				</form>
			</div>
		)
	}
}

export default TodoList;