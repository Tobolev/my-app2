import './CostItem.css';
import CostDate from './CostDate';
import Card from '../UI/Card';
import React, { useState } from 'react';

const CostItem = (props) => {
    const [costName, setCostName] = useState(props.costName);

    const changeCostNameHandler = () => {
        
        setCostName('New cost');
        console.log(costName);
    };

    return (

    <Card className='cost-item'>
    <CostDate costDate={props.costDate}/>
    <div className='cost-item__description'>
        <h2>{costName}</h2>
        <div className='cost-item__price'>${props.costAmount}</div>
    </div>
    <button onClick={changeCostNameHandler}>Изменить описание</button>
    </Card>
    );
}

export default CostItem;