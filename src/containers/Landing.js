import React, { Component } from 'react';
import Topic from '../components/Topic';

class Landing extends Component {
	constructor() {
		super();
		this.state = {
			topics: [
				{ id: 1111, title: 'First Topic', upvote: 0, downvote: 0 },
				{ id: 2222, title: 'Second Topic', upvote: 0, downvote: 0 }
			]
		};
	}
	render() {
		return (
			<div className="mt-5 mx-3">
				<Topic topics={this.state.topics} />
			</div>
		);
	}
}

export default Landing;
