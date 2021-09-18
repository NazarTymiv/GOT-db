import React from 'react'

import ItemList from '../itemList';
import ErrorMessage from '../errorMessage';
import ItemDetails, {Field} from '../itemDetails'
import RowBlock from '../rowBlock';

import gotService from '../../services/gotService';

export default class HousePage extends React.Component {
    gotService = new gotService()

    state = {
        selectedHouse: null,
        error: false
    }

    componentDidCatch() {
        this.setState({error: true})
    }

    onItemSelected = (id) => this.setState({selectedHouse: id})

    render() {
        const {error} = this.state

        if(error) return <ErrorMessage />

        const itemList = (
            <ItemList
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllHouses}
                renderItem={({name}) => name} />
        )

        const itemDetails = (
            <ItemDetails
            itemId={this.state.selectedHouse}
            getData={this.gotService.getHouse}>
                <Field field='region' label='Region'/>
                <Field field='words' label='Words'/>
                <Field field='titles' label='Titles'/>
                <Field field='ancestralWeapons' label='Ancestral Weapons'/>
            </ItemDetails>
        )

        return (
            <RowBlock left={itemList} right={itemDetails} />
        )
    } 
}
