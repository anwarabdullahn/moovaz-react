import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Landing from './containers/Landing';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Landing />
			</Provider>
		);
	}
}

export default App;
