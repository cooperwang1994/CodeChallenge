import React, {Component}  from 'react';
import * as actions from '../../actions';
import {reduxForm, Field} from 'redux-form';
import UserList from './UserList'

class SearchForm extends Component {
    render() {
        return (
            
            
        <form  onSubmit = {this.props.handleSubmit(value => {console.log("submit success")})}>
                <Field className="userName" name="userName" component="select">
                    <option value=''>Select User</option>
                    <UserList />
                </Field>
                {this.renderModel()}
                
            <button className='btn btn-primary' type='submit'>Submit</button>
        </form>
        )
    }

    renderModel() {
        return (
            <Field className="modelName" name="model" component="select">
                    <option value=''>Select Model</option>
                    <option key="allevi1" value='1'>allevi 1</option>
                    <option key="allevi2" value='2'>allevi 2</option>
                    <option key="allevi3" value="3">allevi 3</option>
                    <option key="allevi6" value='6'>allevi 6</option>
            </Field>
            
        )
    }
}

export default reduxForm(
    {
        form: 'search',
        onSubmitSuccess: (value, dispatch, props) => {
            // console.log("submit successs");
            // console.log(props.values)
            dispatch(actions.fetchData(props.values));

        }
    }
)(SearchForm)