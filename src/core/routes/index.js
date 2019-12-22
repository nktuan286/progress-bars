import React from 'react';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import notFoundPage from '../../components/screens/notFound/notFoundScreen';
import ProgressBar from '../../containers/progressBar/progressBarContainer';

class AppRoute extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<Switch>
                <Route exact path="/" component={ProgressBar} />
				<Route exact path="/404" component={notFoundPage} />
				<Redirect to="/404" />
			</Switch>
		);
	}
}

export default withRouter(AppRoute);
