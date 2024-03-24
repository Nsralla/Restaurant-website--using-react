import { useEffect } from "react";
import { useState } from "react"
import MealItem from "./MealItem";


const Meal = () => {
    const [meals, setMeals] = useState([]);


    useEffect(()=>{
        async function getMealsFromBackend(){
            const response = await fetch('http://localhost:3000/meals');
            const mealsData = await response.json();

            if(!response.ok){
                // do something 
            }

            setMeals(mealsData);
        }
        getMealsFromBackend();
    },[]);


    return (
            <ul id="meals">
                {meals.map((meal)=>{
                    return(<MealItem key={meal.id} meal={meal}/>);
                })}
            </ul>
    )
}

export default Meal