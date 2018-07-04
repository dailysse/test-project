import React, {Component} from 'react';

import { connect } from 'react-redux'

import MaterialIcon from 'material-icons-react';

class Bottom extends Component {

	params = {
		value: ''
	}

	render () {
		return (
			<div className="form-group row">
				<label onClick={this.handleClick} className="col-sm-1 col-form-label">
					<MaterialIcon icon="add" />
				</label>
				<div className="col-sm-11">
					<input ref={(input) => { this.trackInput = input }} onKeyDown={this.handleKeyDown} onChange={this.handleChange} type="text" className="form-control addEvent" />
				</div>
			</div>
		)
	}

	handleChange = event => {
		this.params.value = event.target.value;
	};

	addEvent = event => {
		let spaces = this.params.value.match(/[\s]/g) || [];
		if ( (this.params.value.length - spaces.length) >= 3) {
			this.trackInput.value = "";
			this.props.onAddEvent({
				name: this.params.value,
				done: false
			});
			this.params.value = "";
		} else {
			alert('Необходимо заполнить поле минимум 3-мя символами (не пробелы)');
		}
	}

	handleClick = event => {
		this.addEvent();
	};

	handleKeyDown = e => {
		if (e.keyCode === 13) {
			this.addEvent();
		}
	}

}

export default connect(
	state => ({
		store: state
	}),
	dispatch => ({
		onAddEvent: event => {
			dispatch({type: 'ADD_EVENT', payload: event});
		}
	})
)(Bottom)