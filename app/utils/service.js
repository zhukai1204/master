import {request} from './request';
import {SERVER_URL} from './urls';
const Lottery = {
	getLotterys:function(limit){
		return request(`${SERVER_URL}/lottery?limit=${limit}`, 'GET')
	},
	getLottery:function(id){
		return request(`${SERVER_URL}/lottery/getLottery?id=${id}`, 'GET')
	},
	doBet:function(data){
		return request(`${SERVER_URL}/lottery/doBet`, 'POST', data)
	}	
}

const User = {
	login:function(data){
		return request(`${SERVER_URL}/user/login`, 'POST', data)
	},
	register:function(data){
		return request(`${SERVER_URL}/user/register`, 'POST', data)
	}
}

export {
	Lottery,
	User
}