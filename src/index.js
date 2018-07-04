import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Content from './components/Content';
import Header from './components/Header';
import Bottom from './components/Bottom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.sass'

const initialState = [
	{
		name: 'Покормить собаку',
		done: false
	},
	{
		name: 'Построить дом',
		done: false
	},
	{
		name: 'Помыть машину',
		done: false
	},
	{
		name: 'Купить продукты: молоко, соль, сахар, вода, макароны, мясо, моцарелла',
		done: false
	},
	{
		name: 'Составить список',
		done: true
	}
];

function playlist (state = initialState, action) {
	if (action.type === 'ADD_EVENT') {
		return [...state, action.payload]
	} else if (action.type === 'CHANGE_EVENT') {
		state[action.payload].done = !state[action.payload].done;
		return [...state];
	} else if (action.type === 'DELETE') {
		let mas = [];
		state.forEach(event => {
			if (event.done === false) mas.push(event);
		});
		return [...mas];
	}
	return state;
}

const store = createStore(playlist);

ReactDOM.render(
	<Provider store={store}>
		<div className="container">
			<div className="wrap">
				<Header />
				<Content />
				<Bottom />
			</div>
		</div>
	</Provider>,
	document.getElementById('root')
);