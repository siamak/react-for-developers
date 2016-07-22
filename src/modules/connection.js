import axios from 'axios';

const options = {
	method: 'GET',
	url: 'http://178.63.163.126:3012/tweets?search=irDevConf&limit=100',
	headers: {
		token: "fb9f985d48858b5d49a6e5014b568fde"
	}
};

const request = axios(options);

export default request;
