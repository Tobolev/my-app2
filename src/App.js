import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const App = () => {

  const costs = [
    {
     costDate: new Date(2021, 2, 12),
     costName: 'Холодильник',
     costAmount: 999.99
    },
    {
      costDate: new Date(2021, 10, 15),
      costName: 'Ноутбук',
      costAmount: 1300.99
     },
     {
      costDate: new Date(2021, 2, 12),
      costName: 'Телефон',
      costAmount: 129.99
     },
  ];


  return (
    <div> 
      <NewCost />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
