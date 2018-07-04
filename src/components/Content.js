import React, {Component} from 'react'

import { connect } from 'react-redux'

import MaterialIcon, {colorPallet} from 'material-icons-react';


class Content extends Component {
	render () {
		return (
			<div className="content">
				<ul>
					{this.props.store.map((event, index) => 
						<li key={index} onClick={this.handleClick.bind(this, index)} className="clearfix">
							<MaterialIcon icon={event.done && "check_circle_outline" || "radio_button_unchecked"} />
							<span className={event.done && "cursive" || ""}>{event.name}</span>
						</li>
					)}
					{this.props.store.length === 0 && <p className="empty-list">Нет заданий</p>}
				</ul>
			</div>
		)
	}

	handleClick = index => {
		this.props.onChangeEvent(index);
	}
}

export default connect(
	state => ({
		store: state
	}),
	dispatch => ({
		onChangeEvent: index => {
			dispatch({type: 'CHANGE_EVENT', payload: index});
		}
	})
)(Content)