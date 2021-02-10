import React, { Component } from 'react';
import './App.css';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { drinks } from './drinks';

class App extends Component {
    constructor() {
        super();
        this.state = {
            drinks: drinks,
            searchfield: '',
        };
    }

    render() {
        const filteredDrinks = this.state.drinks.filter((drink) => {
            return drink.strDrink
                .toLowerCase()
                .includes(this.state.searchfield.toLowerCase());
        });
        return (
            <div className='App tc'>
                <h1>Cocktail Search</h1>
                <SearchBox
                    searchChange={this.onSearchChange}
                    placeholder='Search by Name'
                />
                {/* FOR INGREDIENT SEARCH <SearchBox searchChange={this.onSearchCHange}/> */}
                <CardList drinks={filteredDrinks} />
            </div>
        );
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    };
}

export default App;
