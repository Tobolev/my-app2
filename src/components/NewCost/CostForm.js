import './CostForm.css';
import React, {useState} from 'react';

const ConstForm = () => {
    const [costName, setCostName] = useState('');
    const [costAmount, setCostAmount] = useState('');
    const [costDate, setCostDate] = useState('');

/*     const [userInput, setUserInput] = useState({
        name: '',
        amount: '',
        date: ''
    }); */

    const costNameChangeHandler = (event) => {
        setCostName(event.target.value);
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
        setCostAmount(event.target.value);
/*         setUserInput({
            ...userInput,
            amount: event.target.value
        });
    };
 */
    };

    const costDateChangeHandler = (event) => {
        setCostDate(event.target.value);
/*         setUserInput({
            ...userInput,
            date: event.target.value
        });
    };
 */

    };

    return <form>
        <div className='new-cost__controls'>
            <div className='new-cost__control label'>
                <label>Название</label>
                <input type = 'text' onChange={costNameChangeHandler}/>
            </div>
            <div className='new-cost__control label'>
                <label>Сумма</label>
                <input type = 'number' min='0.01' step='0.01' onChange={costAmountChangeHandler}/>
            </div>
            <div className='new-cost__control label'>
                <label>Дата</label>
                <input type = 'date' min='2019-01-91' step='2022-12-31' onChange={costDateChangeHandler}/>
            </div>
            <div className='new-cost__actions'>
                <button type='submit'>Добавить Расход</button>
            </div>
            <div>

            </div>
        </div>
    </form>
}

export default ConstForm;