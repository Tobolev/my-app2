import './Costs.css';
import CostItem from "./CostItem";
import Card from '../UI/Card';
import CostsFilter from './CostsFilter';
import React, {useState} from 'react';

const Costs = (props) => {

    const [selectedYear, setSelectedYear] = useState('2021');

    const yearChangeHadler = (year) => {
        setSelectedYear(year);
    };

    return (
    <div>
        <Card>
            <CostsFilter year={selectedYear} onChangeYear={yearChangeHadler}/>
            <CostItem 
                costDate={props.costs[0].costDate}
                costName={props.costs[0].costName}
                costAmount={props.costs[0].costAmount}
            ></CostItem>
            <CostItem
                costDate={props.costs[1].costDate}
                costName={props.costs[1].costName}
                costAmount={props.costs[1].costAmount}
            ></CostItem>
            <CostItem
                costDate={props.costs[2].costDate}
                costName={props.costs[2].costName}
                costAmount={props.costs[2].costAmount}
            ></CostItem>
        </Card>
    </div>
    );
};

export default Costs;