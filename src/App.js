import CostItem from "./components/CostItem";

function App() {

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
      <CostItem 
            costDate={costs[0].costDate}
            costName={costs[0].costName}
            costAmount={costs[0].costAmount}
      ></CostItem>
      <CostItem
            costDate={costs[1].costDate}
            costName={costs[1].costName}
            costAmount={costs[1].costAmount}
      ></CostItem>
      <CostItem
            costDate={costs[2].costDate}
            costName={costs[2].costName}
            costAmount={costs[2].costAmount}
      ></CostItem>
    </div>
  );
}

export default App;
