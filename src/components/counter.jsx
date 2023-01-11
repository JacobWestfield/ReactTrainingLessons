import React from 'react';

const Counter = (props) => {
    
    const {value} = props;

    const formatValue = () => {
        return value === 0 ? 'Empty' : value;
    };
    const getBadgeClasses = () => {
        let classes = "badge m-2 ";
        classes += value === 0 ? "bg-warning" : "bg-primary";
        return classes
    };
    
    return ( 
        <div>
        <span>{props.name}</span>
        <span className={getBadgeClasses()}>{formatValue()}</span>
        <button onClick={() => props.onIncrement(props.id)} className="btn btn-primary btn-sm m-2">+</button>
        <button onClick={() => props.onDecrement(props.id)} className="btn btn-primary btn-sm m-2">-</button>
        <button onClick={() => props.onDelete(props.id)} className='btn btn-danger btn-sm m-2'>Delete</button>
        </div>
     );
}
 
export default Counter;
