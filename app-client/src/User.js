// Nest under App component, over Drink.js
import DrinkList from "./DrinkList";
import NewDrink from "./NewDrink";


export default function User({user, drinks, onAddDrink, onUpdateDrink, onDeleteDrink}){
  const {name} = user
  return(
    <div>
      {/* <h3>{name}</h3> */}
      <DrinkList 
        drinks={drinks}
        username={name}
        // currentUser={testUser}
        onAddDrink={onAddDrink}
        onUpdateDrink={onUpdateDrink} 
        onDeleteDrink={onDeleteDrink} 
      />
      <NewDrink onAddDrink={onAddDrink} />
    </div>
  )
}