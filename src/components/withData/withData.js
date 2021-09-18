import React, {useState, useEffect} from 'react';

import Spiner from '../spiner';

const withData = (View) => {
    return (props) => {
        const [data, setData] = useState(null)

        useEffect(() => {
            const {getData} = props

            getData()
                .then((data) => setData(data))
        }, [])

        if(!data) {
            return <Spiner />
        }

        return <View {...props} data={data} />
    }
}

export default withData