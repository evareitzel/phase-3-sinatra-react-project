import Drink from "./Drink";

export default function DrinkList({drinks}){
  console.log(drinks)
  // an I pass keys as "drink" and deconstruct within Drink component?
  // Add Measure 2, 3, 4
  return(
    <div> {/* className="DrinkList" */}
      <h2>Drinks</h2>
      {/* <ul> */}
        {drinks.map(drink => (
          <Drink 
            key={drink.id}
            name={drink.name}
            glass={drink.glass}
            instructions_en={drink.instructions_en}
            ingredient1={drink.ingredient1}
            ingredient2={drink.ingredient2}
            ingredient3={drink.ingredient3}
            measure1={drink.measure1}
          />
        ))}
      {/* </ul> */}
    </div>
  )
}