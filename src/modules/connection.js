import axios from 'axios';

const SERVER_ADDRESS = 'http://localhost:3000';

const options = {
	method: 'GET',
	url: `${SERVER_ADDRESS}/tweets?search=irDevConf&limit=100`,
};

const request = axios(options);

export default request;
