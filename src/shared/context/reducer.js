export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) => 
	basket?.reduce((amount, item) => item.price + amount, 0);


const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      //logic for adding to basket
      return {
        ...state, //return what you had in the object plus what we are adding
        basket: [...state.basket, action.item], // returning what the basket was plus the item
      };

    case "REMOVE_FROM_BASKET":
			// logic for re moving item from basket
			// we cloned the basket
			let newBasket = [...state.basket];
			
			// we check to see if product exist
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
				// item exists in basket, remove it ..
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as it's not in the basket`
        );
      }
      return { ...state, basket: newBasket };
    default:
      return { state };
  }
};

// everything inside the data layer is known as state and we manipulate the data layer with action (ex: add item to basket)

export default reducer;
