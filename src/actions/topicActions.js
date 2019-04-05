import { GET_TOPICS, STORE_TOPIC, UPVOTE_TOPIC, DOWNVOTE_TOPIC } from './types';
const topics = sessionStorage.getItem('topics') === null ? [] : JSON.parse(sessionStorage.getItem('topics'));

export const getTopics = () => (dispatch) => {
	dispatch({
		type: GET_TOPICS,
		payload: topics
	});
};

export const storeTopic = (data) => (dispatch) => {
	let addTopic = [ ...topics, data ];
	sessionStorage.setItem('topics', JSON.stringify(addTopic));
	dispatch({
		type: STORE_TOPIC,
		payload: data
	});
};

export const upVoteTopic = (id) => (dispatch) => {
	const findTopic = topics.findIndex((topic) => topic.id === id),
		upVoteTopic = topics.filter((topic) => topic.id === id);
	upVoteTopic[0].upvote += 1;
	topics.splice(findTopic, 1, upVoteTopic[0]);
	sessionStorage.setItem('topics', JSON.stringify(topics));
	dispatch({
		type: GET_TOPICS,
		payload: upVoteTopic[0]
	});
};

export const downVoteTopic = (id) => (dispatch) => {
	const findTopic = topics.findIndex((topic) => topic.id === id),
		downVoteTopic = topics.filter((topic) => topic.id === id);
	downVoteTopic[0].upvote += 1;
	topics.splice(findTopic, 1, downVoteTopic[0]);
	sessionStorage.setItem('topics', JSON.stringify(topics));
	dispatch({
		type: GET_TOPICS,
		payload: downVoteTopic[0]
	});
};
