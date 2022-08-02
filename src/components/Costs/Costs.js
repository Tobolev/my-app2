import './Costs.css';
import Card from '../UI/Card';
import CostsFilter from './CostsFilter';
import React, {useState} from 'react';
import CostList from './CostList';
import CostsDiagram from './CostsDiagram';

const Costs = (props) => {

    const [selectedYear, setSelectedYear] = useState('2021');

    const yearChangeHadler = (year) => {
        setSelectedYear(year);
    };

    const filtredCosts = props.costs.filter(cost => {
        
        return cost.costDate.getFullYear().toString() === selectedYear;
    })

    return (
    <div>
        <Card>
            <CostsFilter year={selectedYear}
             onChangeYear={yearChangeHadler} />
             <CostsDiagram costs={filtredCosts}/>
            <CostList costs={filtredCosts}/>
        </Card>
    </div>
    );
};

export default Costs;