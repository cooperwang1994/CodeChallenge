import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Header extends Component{
    componentDidMount(){
        // this.props.fetchData();
        this.props.fetchUser();
	}
    renderLogin() {
        // console.log(this.props);
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return(
                    <a className="btn btn-outline-primary" href="/auth/google">Google Login</a>
                );
            default:
                return(
            
                    <div className="dropdown show">
                        <a className="btn btn-secondary dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="/">
                            Welcome, {this.props.auth.googleName}
                        </a>

                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a className="dropdown-item" href="/existing">Existing Data</a>
                        <a className="dropdown-item" href="/insert">Insert Data</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="/api/logout">Logout</a>
                    </div>
                    </div>
                );
        }
    }
	render(){
		return(
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  				<a className="navbar-brand" href="/">Allevi3D</a>
  				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				    <span className="navbar-toggler-icon"></span>
			  	</button>
  				<div className="collapse navbar-collapse" id="navbarSupportedContent">
				    <ul className="navbar-nav mr-auto">

    					<li className="nav-item">
        					<a className="nav-link" href="/search">Data Search</a>
    				 	</li>
                        <li className="nav-item">
        					<a className="nav-link" href="/analysis">Data Analysis</a>
    				 	</li>
			
    				</ul>
                    <div className="my-2 my-lg-0">
                        {this.renderLogin()}
                    </div>
  				</div>
			</nav>

		);
	}
}

function mapStateToProps(state){
    //get auth state out of all the states
    return {
        allData: state.allData,
        auth: state.auth
    }
}

export default connect(mapStateToProps, actions)(Header);

