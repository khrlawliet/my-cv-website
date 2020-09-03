import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router";
import EmployeeService from './EmployeeService';
import Button from '@material-ui/core/Button';
import './CreateOrUpdateEmployee.css'

const CreateOrUpdateEmployee = (props) => {

    const [id, setId] = useState(props.match.params.id);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailId, setEmailId] = useState("");
    const history = useHistory();

    useEffect(() => {
        if (id === '_add') {
            return;
        } else {
            EmployeeService.getEmployeeById(id)
                .then(res => {
                    let employee = res.data;
                    setFirstName(employee.firstName);
                    setLastName(employee.lastName);
                    setEmailId(employee.emailId);
                })
        }
    }, []);

    const updateEmployee = (e) => {
        e.preventDefault();
        let employee = { firstName: firstName, lastName: lastName, emailId: emailId };
        console.log('employee => ' + JSON.stringify(employee));
        if (id === '_add') {
            EmployeeService.createEmployee(employee).then(res => {
                history.push('/employees');
            });
        } else {
            EmployeeService.updateEmployee(employee, id)
                .then(res => {
                    history.push('/employees');
                })
        }
    }

    const changeFirstNameHandler = (event) => {
        setFirstName(event.target.value);

    }

    const changeLastNameHandler = (event) => {
        setLastName(event.target.value);

    }

    const changeEmailHandler = (event) => {
        setEmailId(event.target.value);

    }

    const cancel = () => {
        history.push("/employees");
    }



    return (
        <div className="updateEmployee">
           {id === '_add' ? <h2> Add Employee</h2> : <h2>Update Employee</h2>}     
            <div className="updateEmployee__card">
                <div className="updateEmployee__cardBody">
                    <form action="submit">
                        <div className="updateEmployee__firstName">
                            <label>First Name: </label>
                            <input placeholder="First Name" name="firstName" className="form-control"
                                value={firstName} onChange={changeFirstNameHandler} />

                        </div>
                        <div className="updateEmployee__lastName">
                            <label>Last Name: </label>
                            <input placeholder="Last Name" name="lastName" className="form-control"
                                value={lastName} onChange={changeLastNameHandler} />

                        </div>
                        <div className="updateEmployee__emailId">
                            <label>Email Id: </label>
                            <input placeholder="Email Address" name="emailId" className="form-control"
                                value={emailId} onChange={changeEmailHandler} />

                        </div>
                        <div className="btn__container">
                            <Button color="secondary" variant="contained" className="btn__cancel" onClick={cancel} style={{ marginLeft: "10px" }}>Cancel</Button>
                            <Button color="primary" variant="contained" className="btn__save" onClick={updateEmployee}>Save</Button>
                        </div>


                    </form>
                </div>

            </div>
        </div>

    )
}

export default CreateOrUpdateEmployee

