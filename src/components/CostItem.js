import './CostItem.css';

function CostItem(props) {

    return (
    <div className='cost-item'>
    <div className=''>{props.costDate.toISOString()}</div>
    <div className='cost-item__description'>
        <h2 className='cost-item h2'>{props.costName}</h2>
        <div className='cost-item__price'>${props.costAmount}</div>
    </div>
    </div>
    );
}

export default CostItem;