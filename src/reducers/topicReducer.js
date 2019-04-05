import { GET_TOPICS, STORE_TOPIC, UPVOTE_TOPIC, DOWNVOTE_TOPIC } from '../actions/types';

const initialState = {
	topic: {},
	topics: [],
	msg: '',
	success: true
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_TOPICS:
			return {
				...state,
				topics: action.payload
			};
		case STORE_TOPIC:
			return {
				...state,
				topics: action.payload,
				msg: 'New Topic Added',
				success: true
			};
		case UPVOTE_TOPIC:
			return {
				...state,
				topics: action.payload,
				msg: 'Up Vote Added',
				success: true
			};
		case DOWNVOTE_TOPIC:
			return {
				...state,
				topics: action.payload,
				msg: 'Down Vote Added',
				success: false
			};
		default:
			return state;
	}
}
