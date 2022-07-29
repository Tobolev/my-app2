import Costs from "./components/Costs/Costs";

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
      <h1> Начало </h1>
      <Costs costs={costs} />
    </div>
  );
}

export default App;
