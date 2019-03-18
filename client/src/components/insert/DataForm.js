import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import { connect } from 'react-redux';
import {addData} from '../../actions';

class DataForm extends Component {
    state = {
        showForm: false,
        modelNum: 0
    }

    render() {
        if(!this.state.showForm) {
            return (
                // <select className="custom-select">
                //     <option>Please select a model you want to insert</option>
                //     <option value="1" onSelect={this.handleSelect(1)}>Allevi 1</option>
                //     <option value="2">Allevi 2</option>
                //     <option value="3">Allevi 3</option>
                //     <option value="6">Allevi 6</option>
                // </select>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Please select model
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button className="dropdown-item" type="button" onClick={() => {
                            this.handleClick(1)}}>Allevi 1</button>
                        <button className="dropdown-item" type="button" onClick={() => {
                            this.handleClick(2)}}>Allevi 2</button>
                        <button className="dropdown-item" type="button" onClick={() => {
                            this.handleClick(3)}}>Allevi 3</button>
                        <button className="dropdown-item" type="button" onClick={() => {
                            this.handleClick(6)}}>Allevi 6</button>
                    </div>
                </div>
            )
        } else {
            if(this.props.auth) {
                return (
                    <div>
                        {/* <div className="list-group">
                                <button onClick={() => {
                                    this.setState({showForm: false})
                                }}>back</button>
                        </div> */}
                        <div>
                            <form onSubmit = {this.props.handleSubmit(values => {
                                    alert("submit success")
                                    addData(values)
                            })}>
                                <div className="form-group col">
    
                                    <label className="col-sm-2 col-form-label">
                                        User Email
                                    </label>
                                    <Field className="FormBar" type="text" name="userEmail" component='select'>
                                        <option>Select user</option>
                                        <option value={this.props.auth.googleEmail}>{this.props.auth.googleEmail}</option>
                                    </Field>
                                </div>
    
                                <div className="form-group col">
    
                                    <label className="col-sm-2 col-form-label">
                                        User Serial
                                    </label>
                                    <Field className="FormBar" type="text" name="userSerial" component='input'>
                                    </Field>
                                    
                                </div>

                                <div className="form-group col">
    
                                    <label className="col-sm-2 col-form-label">
                                        Input File
                                    </label>
                                    <Field className="FormBar" type="text" name="inputFile" component='input'>
                                    </Field>
                                    
                                </div>

                                <div className="form-group col">
    
                                    <label className="col-sm-2 col-form-label">
                                        Output File
                                    </label>
                                    <Field className="FormBar" type="text" name="outputFile" component='input'>
                                    </Field>
                                    
                                </div>

                                <div className="form-group col">
    
                                    <label className="col-sm-2 col-form-label">
                                        model Number
                                    </label>
                                    <Field className="FormBar" type="text" name="modelNum" component='select'>
                                        <option>Select model Number</option>
                                        <option value={this.state.modelNum}>{this.state.modelNum}</option>
                                    </Field>
                                </div>
                                
                                {this.renderExtruder()}
    
                                <button type="submit">Submit</button>
                            </form>
                        </div>
    
                    </div>
                )
            } else {
                return (
                    <div>Loading</div>
                )
            }

        }
    }

    handleClick(num) {
        this.setState({
            showForm: true,
            modelNum: num
        })
    }

    renderExtruder() {
        var arr = [];
        for(var i = 0; i < this.state.modelNum; i++) {
            arr[i] = i + 1;
        }
        return arr.map((num) => {
            return (
                <div key={"extruder" + num} className="form-group col">

                    <label className="col-sm-2 col-form-label">
                        Extruder {num}
                    </label>
                    <Field className="FormBar" placeholder="pressure" type="text" name={"extruder" + num + "P"} component='input'>
                    </Field>
                    <Field className="FormBar" placeholder="temperature" type="text" name={"extruder" + num + "T"} component='input'>
                    </Field>
                    <Field className="FormBar" placeholder="material" type="text" name={"extruder" + num + "M"} component='input'>
                    </Field>
                    
                </div>

            )
        })
            
        
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}
DataForm = connect(mapStateToProps, addData)(DataForm)

export default reduxForm({
    form: 'dataForm'
})(DataForm)
