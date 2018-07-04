import React, {Component} from 'react';

import { connect } from 'react-redux'

import MaterialIcon from 'material-icons-react';

class Header extends Component {
	render () {
		return (
			<nav className="navbar navbar-light bg-light">
				<span className="navbar-brand mb-0 h1">TODO list</span>
				<span onClick={this.handleClick}>
					<MaterialIcon icon="delete" />
				</span>
			</nav>
		)
	}

	handleClick = () => {
		this.props.onDelete();
	}
}

export default connect(state => ({}), dispatch => ({
	onDelete: () => {
		dispatch({ type: 'DELETE' });
	}
}))(Header);