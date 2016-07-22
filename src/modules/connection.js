import axios from 'axios';

// let request = axios.post('http://178.63.163.126:1234/tweets', 'token=fb9f985d48858b5d49a6e5014b568fde');
// let request = axios.get('http://localhost:3012/tweets?search=irDevConf&limit=1000');
// let request = axios.get('http://192.168.1.5:3012/tweets?search=irDevConf&limit=1000', headers: );

var options = {
	method: 'GET',
	url: 'http://178.63.163.126:3012/tweets?search=irDevConf&limit=100',
	headers: {
		token: "fb9f985d48858b5d49a6e5014b568fde"
	}
};
let request = axios(options);

export default request;
