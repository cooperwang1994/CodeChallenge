import React, { Component } from 'react';
import '../Styles/App.css';

import { BrowserRouter, Route , Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import SearchIndex from './search/SearchIndex';
import AnalysisIndex from './analysis/AnalysisIndex';
import InsertIndex from './insert/InsertIndex';
import ExistIndex from './existing/ExistIndex';

class App extends Component {
	componentDidMount(){
		this.props.fetchUser();
	}
  render() {
    return (
      <BrowserRouter>
			<div className="container">
				<Header />
				
				<Switch>
					<Route path = "/search" component = {SearchIndex} />
					<Route path = "/analysis" component = {AnalysisIndex} />
					<Route exact path = "/insert" component = {InsertIndex} />
					<Route exact path = "/existing" component = {ExistIndex} />
				</Switch>
			</div>
			</BrowserRouter>
    );
  }
}

// export default App;
export default connect(null, actions)(App);
