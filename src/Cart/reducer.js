function reducer(state, action) {
  switch (action.type) {
      case 'CLEAR-ITEM':
          return {...state,item:[]}
    case "REMOVE-ITEM":
        const leftItems =state.item.filter((e,i)=>e.id!==action.payload)
        return{...state,item:leftItems}
    case "LOAD":
      return { ...state, isLoad: true };
    case "ITEM":
      return { ...state, isLoad: false, item: [...action.payload.response] };
    case "TOGGLE-QUANTITY":
      let item = state.item.find((e, i) => e.id === action.payload.id);
      if (action.payload.text === "increase") {
        item.amount += 1;
        return {
          ...state,
          isLoad: false,
          item: [...state.item],
        };
      }
      if (action.payload.text === "decrease") {
        item.amount -= 1;
        let remainingItems;
        if (item.amount <= 0) {
          remainingItems = state.item.filter((e, i) => e.id !== item.id);
        } else {
          remainingItems = [...state.item];
        }
        return {
          ...state,
          isLoad: false,
          item: remainingItems,
        };
      }
    case "TOTAL-PRICE":
      return {
        ...state,
        amount: [...state.item.map((e) => e.price * e.amount)]
      };
    default: throw new Error('something went wrong')
  }
}

export default reducer;
