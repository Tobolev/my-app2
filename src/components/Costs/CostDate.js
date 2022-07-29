import './CostDate.css';

const  CostDate = (props) => {
    const month = props.costDate.toLocaleString('ru-RU', {month: 'long'});
    const year = props.costDate.getFullYear();
    const day = props.costDate.toLocaleString('ru-RU', {day: '2-digit'});
    return (
        <div className="cost-date">
        <div className="cost-date__month">{month}</div>
        <div className="cost-date__year">{year}</div>
        <div className="cost-date__day">{day}</div>
    </div>
    );
};

export default CostDate;