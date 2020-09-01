import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            employee: {},
            employeeTasks: {},
            content : []
        }
    }

    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id)
            .then(res => {
                this.setState({ employee: res.data });
            })
        EmployeeService.getEmployeeTasks(this.state.id)
            .then(result => {
                this.setState({ employeeTasks: result.data });
               this.setState({content : this.state.employeeTasks.content}) ;
            })

    }

    render() {
        console.log("employeetasks => "+this.state.employeeTasks);

        console.log("content => "+this.state.content);
        return (
            <div>
                <br />
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">View Employee Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label>Employee First Name : </label>
                            <div> {this.state.employee.firstName}</div>
                        </div>
                        <div className="row">
                            <label>Employee Last Name : </label>
                            <div> {this.state.employee.lastName}</div>
                        </div>
                        <div className="row">
                            <label>Employee Email Id : </label>
                            <div> {this.state.employee.emailId}</div>
                        </div>
                    </div>
                </div>
                <br />

                <div className="card col-md-9 offset-md-3">
                    <h3 className="text-center"> Employee Tasks</h3>
                    <div className="card-body">
                        <div className="row">
                            <table className="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>Task name</th>
                                        <th>Duration</th>
                                        <th>Task description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.content.map(
                                            task =>
                                            <tr key={task.id}>
                                                <td>{task.taskName}</td>
                                                <td>{task.hourDuration}</td>
                                                <td>{task.description}</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewEmployeeComponent;