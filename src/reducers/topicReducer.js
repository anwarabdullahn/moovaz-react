import { GET_TOPICS, STORE_TOPIC, UPVOTE_TOPIC, DOWNVOTE_TOPIC } from '../actions/types';

const initialState = {
	topic: {},
	topics: [],
	msg: ''
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_TOPICS:
			return {
				...state,
				topics: action.payload,
				msg: 'Get All Topics'
			};
		case STORE_TOPIC:
			return {
				...state,
				topic: action.payload,
				msg: 'New Topic Added'
			};
		default:
			return state;
	}
}
