import React from 'react';
import './Category.css';
import RpsLogo from './../../../assets/RpsImages/paper.jpg';
import ExpenseTrackerLogo from './../../../assets/RpsImages/rock.jpg';
import RpsGame from './RpsGame/RpsGame';
import ExpenseTracker from './ExpenseTracker/ExpenseTracker'

import Project from './Project';

const projType = (title) => {
    switch (title) {
        case 'Basic':
            return (
                <>
                    <Project image={RpsLogo} title="RPS Game" description="Rock, Paper and Sciscor game" project={<RpsGame />} isDialog />
                    <Project image={ExpenseTrackerLogo} title="Expense Tracker" description="Income and Expense calculation" project={<ExpenseTracker />} isDialog />
                </>

            )
        case 'Intermediate':
            return (<>
            
            </>)
        case 'Advance':
            return (<div></div>)
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
