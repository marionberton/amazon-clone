export const initialState = {
  basket: [],
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
			//logic for adding to basket
			return {
				...state, //return what you had in the object plus what we are adding
				basket: [...state.basket, action.item] // returning what the basket was plus the item
			}
  
    case "REMOVE_FROM_BASKET":
      // logic for removing item from basket
   	return { state };
    default:
      return state;
  }
};

// everything inside the data layer is known as state and we manipulate the data layer with action (ex: add item to basket)

export default reducer;
