import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types'

import GotService from '../../services/gotService';

import Spiner from '../spiner'
import ErrorMessage from '../errorMessage';

const randomCharFunc = (View) => {
    return (props) => {
        const [char, setChar] = useState({})
        const [loading, setloading] = useState(true)
        const [error, seterror] = useState(false)
        const gotService = new GotService()
    
        useEffect(() => {
            updateChar()
            let timerId = setInterval(updateChar, props.interval)
    
            return () => clearInterval(timerId)
        }, [])
    
        const onCharLoaded = (char) => {
            setChar(char)
            setloading(false)
        }
    
        const onError = (err) => {
            seterror(true)
            setloading(false)
        }
    
        const updateChar = () => {
            const id = Math.floor(Math.random()*140 + 25)
            gotService.getCharacter(id)
                .then(onCharLoaded)
                .catch(onError)
        }
    
        return (
            <div className="random-block rounded">
                {error ? <ErrorMessage /> : loading ? <Spiner /> : <View char={char} />}
            </div>
        )
    }
}

randomCharFunc.defaultProps = {
    interval: 15000
}

randomCharFunc.propTypes = {
    interval: PropTypes.number
}

export default randomCharFunc