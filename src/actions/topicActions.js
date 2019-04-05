import { GET_TOPICS, STORE_TOPIC, UPVOTE_TOPIC, DOWNVOTE_TOPIC } from './types';

export const getTopics = () => (dispatch) => {
	const topics = sessionStorage.getItem('topics') === null ? [] : JSON.parse(sessionStorage.getItem('topics'));
	dispatch({
		type: GET_TOPICS,
		payload: topics
	});
};

export const storeTopic = (data) => (dispatch) => {
	const topics = sessionStorage.getItem('topics') === null ? [] : JSON.parse(sessionStorage.getItem('topics'));
	let addTopic = [ ...topics, data ];
	sessionStorage.setItem('topics', JSON.stringify(addTopic));
	dispatch({
		type: STORE_TOPIC,
		payload: addTopic
	});
};

export const upVoteTopic = (id) => (dispatch) => {
	const topics = sessionStorage.getItem('topics') === null ? [] : JSON.parse(sessionStorage.getItem('topics'));
	const findTopic = topics.findIndex((topic) => topic.id === id),
		upVoteTopic = topics.filter((topic) => topic.id === id);
	upVoteTopic[0].upvote += 1;
	topics.splice(findTopic, 1, upVoteTopic[0]);
	sessionStorage.setItem('topics', JSON.stringify(topics));
	dispatch({
		type: UPVOTE_TOPIC,
		payload: topics
	});
};

export const downVoteTopic = (id) => (dispatch) => {
	const topics = sessionStorage.getItem('topics') === null ? [] : JSON.parse(sessionStorage.getItem('topics'));
	const findTopic = topics.findIndex((topic) => topic.id === id),
		downVoteTopic = topics.filter((topic) => topic.id === id);
	downVoteTopic[0].downvote += 1;
	topics.splice(findTopic, 1, downVoteTopic[0]);
	sessionStorage.setItem('topics', JSON.stringify(topics));
	dispatch({
		type: DOWNVOTE_TOPIC,
		payload: topics
	});
};
