import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.scss';

// import components
import CreateTodo from './components/CreateTodo';
import EditTodo from './components/EditTodo';
import TodosList from './components/TodosList';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="app">
					<nav className="uk-navbar-container uk-margin" data-uk-navbar>
						<div className="uk-navbar-center">
							<ul className="uk-navbar-nav">
								<li>
									<Link to="/" className="uk-navbar-item uk-logo">Todos</Link>
								</li>
								<li>
									<Link to="/create" className="uk-navbar-item uk-logo">Create Todos</Link>
								</li>
							</ul>
						</div>
					</nav>

					<Route exact path="/" component={TodosList} />
					<Route path="/edit/:id" component={EditTodo} />
					<Route path="/create" component={CreateTodo} />
				</div>
			</Router>
		)
	}
}

export default App;
