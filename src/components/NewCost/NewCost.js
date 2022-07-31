import './NewCost.css';
import CostForm from './CostForm';

const NewCost = (props) => {

const saveCostDataHadler = (inputCostData) => {

    const costData = {
        ...inputCostData,
        id: Math.random().toString()
    };

    props.onAddCost(costData);

};

    return <div className="new-cost">
        <CostForm onSaveCostData={saveCostDataHadler} />   
    </div>
};

export default NewCost;