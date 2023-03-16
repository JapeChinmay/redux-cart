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

    case "RMV":
      const data = state.carts.filter((e) => e.id !== Action.payload);
      return {
        ...state,
        carts: data,
      };

    default:
      return state;
  }
};
