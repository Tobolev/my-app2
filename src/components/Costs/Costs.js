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
            {props.costs.map(cost => <CostItem 
                            costDate={cost.costDate}
                            costName={cost.costName}
                            costAmount={cost.costAmount}
            />
            )}
        </Card>
    </div>
    );
};

export default Costs;