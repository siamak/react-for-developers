import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';


// # Components
import Main from './components/Main';
import Tweet from './components/Tweet';
import Ban from './components/Ban';


// # Stylesheets
import Styles from './styles.css'; // eslint-disable-line

render((
	<Router history={browserHistory}>
		<Route path="/" component={Main}>
			<Route path="/tweet/:postId" component={Tweet} />
		</Route>
		<Route path="*" component={Ban} />
	</Router>
), document.querySelector('#hashtag'));
