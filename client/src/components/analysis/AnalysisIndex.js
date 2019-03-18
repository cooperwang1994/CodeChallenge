import React, {Component}  from 'react';
import * as actions from '../../actions';
import {connect} from 'react-redux';

class analysisIndex extends Component {
    render() {
        return(
            <div>
                <p>No content, Still working on</p>
            </div>
        )
    }
}


function mapStateToProps(state){
    // console.log("state player");
    // console.log(state.player);
    // return {
    //     player: state.player,
    //     showTrivialDetail:state.showTrivialDetail,
    //     compare: state.playerCompare
    // }
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps,actions)(analysisIndex);