import React from 'react';
import { Card, CardText, CardBody, Row, Col } from 'reactstrap';

const Topic = (props) => {
	console.log('props', props);

	const addTopic = (
		<Col className="my-3" lg={3} md={3} sm={6} onClick={props.addHandle}>
			<Card
				style={{
					borderStyle: 'dashed',
					height: '210px',
					backgroundColor: '#cecece',
					color: '#fff',
					borderWidth: '7px'
				}}
			>
				<CardBody className="d-flex justify-content-center align-items-center">
					<h3>
						Add New Topic <i className="fas fa-plus" />
					</h3>
				</CardBody>
			</Card>
		</Col>
	);

	const topicList = props.topics.map((topic) => (
		<Col className="my-3" lg={3} md={3} sm={6} key={topic.id}>
			<Card style={{ height: '210px' }}>
				<CardBody>
					<h4 className="text-center">{topic.title}</h4>
					<CardText className="d-flex mt-5">
						<span
							className="ml-auto"
							style={{ position: 'relative', right: '50px' }}
							onClick={() => props.upVoteHandle(topic.id)}
						>
							<i className="fas fa-2x fa-thumbs-up" style={{ color: 'green' }} /> {topic.upvote}
						</span>
						<span className="mr-auto" style={{ position: 'relative', left: '50px' }}>
							<i className="fas fa-2x fa-thumbs-down" style={{ color: 'red' }} /> {topic.downvote}
						</span>
					</CardText>
				</CardBody>
			</Card>
		</Col>
	));

	return (
		<Row>
			{topicList}
			{addTopic}
		</Row>
	);
};

export default Topic;
