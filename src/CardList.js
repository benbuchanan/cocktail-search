import React from 'react';
import Flipper from './Flipper';

const CardList = ({ drinks }) => {
    return (
        <div className='flex flex-wrap justify-center'>
            {drinks.map((user, i) => {
                let ingredients = [];
                ingredients.push(drinks[i].strIngredient1);
                ingredients.push(drinks[i].strIngredient2);
                ingredients.push(drinks[i].strIngredient3);
                ingredients.push(drinks[i].strIngredient4);
                ingredients.push(drinks[i].strIngredient5);
                ingredients.push(drinks[i].strIngredient6);
                ingredients.push(drinks[i].strIngredient7);
                ingredients.push(drinks[i].strIngredient8);
                ingredients.push(drinks[i].strIngredient9);
                ingredients.push(drinks[i].strIngredient10);
                ingredients.push(drinks[i].strIngredient11);
                ingredients.push(drinks[i].strIngredient12);
                ingredients.push(drinks[i].strIngredient13);
                ingredients.push(drinks[i].strIngredient14);
                ingredients.push(drinks[i].strIngredient15);

                let measures = [];
                measures.push(drinks[i].strMeasure1);
                measures.push(drinks[i].strMeasure2);
                measures.push(drinks[i].strMeasure3);
                measures.push(drinks[i].strMeasure4);
                measures.push(drinks[i].strMeasure5);
                measures.push(drinks[i].strMeasure6);
                measures.push(drinks[i].strMeasure7);
                measures.push(drinks[i].strMeasure8);
                measures.push(drinks[i].strMeasure9);
                measures.push(drinks[i].strMeasure10);
                measures.push(drinks[i].strMeasure11);
                measures.push(drinks[i].strMeasure12);
                measures.push(drinks[i].strMeasure13);
                measures.push(drinks[i].strMeasure14);
                measures.push(drinks[i].strMeasure15);

                return (
                    <Flipper
                        key={drinks[i].idDrink}
                        id={i}
                        name={drinks[i].strDrink}
                        imgSrc={drinks[i].strDrinkThumb}
                        ingredients={ingredients}
                        measures={measures}
                        instructions={drinks[i].strInstructions}
                    />
                );
            })}
        </div>
    );
};

export default CardList;
