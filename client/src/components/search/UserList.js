import React, {Component}  from 'react';
import * as actions from '../../actions';
import {connect} from 'react-redux';

class UserList extends Component {
    componentDidMount() {
        this.props.fetchAllUser();
    }
    render() {
        if(this.props.userList != null) {
            // var array = new Array();
            // for(var i = 0; i < this.props.userList.length; i++) {
            //     for(var j = 0; j <= array.length; j++) {
            //         if(j === array.length) {
            //             array[j] = this.props.userList[i];
            //             break;
            //         }
            //         if(this.props.userList[i].user_info.email == array[j]) {
            //             break;
            //         }
            //     }
            // }

            return this.props.userList.map((element) => {
                return (
                    <option value={element} key={element}>{element}</option>
                )
            })
        } else {
            return (
                <option value="noUser">no user</option>
            )
        }
    }

}



function mapStateToProps(state) {
    return {
        userList: state.userList
    }
}

export default connect(mapStateToProps, actions)(UserList)