import { FETCH_USER_DATA } from '../actions/types';
export default function(state = null, action){
	//console.log(action);
	switch(action.type){
		case FETCH_USER_DATA:
			return action.payload || false;
		default:
			return state;
	}
}