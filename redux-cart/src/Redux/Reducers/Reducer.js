const INIT_STATE = {
  carts: [],
};

export const cartreducer = (state = INIT_STATE, Action) => {
  switch (Action.type) {
    case "ADD_CART":
      const itemIdx = state.carts.findIndex(
        (item) => item.id === Action.payload.id
      );
      if (itemIdx >= 0) {
        state.carts[itemIdx].qnty += 1;
      } else {
        const temp = {
          ...Action.payload,
          qnty: 1,
        };

        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }

      break;

    case "RMV":
      const data = state.carts.filter((e) => e.id !== Action.payload);
      return {
        ...state,
        carts: data,
      };

    case "RMV_ONE":
      const itemIdxToRemove = state.carts.findIndex(
        (item) => item.id == Action.payload.id
      );
      if (state.carts[itemIdxToRemove].qnty >= 1) {
        const deleteItem = (state.carts[itemIdxToRemove].qnty -= 1);
        console.log(deleteItem);

        return {
          ...state,
          carts: [...state.carts],
        };
      } else if (state.carts[itemIdxToRemove].qnty === 1) {
        const data = state.carts.filter(
          (item) => item.id !== Action.payload.id
        );

        return {
          ...state,
          carts: data,
        };
      }
      break;

    default:
      return state;
  }
};
