import React from 'react';

import withData from '../withData';

import './itemList.css';

const ItemList = ({ data, renderItem, onItemSelected }) => {

    return (
        <ul className="item-list list-group">
            {data.map((item, i) => {
                const {id} = item
                const label = renderItem(item)
                return (
                    <li className="list-group-item" onClick={() => onItemSelected(id)} key={i}>
                        {label}
                    </li>
                )
            } )}
        </ul>
    );
}

export default withData(ItemList)