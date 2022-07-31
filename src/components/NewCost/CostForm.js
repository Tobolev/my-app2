import './CostForm.css';
import React, {useState} from 'react';

const ConstForm = (props) => {
    const [inputName, setInputName] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');

/*     const [userInput, setUserInput] = useState({
        name: '',
        amount: '',
        date: ''
    }); */

    const costNameChangeHandler = (event) => {
        setInputName(event.target.value);
/*         setUserInput({
            ...userInput,
            name: event.target.value
        }); */
/*         Другой подход
        setUserInput ((previousSate) => {
            return {
                ...previousSate,
                name: event.target.value
            }
        }); */
    };

    const costAmountChangeHandler = (event) => {
        setInputAmount(event.target.value);
/*         setUserInput({
            ...userInput,
            amount: event.target.value
        });
    };
 */
    };

    const costDateChangeHandler = (event) => {
        setInputDate(event.target.value);
/*         setUserInput({
            ...userInput,
            date: event.target.value
        });
    };
 */
        
    };

    const submitHandler = (event) => {
        event.preventDefault();
        
        const CostData = {
            costName: inputName,
            costAmount: inputAmount,
            costDate: new Date(inputDate)
        };

        props.onSaveCostData(CostData);
        setInputName('');
        setInputAmount('');
        setInputDate('');
    };

    return (
    <form onSubmit={submitHandler}>
        <div className='new-cost__controls'>
            <div className='new-cost__control label'>
                <label>Название</label>
                <input type = 'text' value={inputName} onChange={costNameChangeHandler}/>
            </div>
            <div className='new-cost__control label'>
                <label>Сумма</label>
                <input type = 'number' value={inputAmount} min='0.01' step='0.01' onChange={costAmountChangeHandler}/>
            </div>
            <div className='new-cost__control label'>
                <label>Дата</label>
                <input type = 'date' value={inputDate} min='2019-01-91' step='2022-12-31' onChange={costDateChangeHandler}/>
            </div>
            <div className='new-cost__actions'>
                <button type='submit'>Добавить Расход</button>
            </div>
            <div>

            </div>
        </div>
    </form>
    );
};

export default ConstForm;