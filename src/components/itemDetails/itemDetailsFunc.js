import React from "react";
import { useEffect, useState } from "react/cjs/react.development";

const itemDetailsFunc = (View) => {
    return (props) => {
        const [item, setItem] = useState(null)

        useEffect(() => {
            updateItem();
        }, [props.itemId])

        const updateItem = () => {
            const {itemId, getData} = props;
    
            if (!itemId) {
                console.log('error')
                return;
            }
    
            getData(itemId)
                .then((item) => {
                    setItem(item)
                })
        }

        return <View {...props} item={item} />
    }
}

export default itemDetailsFunc