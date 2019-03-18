import React, {Component}  from 'react';
import * as actions from '../../actions';
import {connect} from 'react-redux';
import SearchForm from './SearchForm';

class SearchIndex extends Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { 
            showButton: true, 
            detailNum:-1
        };
    }

    render() {
        if(this.state.showButton) {
            return(
                <div>
    
                    <SearchForm />
                    <div className="list-group">
                        {this.renderResultList()}
                    </div>
                </div>
            )

        } else {
            var element = this.props.allData[this.state.detailNum];
            return(
                <div >
    
                    <SearchForm />
                    <div className="list-group">
                        <button onClick={() => {
                            this.setState({showButton: true})
                        }}>back</button>
                    </div>
                    <div>
                        <h5>User: {element.user_info.email}</h5>
                        <h5>Serial: {element.user_info.serial}</h5>
                        <table className="table">

                            <thead>
                                <tr>
                                <th scope="col">Extruder</th>
                                <th scope="col">pressure</th>
                                <th scope="col">temperature</th>
                                <th scope="col">material</th>
                                </tr>
                            </thead>
                            { this.renderExtreder(element)}
                            
                        
                        </table>
                    </div>
                </div>
            )
        }
    }
    onclickHandler(index) {
        this.setState({showButton: false, detailNum: index});
    }

    renderExtreder(element) {
        
        const pressure = element.print_info.pressure;
        const temperature = element.print_info.temperature;
        const material = element.print_info.material;
        

        if(element.print_info.printer.modelNumber === 1) {
            return (
                <tbody>
                    <tr>
                        <th scope="row">extruder 1</th>
                        <td>{pressure.extruder0}</td>
                        <td>{temperature.extruder0}</td>
                        <td>{material.extruder0}</td>
                    </tr>
                </tbody>
            )
        } else if(element.print_info.printer.modelNumber === 2) {
            return (
                <tbody>
                    <tr>
                        <th scope="row">extruder 1</th>
                        <td>{pressure.extruder0}</td>
                        <td>{temperature.extruder0}</td>
                        <td>{material.extruder0}</td>
                    </tr>
                    <tr>
                        <th scope="row">extruder 2</th>
                        <td>{pressure.extruder1}</td>
                        <td>{temperature.extruder1}</td>
                        <td>{material.extruder1}</td>
                    </tr>
                </tbody>
            )
        } else if(element.print_info.printer.modelNumber === 3) {
            return (
                <tbody>
                    <tr>
                        <th scope="row">extruder 1</th>
                        <td>{pressure.extruder0}</td>
                        <td>{temperature.extruder0}</td>
                        <td>{material.extruder0}</td>
                    </tr>
                    <tr>
                        <th scope="row">extruder 2</th>
                        <td>{pressure.extruder1}</td>
                        <td>{temperature.extruder1}</td>
                        <td>{material.extruder1}</td>
                    </tr>
                    <tr>
                        <th scope="row">extruder 3</th>
                        <td>{pressure.extruder2}</td>
                        <td>{temperature.extruder2}</td>
                        <td>{material.extruder2}</td>
                    </tr>
                </tbody>
            )
        } else {
            return (
                <tbody>
                    <tr>
                        <th scope="row">extruder 1</th>
                        <td>{pressure.extruder0}</td>
                        <td>{temperature.extruder0}</td>
                        <td>{material.extruder0}</td>
                    </tr>
                    <tr>
                        <th scope="row">extruder 2</th>
                        <td>{pressure.extruder1}</td>
                        <td>{temperature.extruder1}</td>
                        <td>{material.extruder1}</td>
                    </tr>
                    <tr>
                        <th scope="row">extruder 3</th>
                        <td>{pressure.extruder2}</td>
                        <td>{temperature.extruder2}</td>
                        <td>{material.extruder2}</td>
                    </tr>
                    <tr>
                        <th scope="row">extruder 4</th>
                        <td>{pressure.extruder3}</td>
                        <td>{temperature.extruder3}</td>
                        <td>{material.extruder3}</td>
                    </tr>
                    <tr>
                        <th scope="row">extruder 5</th>
                        <td>{pressure.extruder4}</td>
                        <td>{temperature.extruder4}</td>
                        <td>{material.extruder4}</td>
                    </tr>
                    <tr>
                        <th scope="row">extruder 6</th>
                        <td>{pressure.extruder5}</td>
                        <td>{temperature.extruder5}</td>
                        <td>{material.extruder5}</td>
                    </tr>
                </tbody>

            )
        }
    }

    renderResultList() {
        if(this.props.allData) {
            return this.props.allData.map((element, index) => {
                return (
                    <button key={"button"+index} type="button" className="list-group-item list-group-item-action"
                    onClick={() =>  {
                        this.onclickHandler(index)}
                    }>{element.print_info.files.input}</button>
                )
            })

        }
    }
}


function mapStateToProps(state){

    // console.log(state);
    return {
        allData: state.allData,
        auth: state.auth
    }
}
export default connect(mapStateToProps,actions)(SearchIndex);

// {element.print_info.files.input}