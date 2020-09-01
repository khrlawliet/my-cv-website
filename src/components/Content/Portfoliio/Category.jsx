import React from 'react';
import './Category.css';
import RpsLogo from './../../../assets/RpsImages/paper.jpg';
import ExpenseTrackerLogo from './../../../assets/RpsImages/rock.jpg';
import CovidTrackerLogo from './../../../assets/RpsImages/scissors.jpg';
import EmployeeCrudLogo from './../../../assets/RpsImages/paper.jpg';
import RpsGame from './RpsGame/RpsGame';
import ExpenseTracker from './ExpenseTracker/ExpenseTracker';
import CovidTracker from './CovidTracker/CovidTracker';
import EmployeeList from './CrudEmployee/ListEmployee';

import Project from './Project';

const projType = (title) => {
    switch (title) {
        case 'Basic':
            return (
                <>
                    <Project image={RpsLogo} title="RPS Game" description="Rock, Paper and Sciscor Game" project={<RpsGame />} isDialog />
                    <Project image={ExpenseTrackerLogo} title="Expense Tracker" description="Income and Expense Calculation" project={<ExpenseTracker />} isDialog />
                </>

            )
        case 'Intermediate':
            return (
                <>
                    <Project image={CovidTrackerLogo} title="Covid-19 Tracker" description="Live Covid-19 Tacker Worldwide" project={<CovidTracker />} isDialog />
                </>
            )
        case 'Advance':
            return (
                <>
                    <Project image={EmployeeCrudLogo} title="Employee CRUD" description="Full Stack Web Development with Spring Boot Backend" project={<EmployeeList />} uri="/Employees" />
                    <Project image={EmployeeCrudLogo} title="Employee CRUD" description="Full Stack Web Development with Spring Boot Backend" project={<EmployeeList />} uri="/Employees" />
                </>
            )
    }
}

const Catergory = ({ title }) => {
    return (
        <div className="category">
            <h2>{title}</h2>
            <div className="category__proj">
                {projType(title)}
            </div>
        </div>
    )
}

export default Catergory
