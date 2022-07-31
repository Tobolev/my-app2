import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const App = () => {

  const costs = [
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

  const addCostHandler = (cost) => {
    console.log(cost);
    console.log('app');
  }

  return (
    <div> 
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
