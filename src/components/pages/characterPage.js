import React from 'react'

import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails'
import ErrorMessage from '../errorMessage';
import RowBlock from '../rowBlock';

import gotService from '../../services/gotService';

export default class ChracterPage extends React.Component {
    gotService = new gotService()

    state = {
        selectedChar: 41,
        error: false
    }

    componentDidCatch() {
        this.setState({error: true})
    }

    onItemSelected = (id) => this.setState({selectedChar: id})

    render() {
        const {selectedChar, error} = this.state

        if(error) return <ErrorMessage />

        const itemList = (
            <ItemList
                onItemSelected={this.onItemSelected} 
                getData={this.gotService.getAllCharacters}
                renderItem={({name, gender}) => `${name} (${gender})`} />
        )

        const itemDetails = (
            <ItemDetails 
            itemId={selectedChar}
            getData={this.gotService.getCharacter}>
                <Field field='gender' label='Gender' />
                <Field field='born' label='Born' />
                <Field field='died' label='Died' />
                <Field field='culture' label='Culture' />
            </ItemDetails>
        )

        return (
            <RowBlock left={itemList} right={itemDetails} />
        )
    } 
}
