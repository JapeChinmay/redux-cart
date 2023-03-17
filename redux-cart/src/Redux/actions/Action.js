export const ADD = (item) => {
  return {
    type: "ADD_CART",
    payload: item,
  };
};

export const REMOVE = (id) => {
  return {
    type: "RMV",
    payload: id,
  };
};

export const REMOVEONEBYONE = (item) => {
  return {
    type: "RMV_ONE",
    payload: item,
  };
};
