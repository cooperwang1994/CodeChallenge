import React, {Component}  from 'react';
import * as actions from '../../actions';
import {connect} from 'react-redux';
import DataForm from './DataForm';

class InsertIndex extends Component {
    render() {
        return (
            <div className="dataForm">
                <DataForm />
            </div>
        )
    }
}

function mapStateToProps(state){
    // console.log("state Team");
    // console.log(state.team);
    return {
        auth: state.auth
    }
}


export default connect(mapStateToProps,actions)(InsertIndex);