import React, { Component } from 'react';
import Topic from '../components/Topic';

class Landing extends Component {
	constructor() {
		super();
		this.state = {
			topics: [
				{ title: 'First Topic', upvote: 0, downvote: 0 },
				{ title: 'Second Topic', upvote: 0, downvote: 0 }
			]
		};
	}
	render() {
		return (
			<div>
				<Topic topics={this.state.topics} />
			</div>
		);
	}
}

export default Landing;
