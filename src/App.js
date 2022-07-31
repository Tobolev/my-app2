import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import React, {useState} from "react";

const INITIAL_COSTS = [
  {
    id: 'c1',
   costDate: new Date(2021, 2, 12),
   costName: 'Холодильник',
   costAmount: 999.99
  },
  {
    id: 'c2',
    costDate: new Date(2021, 10, 15),
    costName: 'Ноутбук',
    costAmount: 1300.99
   },
   {
    id: 'c3',
    costDate: new Date(2021, 2, 12),
    costName: 'Телефон',
    costAmount: 129.99
   },
];

const App = () => {

  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts(prevCosts => {
      return [cost, ...prevCosts]
    });
  };

  return (
    <div> 
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
