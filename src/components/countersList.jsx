import React, { useState } from 'react';
import Counter from './counter';

const CountersList = () => {
    const initialState = [
        {id:0, value: 0, name: 'Unnecessary thing'},
        {id:1, value: 0, name: 'Spoon'},
        {id:2, value: 0, name: 'Fork'},
        {id:3, value: 0, name: 'Plate'},
        {id:4, value: 0, name: 'Minimalist set'}
    ];

    const [counters, setCounters] = useState(initialState);

    const handleDelete = (id) => {
        setCounters(prevState => prevState.filter(item => item.id !== id))
    };

    const handleReset = () => {
        setCounters(initialState)
    };

    const handleIncrement = (id) => {
        setCounters(counters.map(counter => {
            if (counter.id !== id) return counter;
            counter.value = counter.value + 1;
            return counter
        }))
    };

    const handleDecrement = (id) => {
        // let newCounters = [...counters]
        // newCounters.forEach(item=> item.id === id ? {...item, value: item.value - 1} : item)
        // setCounters(newCounters)
        // Закомментировал нерабочий вариант. если у Вас есть время я был бы не против разобрать почему не работает
        // Моё предположение: метод forEach ничего не возвращает и поэтому setCounters его не понимает. Хотя по идее я создаю новый массив и мутирую уже его
        
        setCounters(counters.map(counter => {
            if (counter.id !== id) return counter;
            counter.value = counter.value - 1;
            return counter
        }))
    };

    return (
        <>
        {counters.map( (count) => (
            <Counter 
                {...count}
                key={count.id}
                onDelete={handleDelete}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                />
        ))}
        <button onClick={handleReset} className="btn btn-primary btn-sm m-2">Reset</button>
        </>
     );
}
 
export default CountersList;
