import React, { useState, useEffect } from 'react';
import EmployeeService from './EmployeeService';
import './ListEmployee.css';
import { useHistory } from "react-router";

const ListEmployee = () => {

    const [employees, setEmployees] = useState([]);
    const [search, setSearch] = useState("");
    const history = useHistory();

   


    useEffect(() => {
        EmployeeService.getEmployees()
            .then(res => {
                setEmployees(res.data);
            })
    }, [])


    const viewEmployee = (id) => {
        history.push(`/view-employee/${id}`);
    }

    const deleteEmployee = (id) => {
        EmployeeService.deleteEmployee(id)
            .then(res => {
                setEmployees(employees.filter(emp => emp.id !== id))
            })
    }

    const editEmployee = (id) => {
        history.push(`/add-employee/${id}`);
    }

    const addEmployee = (id) => {
        history.push(`/add-employee/add`);
    }

    const searchEmployee = (event) => {
        let keyword = event.target.value;
        setSearch(keyword);
    }


    let filteredEmployees = employees.filter(
        employee => {
            return employee.firstName.toLowerCase().indexOf(search) !== -1
                || employee.lastName.toLowerCase().indexOf(search) !== -1;
        }
    )

    return (
        <div className="listEmployee">
            <h2>Employee List</h2>
            <div className="listEmployee__content">
                <input placeholder="Search..." name="Search" className="listEmployee__search"
                    onChange={(e) => searchEmployee(e)} value={search}></input>
            </div>
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th> First Name</th>
                            <th> Last Name</th>
                            <th> Email Id</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            filteredEmployees.map(
                                employee =>
                                    <tr key={employee.id}>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.emailId}</td>
                                        <td>
                                            <div className="listEmployee__buttons">
                                                <button onClick={() => editEmployee(employee.id)} className="btn btn-info">Update</button>
                                                <button style={{ marginLeft: '10px' }} onClick={() => deleteEmployee(employee.id)} className="btn btn-danger">Delete</button>
                                                <button style={{ marginLeft: '10px' }} onClick={() => viewEmployee(employee.id)} className="btn btn-info">View</button>
                                            </div>
                                        </td>
                                    </tr>
                            )
                        }


                    </tbody>
                </table>

            </div>
            <div className="row">
                <button className="btn btn-primary" onClick={addEmployee}>Add Employee</button>
            </div>

           
        </div>
    )
}

export default ListEmployee
