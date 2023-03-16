const INIT_STATE = {
  carts: [],
};

export const cartreducer = (state = INIT_STATE, Action) => {
  switch (Action.type) {
    case "ADD_CART":
      return {
        ...state,
        carts: [...state.carts, Action.payload],
      };

    default:
      return state;
  }
};
