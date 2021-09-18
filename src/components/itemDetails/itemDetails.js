import React from 'react';

import './itemDetails.css';
import itemDetailsFunc from './itemDetailsFunc';

const Field = ({item, field, label}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}

export {
    Field
};

const ItemDetails = ({item, children}) => {
    if (!item) {
        return <span className='select-error'>Please select item in the list</span>
    }

    const {name} = item

    return (
        <div className="char-details rounded">
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
                {
                    React.Children.map(children, (child) => {
                        return React.cloneElement(child, {item})
                    })
                }
            </ul>
        </div>
    )
}

export default itemDetailsFunc(ItemDetails)