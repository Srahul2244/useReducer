export const incrementAction = { type: "INCREMENT_COUNT" };
export const decrementAction = { type: "DECREMENT_COUNT" };
export const resetAction = { type: "RESET_COUNT" };

export const incrementByValue = (value) => {
  return {
    type: "INCREMENT_COUNT_BY_VALUE",
    payload: value
  };
};

export const decrementByValue = (value) => ({
  type: "DECREMENT_COUNT_BY_VALUE",
  payload: value
});
