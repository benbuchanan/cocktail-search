import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import Card from './Card';
import Back from './Back';
import './Flipper.css';

class Flipper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFlipped: false,
            id: props.id,
            name: props.name,
            imgSrc: props.imgSrc,
            ingredients: props.ingredients,
            measures: props.measures,
            instructions: props.instructions,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
    }

    render() {
        return (
            <div className=''>
                <ReactCardFlip
                    isFlipped={this.state.isFlipped}
                    flipDirection='horizontal'
                >
                    <Card
                        key={this.state.id}
                        name={this.state.name}
                        imgSrc={this.state.imgSrc}
                        cardclick={this.handleClick}
                    />
                    <Back
                        key={this.state.id}
                        name={this.state.name}
                        cardclick={this.handleClick}
                        ingredients={this.state.ingredients}
                        measures={this.state.measures}
                        instructions={this.state.instructions}
                    />
                </ReactCardFlip>
            </div>
        );
    }
}

export default Flipper;
