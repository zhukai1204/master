import {request} from './request';
import {SERVER_URL} from './urls';
const Lottery = {
	getLotterys:function(limit){
		return request(`${SERVER_URL}/lottery?limit=${limit}`, 'GET')
	},
	getLottery:function(id){
		return request(`${SERVER_URL}/lottery/getLottery?id=${id}`, 'GET')
	}	
}

export {
	Lottery,
}