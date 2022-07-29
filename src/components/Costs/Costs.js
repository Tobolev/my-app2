import './Costs.css';
import CostItem from "./CostItem";
import Card from '../UI/Card';

const Costs = (props) => {

    return (
        <Card>
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
    );
};

export default Costs;