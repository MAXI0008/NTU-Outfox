import React from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import PageNotFound from './components/common/app/PageNotFound';
import HomeApp from './components/home/';
import EventApp from './components/event/';
import CanteenApp from './components/canteen/';
import LostFoundApp from './components/lostfound'
import withStyles from '@material-ui/core/styles/withStyles';
import Header from './components/common/app/Header';
import FeedbackMessageBars from "./components/feedback/MessageBars";

const history = createBrowserHistory();

const classes = theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		minHeight: '100%'
	},
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing.unit * 3,
		minWidth: 0,
		minHeight: '100%'
	},
	toolbar: theme.mixins.toolbar
});

const RootRouter = ({ classes }) => (
	<Router history={history}>
		<div className={classes.root}>
			<Header />
			<main className={classes.content}>
				<div className={classes.toolbar} />
				<Switch>
					<Route exact path="/" component={HomeApp} />
					<Route path="/events" component={EventApp} />
					<Route path="/canteen" component={CanteenApp} />
					<Route path="/lostandfound" component={LostFoundApp} />
					<Route component={PageNotFound} />
				</Switch>
			</main>
			<FeedbackMessageBars/>
			<div id="outfox-footer-container"/>
		</div>
	</Router>
);

export default withStyles(classes)(RootRouter);
