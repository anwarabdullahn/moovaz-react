import React, { Component } from 'react';
import Topic from '../components/Topic';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Form } from 'reactstrap';
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

	submitHandle = (e) => {
		e.preventDefault();
		const { title, topics } = this.state,
			data = { id: uuidv4(), title, upvote: 0, downvote: 0 };
		this.setState({ topics: [ ...topics, data ], title: '' });
		console.log('data', data);
		this.toggle();
	};

	upVoteHandle = (id) => {
		const { topics } = this.state,
			findTopic = topics.findIndex((topic) => topic.id === id);
		const upVoteTopic = topics.filter((topic) => topic.id === id);
		upVoteTopic[0].upvote += 1;
		topics.splice(findTopic, 1, upVoteTopic[0]);
		this.setState({ topics: topics });
	};

	downVoteHandle = (id) => {
		const { topics } = this.state,
			findTopic = topics.findIndex((topic) => topic.id === id);
		const downVoteTopic = topics.filter((topic) => topic.id === id);
		downVoteTopic[0].downvote += 1;
		topics.splice(findTopic, 1, downVoteTopic[0]);
		this.setState({ topics: topics });
	};

	render() {
		return (
			<div className="mt-5 mx-3">
				<Topic
					topics={this.state.topics.sort((b, a) => parseInt(a.upvote) - parseInt(b.upvote))}
					addHandle={this.toggle}
					upVoteHandle={this.upVoteHandle}
					downVoteHandle={this.downVoteHandle}
				/>
				<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
					<Form onSubmit={this.submitHandle}>
						<ModalHeader toggle={this.toggle}>Topic title</ModalHeader>
						<ModalBody>
							<Input
								placeholder="title"
								value={this.state.title}
								name="title"
								onChange={this.changeHandle}
							/>
						</ModalBody>
						<ModalFooter>
							<Button color="primary" type="submit">
								Add Topic
							</Button>
							<Button color="secondary" onClick={this.toggle}>
								Cancel
							</Button>
						</ModalFooter>
					</Form>
				</Modal>
			</div>
		);
	}
}

export default Landing;
