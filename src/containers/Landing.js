import React, { Component } from 'react';
import Topic from '../components/Topic';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import uuidv4 from 'uuid/v4';

class Landing extends Component {
	constructor() {
		super();
		this.state = {
			topics: [
				{ id: 1111, title: 'First Topic', upvote: 0, downvote: 0 },
				{ id: 2222, title: 'Second Topic', upvote: 0, downvote: 0 }
			],
			modal: false,
			title: ''
		};
	}

	toggle = () => this.setState({ modal: !this.state.modal });

	changeHandle = (e) => this.setState({ [e.target.name]: e.target.value });

	submitHandle = () => {
		const { title, topics } = this.state,
			data = { id: uuidv4(), title, upvote: 0, downvote: 0 };
		this.setState({ topics: [ ...topics, data ], title: '' });
		console.log('data', data);
		this.toggle();
	};

	render() {
		return (
			<div className="mt-5 mx-3">
				<Topic topics={this.state.topics} addHandle={this.toggle} />
				<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
					<ModalHeader toggle={this.toggle}>Topic title</ModalHeader>
					<ModalBody>
						<Input placeholder="title" value={this.state.title} name="title" onChange={this.changeHandle} />
					</ModalBody>
					<ModalFooter>
						<Button color="primary" onClick={this.submitHandle}>
							Add Topic
						</Button>
						<Button color="secondary" onClick={this.toggle}>
							Cancel
						</Button>
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}

export default Landing;
